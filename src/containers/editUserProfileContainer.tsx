import React, {FC, useState, useEffect, FormEvent}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// material ui
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import * as Models from '../models/userModels';
import { 
  editUserProfile,
  alreadyLoginUserAction,
 } from '../actions/userAction';
import { AppState } from '../models';


const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 20px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
`;

const StyledTextField = styled(TextareaAutosize)`
  width: 100%;
  height: 60%;
`;

const TitleLabel = styled.div`
  text-align: left;
`;

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
      { loginUser ? 
        (
          <TextFieldWapper>
            <TitleLabel>displayName</TitleLabel>
            <StyledTextField
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />

            <TitleLabel>email</TitleLabel>
            <StyledTextField
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <TitleLabel>introduce</TitleLabel>
            <StyledTextField
              value={introduce}
              onChange={e => setIntroduce(e.target.value)}
            />

            <TitleLabel>phoneNumber</TitleLabel>
            <StyledTextField
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />

            <TitleLabel>userName</TitleLabel>
            <StyledTextField
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />


            <SubmitButton
              onClick={handleOnSubmit}
            >更新</SubmitButton>
          </TextFieldWapper>
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