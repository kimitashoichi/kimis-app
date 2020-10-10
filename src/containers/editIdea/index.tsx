import React, { FC, useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import EditingIdeasContainer from './editIdeaContainer';
import { getUrlId } from '../../utils/utilFunctions';
import { getIdeabyId } from '../../actions/ideaAction';
import { alreadyLoginUserAction } from '../../actions/userAction';
import * as Models from '../../models/ideaModel';
import * as UModels from '../../models/userModels';
import { AppState } from '../../models'
import { connect } from 'react-redux';

const IdeaEditWarapper = styled.div`
  width: 60%
  margin: 0 auto;
`;

interface DispathcProps {
  alreadyLogin: () => void;
  getIdeabyId: (id: string) => void;
}

interface StateProps {
  idea: Models.PostIdea;
  userInfo: UModels.LoginUser;
  isLoading: boolean;
}

type DefaultProps = StateProps & DispathcProps;

const EditContainer: FC<DefaultProps> = ({
  alreadyLogin,
  getIdeabyId,
  idea,
  userInfo,
  isLoading
}) => {
  useEffect(() => {
    alreadyLogin()
    getIdeabyId(getUrlId())
  }, [])

  return (
    <>
      { idea.uid === userInfo.userId ? 
        ( idea && (
          <IdeaEditWarapper>
            <EditingIdeasContainer idea={idea} userInfo={userInfo} />
          </IdeaEditWarapper>
         ))
      : (<Redirect to='/' />) 
      }
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  idea: state.postIdea.postIdea,
  userInfo: state.userInfromation.loginUser,
  isLoading: state.postIdea.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    alreadyLogin: () => alreadyLoginUserAction.start(),
    getIdeabyId: id => getIdeabyId.start(id)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer);