import React, {FC, useEffect} from 'react';
import styled from 'styled-components';

// file
import ShowIdeabyIdContainer from './showIdeaContainer';
import IdeaShowUserProfile from './showIdeaUserProfile';
import ShowCommentContainer from './showCommentContainer';
import CreateCommentContainer from './createCommentContainer';
import { getUserInformation } from '../../actions/userAction';
import * as Models from '../../models/userModels';
import { AppState } from '../../models';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

const ShowPageWarpper = styled.div`
  width: 50%
  margin: 0 auto;
`;
// 投稿一覧画面から遷移した時に指定の投稿データの詳細を表示するために投稿に関するIDを全て取得しなければいけない
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


  return (
    <>
      <ShowPageWarpper>
        <IdeaShowUserProfile userInfromation={userInfromation} />
        <ShowIdeabyIdContainer />
        <ShowCommentContainer userInfo={userInfromation} />
        <CreateCommentContainer userInfo={userInfromation} />
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