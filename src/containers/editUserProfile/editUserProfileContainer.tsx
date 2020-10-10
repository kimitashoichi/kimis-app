import React, {FC, useState, useEffect, FormEvent}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect } from 'react-router-dom';

import * as Models from '../../models/userModels';
import { 
  editUserProfile,
  alreadyLoginUserAction,
 } from '../../actions/userAction';
import { AppState } from '../../models';
import { getUrlId } from '../../utils/utilFunctions';

// ui design
import {
  SubmitButton,
  TextFieldWapper,
  StyledTextField,
  TitleLabel
} from './style';

interface DispatchProps {
  editUserProfile: (editData: Models.LoginUser) => void;
  alreadyLoginUserAction: () => void;
}

interface StateProps {
  loginUser: Models.LoginUser;
  isLoading: boolean;
}

type DefaultProps = DispatchProps & StateProps;

const EditUserProfile: FC<DefaultProps> = ({
  loginUser,
  isLoading,
  editUserProfile,
  alreadyLoginUserAction
}) => {
  const [displayName, setDisplayName] = useState<string | undefined> (loginUser ? loginUser.displayName : '');
  const [email, setEmail] = useState<string | undefined>(loginUser ? loginUser.email : '');
  const [introduce, setIntroduce] = useState<string | undefined>(loginUser ? loginUser.introduce : '');
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(loginUser ? loginUser.phoneNumber : '');
  const [userName, setUserName] = useState<string | undefined>(loginUser ? loginUser.userName : '');
  const [currentUrl, setCurrentUrl] = useState<string>(getUrlId());

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
      { loginUser.userId === currentUrl ? 
        (
          <TextFieldWapper>
            <TitleLabel>displayName</TitleLabel>
            <StyledTextField
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}/>

            <TitleLabel>email</TitleLabel>
            <StyledTextField
              value={email}
              onChange={e => setEmail(e.target.value)}/>

            <TitleLabel>introduce</TitleLabel>
            <StyledTextField
              value={introduce}
              onChange={e => setIntroduce(e.target.value)}/>

            <TitleLabel>phoneNumber</TitleLabel>
            <StyledTextField
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}/>

            <TitleLabel>userName</TitleLabel>
            <StyledTextField
              value={userName}
              onChange={e => setUserName(e.target.value)}/>

            <SubmitButton onClick={handleOnSubmit}>更新</SubmitButton>
          </TextFieldWapper>
        ) : (
          <Redirect to='/' />
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