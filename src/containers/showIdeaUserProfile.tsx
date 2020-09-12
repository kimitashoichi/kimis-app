import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// material ui

// file
import {
  getUserInformation
} from '../actions/userAction';
import * as Models from '../models/userModels';
import { AppState } from '../models';

const UserProf = styled.div`
  width: 60%;
  margin: 0 auto;
`

interface Props {
  userInfromation?: Models.LoginUser
}

interface DispatchProps {
  // TODO: use login uid
  getUserInfromation: () => void;
}

interface StateProps {
  isLoading?: boolean;
}

type DefaultProps = Props & DispatchProps & StateProps;

const IdeaShowUserProfile: FC<DefaultProps> = ({
  isLoading,
  userInfromation,
  getUserInfromation
}) => {
  useEffect(() => {
    getUserInfromation()
  }, [])

  return (
    <>
      { userInfromation ? 
          ( <UserProf>
              <h3>{userInfromation.userName}</h3>
              <h4>{userInfromation.userId}</h4>
              <h5>{userInfromation.introduce}</h5>
            </UserProf> 
          ) : (
            <div>No Data</div>
          )
      }
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.userInfromation.isLoading,
  userInfromation: state.userInfromation.loginUser
})

const mapDispatchToState = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfromation: () => getUserInformation.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToState
)(IdeaShowUserProfile);