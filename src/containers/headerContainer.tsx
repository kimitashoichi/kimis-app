import React, {FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// material ui
import Button from '@material-ui/core/Button'

// file
import * as Models from '../models/userModels';
import { 
  loginUserAction,
  logoutUserAction,
  alreadyLoginUserAction,
  getUserInformation
 } from '../actions/userAction';
import { AppState } from '../models';
import LinkComponent from '../components/LinkComponest';
import TextField from '@material-ui/core/TextField/TextField';

const HeaderBox = styled.div`
  height: 70px;
  align-items: center;
  justify-content: center;
`;

const LoginInfo = styled.ul`
  display: flex;
`;

const LoginInfoNav = styled.li`
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-right: 30px;
  margin-left: 20px;
  display: inline-block;
`;

const SessionButton = styled(Button)`
  margin-left: auto;
  margin-right: 200px;
`;

const Navli = styled.li`
  margin: 10px;
  display: inline-block;
`;

const SearchFiled = styled(TextField)`
  margin-left: 30px;
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
    console.log(userInfo.userId);
  }, []);

  if(userInfo){
    console.log(userInfo.userId ? userInfo.userId : 'nothing user id');
  }

  return (
    <>
      { userInfo ? (
        <HeaderBox>
          <LoginInfo>
            <h3>Product Logo</h3>
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
                <SessionButton onClick={logoutUserAction} color="primary" variant="contained">Logout</SessionButton>
              </Navli>
            </LoginInfo>
          </LoginInfo>
        </HeaderBox>
      ) : (
        <HeaderBox>
          <LoginInfo>
            <h3>Product Logo</h3>
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