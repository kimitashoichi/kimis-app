import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styed from 'styled-components';

// material ui

// file
import * as Models from '../models/userModels';
import { 
  loginUserAction,
  logoutUserAction
 } from '../actions/userAction';
import { AppState } from '../models';

interface Props {
  userInfo: Models.LoginUser
}

interface StateProps {
  isLoading?: boolean;
}

interface DispatchProps {
  loginUserAction: () => void;
  logoutUserAction: () => void;
}

type DefaultProps = StateProps & DispatchProps & Props;

const HeaderContainer: FC<DefaultProps> = ({
  isLoading,
  userInfo,
  loginUserAction,
  logoutUserAction
}) => {
  return (
    <>
      { userInfo ? (
        <div>
          <h2>{userInfo.displayName}</h2>
          <h2>{userInfo.userId}</h2>
          <h2>{userInfo.userName}</h2>
          <h2>{userInfo.introduce}</h2>
        </div>
      ) : (<h1>Please Login!!</h1>)}
      
      <button onClick={loginUserAction}>Login</button>
      <button onClick={logoutUserAction}>Logout</button>
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
    logoutUserAction: () => logoutUserAction.start()
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);