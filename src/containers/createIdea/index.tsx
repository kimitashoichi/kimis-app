import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PostIdeaContainer from './ideaPostContainer';
import { IdeaCreateAndEditWarapper } from './style';
import { AppState } from '../../models';
import * as Models from '../../models/userModels';

interface StateProps {
  isLoading?: boolean;
  userInfo: Models.LoginUser;
}

const IdeaCreateContainer: FC<StateProps> = ({
  isLoading,
  userInfo
}) => {
  return (
    <>
      { userInfo.userId ? (
        <IdeaCreateAndEditWarapper>
          <PostIdeaContainer />
        </IdeaCreateAndEditWarapper>
      ) : (<Redirect to='/' />)}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userInfromation.loginUser,
  isLoading: state.userInfromation.isLoading
})

export default connect(
  mapStateToProps
)(IdeaCreateContainer);