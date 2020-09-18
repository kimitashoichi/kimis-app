import React, {FC, useState, useEffect, FormEvent}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// material ui

import * as Models from '../models/userModels';
import { 
  editUserProfile,
  alreadyLoginUserAction,
 } from '../actions/userAction';
import { AppState } from '../models';
import HeaderContainer from './headerContainer';

interface DispatchProps {
  editUserProfile: (editData: Models.LoginUser) => void;
  alreadyLoginUserAction: () => void;
}

interface StateProps {
  loginUser: Models.LoginUser
  isLoading: boolean
}

type DefaultProps = DispatchProps & StateProps;

const EditUserProfile: FC<DefaultProps> = ({
  loginUser,
  isLoading,
  editUserProfile,
  alreadyLoginUserAction
}) => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    alreadyLoginUserAction();
  }, []);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      displayName: displayName === '' ? loginUser.displayName : displayName, 
      email,
      introduce,
      phoneNumber,
      userName,
      userId: loginUser.userId
    };

    await editUserProfile(payload);
  }

  return (
    <>
      <HeaderContainer />
      { loginUser ? 
        (
          <div>
            <textarea
              onChange={e => setDisplayName(e.target.value)}
            >{loginUser.displayName}</textarea>
            <textarea
              onChange={e => setEmail(e.target.value)}
            >{loginUser.email}</textarea>
            <textarea
              onChange={e => setIntroduce(e.target.value)}
            >{loginUser.introduce}</textarea>
            <textarea
              onChange={e => setPhoneNumber(e.target.value)}
            >{loginUser.phoneNumber}</textarea>
            <textarea
              onChange={e => setUserName(e.target.value)}
            >{loginUser.userName}</textarea>
            <button
              onClick={handleOnSubmit}
            >更新</button>
          </div>
        ) : (
          <div>Login Please</div>
        )
      }

    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.userInfromation.isLoading,
  loginUser: state.userInfromation.loginUser
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    editUserProfile: (editData: Models.LoginUser) => editUserProfile.start(editData),
    alreadyLoginUserAction: () => alreadyLoginUserAction.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfile);