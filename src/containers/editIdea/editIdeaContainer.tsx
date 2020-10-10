import React, { FC, useState, FormEvent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

//  file
import { updateIdeaAction } from '../../actions/ideaAction';
import * as Models from '../../models/ideaModel';
import * as UModels from '../../models/userModels';
import * as TextIndex from '../../constants/textIndex';
import { AppState } from '../../models'

// ui design
import {
  StyledButton,
  SubmitButton,
  StyledTextField,
  StyledTitleField,
  TextFieldWapper,
  ButtonWapper,
  TitleLabel,
  ContentLabel
} from './style'

interface DispatchProps {
  updateIdea: (payload: Models.PostIdea) => void;
}

interface StateProps {
  isLoading?: boolean;
  userInfo: UModels.LoginUser;
  idea: Models.PostIdea;
}

type DefaultProps = DispatchProps & StateProps;

const EditingIdeasContainer: FC<DefaultProps> = ({
  isLoading,
  userInfo,
  idea,
  updateIdea
}) => {
  const [title, setTitle] = useState<string | undefined>(idea ? idea.title : '');
  const [ideaContent, setIdeaContent] = useState<string>(idea ? idea.content : '');
  const [createDate, setCrateDate] = useState<Date>(idea ? idea.createdAt: new Date());
  const [goodCount, setGoodCount] = useState<number | undefined>(idea ? idea.goodCount : 0);
  const [postFlag, setPostFlag] = useState<boolean>(true);

  const history = useHistory();
  
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      uid: userInfo.userId,
      authorName: userInfo.userName,
      title: title,
      content: ideaContent,
      goodCount: goodCount,
      postFlag: postFlag,
      createdAt: createDate instanceof Date ? createDate : new Date(),
      updatedAt: new Date(),
      ideaId: idea.ideaId
    }
    await updateIdea(payload);
    setIdeaContent('');
    setTitle('');
    setPostFlag(true)

    await history.push('/')
  }

  return (
    <>
     { isLoading ? (
       <TextFieldWapper>
         <TitleLabel>投稿内容</TitleLabel>
         <h2>Now Sending...</h2>
       </TextFieldWapper>
     ) : (
      <>
        <TextFieldWapper>
          <TitleLabel>投稿内容</TitleLabel>
            <ContentLabel>アイディアタイトル</ContentLabel>
            <StyledTitleField
              className="standard-textarea"
              placeholder="タイトル"
              value={title}
              rowsMin={2}
              onChange={(e) => setTitle(e.target.value)}/>
            <ContentLabel>アイディア内容</ContentLabel>
            <StyledTextField
              className="standard-textarea"
              placeholder="アイディアの詳細を記載"
              value={ideaContent}
              rowsMin={10}
              onChange={(e) => setIdeaContent(e.target.value)}/>
          <ButtonWapper>
            <StyledButton 
              onClick={handleOnSubmit}
              onMouseDown={() => setPostFlag(false)}>
              {TextIndex.DRAFT}
            </StyledButton>
            <SubmitButton
              className='idea-post-button'
              onClick={handleOnSubmit}
              onMouseDown={() => setPostFlag(true)}
              variant="contained" 
              color="primary">
              {TextIndex.SUBMIT}
            </SubmitButton>
          </ButtonWapper>
        </TextFieldWapper>
      </>
     )}
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    updateIdea: payload => updateIdeaAction.start(payload),
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditingIdeasContainer);