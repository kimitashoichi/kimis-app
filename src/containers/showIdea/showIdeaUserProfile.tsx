import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

// file
import { getUserInformation } from '../../actions/userAction';
import * as Models from '../../models/userModels';
import { AppState } from '../../models';

const UserProf = styled.div`
  width: 60%;
  margin: 0 auto;
`;

interface Props {
  userInfromation?: Models.LoginUser;
}

interface DispatchProps {
  getUserInfromation: (uid: string) => void;
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
    if(userInfromation){
      getUserInfromation(userInfromation.userId)
    }
  }, [])

  return (
    <>
      { userInfromation ? 
          ( <UserProf>
              <h4>Name: {userInfromation.userName}</h4>
              <h4>UID: {userInfromation.userId}</h4>
              <h4>INTRO: {userInfromation.introduce}</h4>
            </UserProf> 
          ) : (
            null
          )
      }
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.userInfromation.isLoading
})

const mapDispatchToState = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfromation: uid => getUserInformation.start(uid)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToState
)(IdeaShowUserProfile);