import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styed from 'styled-components';

// material ui
import Button from '@material-ui/core/Button'

// file
import * as Models from '../models/userModels';
import { 
  loginUserAction,
  logoutUserAction,
  alreadyLoginUserAction
 } from '../actions/userAction';
import { AppState } from '../models';
import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const LoginInfo = styed.ul`
  list-style: none;
  display: flex;
`;

const LoginInfoNav = styed.li`
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-right: 30px;
`;

const SessionButton = styed(Button)`
  margin-left: auto;
  margin-right: 200px;
`;

interface Props {
  userInfo: Models.LoginUser
}

interface StateProps {
  isLoading?: boolean;
}

interface DispatchProps {
  loginUserAction: () => void;
  logoutUserAction: () => void;
  alreadyLogin: () => void;
}

type DefaultProps = StateProps & DispatchProps & Props;

const HeaderContainer: FC<DefaultProps> = ({
  isLoading,
  userInfo,
  loginUserAction,
  logoutUserAction,
  alreadyLogin
}) => {
  
  useEffect(() => {
    alreadyLogin()
  }, []);

  return (
    <>
      { userInfo ? (
        <HeaderBox>
          <LoginInfo>
            <h3>Product Logo</h3>
            <textarea></textarea>
            <LoginInfoNav>{userInfo.displayName}</LoginInfoNav>
            <LoginInfoNav>{userInfo.userId}</LoginInfoNav>
            <LoginInfoNav>{userInfo.userName}</LoginInfoNav>
            <LoginInfoNav>{userInfo.introduce}</LoginInfoNav>
            <SessionButton 
              onClick={logoutUserAction}
              color="primary"
              variant="contained">Logout</SessionButton>
          </LoginInfo>
        </HeaderBox>
      ) : (
        <HeaderBox>
          <LoginInfo>
            <h3>Product Logo</h3>
            <SessionButton 
              onClick={loginUserAction}
              color="primary"
              variant="contained">Login</SessionButton>
          </LoginInfo>
        </HeaderBox>
      )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.userInfromation.isLoading,
  userInfo: state.userInfromation.loginUser
})

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    loginUserAction: () => loginUserAction.start(),
    logoutUserAction: () => logoutUserAction.start(),
    alreadyLogin: () => alreadyLoginUserAction.start()
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);