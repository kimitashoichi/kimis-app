import React, {FC, useEffect} from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

// file
import ShowIdeabyIdContainer from './showIdeaContainer';
import IdeaShowUserProfile from './showIdeaUserProfile';
import ShowCommentContainer from './showCommentContainer';
import CreateCommentContainer from './createCommentContainer';
import { getUserInformation } from '../../actions/userAction';
import * as Models from '../../models/userModels';
import { AppState } from '../../models';
import { ShowPageWarpper } from './style';

interface StateProps {
  userInfromation?: Models.LoginUser;
  isLoading?: boolean;
}

interface DispatchProps {
  getUserInfromation: (uid: string) => void;
}

type DefaultProps = StateProps & DispatchProps;

const ShowIdeaContainer: FC<DefaultProps> = ({
  userInfromation,
  isLoading,
  getUserInfromation
}) => {
  useEffect(() => {
    if(userInfromation){
      getUserInfromation(userInfromation.userId)
    }
  }, [])

  let uid: string;
  function currentUserCheck(): boolean {
    if(userInfromation){
      if(userInfromation.userId !== '') {
        return true;
      }
    }
    return false;
  }

  return (
    <>
      <ShowPageWarpper>
        <IdeaShowUserProfile userInfromation={userInfromation} />
        <ShowIdeabyIdContainer />
        <ShowCommentContainer userInfo={userInfromation} />

        { currentUserCheck() ? (
          <CreateCommentContainer userInfo={userInfromation} />
          ) : (null) }
          
      </ShowPageWarpper>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.userInfromation.isLoading,
  userInfromation: state.userInfromation.loginUser
})

const mapDispatchToState = (dispatch: Dispatch) => 
  bindActionCreators({
    getUserInfromation: uid => getUserInformation.start(uid)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToState
)(ShowIdeaContainer);