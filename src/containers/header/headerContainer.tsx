import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// file
import * as Models from '../../models/userModels';
import { 
  loginUserAction,
  logoutUserAction,
  alreadyLoginUserAction,
  getUserInformation
 } from '../../actions/userAction';
import { AppState } from '../../models';
import LinkComponent from '../../components/LinkComponest';

// ui design
import Button from '@material-ui/core/Button'
import {
  HeaderBox,
  LoginInfo,
  LoginInfoNav,
  SessionButton,
  Navli,
  SearchFiled
} from './style';


interface Props {
  userInfo: Models.LoginUser;
}

interface StateProps {
  isLoading?: boolean;
}

interface DispatchProps {
  loginUserAction: () => void;
  logoutUserAction: () => void;
  alreadyLogin: () => void;
  getloginUserInfo: (uid: string) => void;
}

type DefaultProps = StateProps & DispatchProps & Props;

const HeaderContainer: FC<DefaultProps> = ({
  isLoading,
  userInfo,
  loginUserAction,
  logoutUserAction,
  alreadyLogin,
  getloginUserInfo
}) => {
  useEffect(() => {
    alreadyLogin()
    getloginUserInfo(userInfo.userId);
  }, [userInfo.userId]);

  return (
    <>
      { userInfo.userId ? (
        <HeaderBox>
          <LoginInfo>
            <LinkComponent src={'/'}>Product Logo</LinkComponent>
            <SearchFiled id="outlined-basic" label="serch word" variant="outlined" />
            <LoginInfoNav>{userInfo.displayName}</LoginInfoNav>
            <LoginInfoNav>{userInfo.userId}</LoginInfoNav>
            <LoginInfo>
              <Navli>
                <LinkComponent src={'/create'}>
                  <Button color="primary" variant="contained">Create</Button>
                </LinkComponent>
              </Navli>
              <Navli>
                <LinkComponent src={`/useredit/${userInfo.userId}`}>
                  <Button color="primary" variant="contained">Edit Profile</Button>
                </LinkComponent>
              </Navli>
              <Navli>
                <SessionButton onClick={logoutUserAction} color="primary" variant="contained">Logout</SessionButton>
              </Navli>
            </LoginInfo>
          </LoginInfo>
        </HeaderBox>
      ) : (
        <HeaderBox>
          <LoginInfo>
            <LinkComponent src={'/'}>Product Logo</LinkComponent>
            <SearchFiled id="outlined-basic" label="serch word" variant="outlined" />
            <Navli>
              <SessionButton 
                onClick={loginUserAction}
                color="primary"
                variant="contained">Login</SessionButton>
            </Navli>
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
    alreadyLogin: () => alreadyLoginUserAction.start(),
    getloginUserInfo: uid => getUserInformation.start(uid)
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);