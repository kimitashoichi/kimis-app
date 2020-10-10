import React, { FC, useState, useEffect, FormEvent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

//  file
import { postIdeaAction } from '../../actions/ideaAction';
import { alreadyLoginUserAction } from '../../actions/userAction';
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

// git reset --soft HEAD~
interface DispatchProps {
  createIdea: (payload: Models.PostIdea) => void;
  alreadyLogin: () => void;
}

interface Props {
  content?: Models.PostIdea;
}

interface StateProps {
  isLoading?: boolean;
  userInfo: UModels.LoginUser;
}

type DefaultProps = DispatchProps & Props & StateProps;

const PostIdeaContainer: FC<DefaultProps> = ({
  isLoading,
  content,
  createIdea,
  alreadyLogin,
  userInfo
}) => {
  const [title, setTitle] = useState<string | undefined>(content ? content.title : '');
  const [ideaContent, setIdeaContent] = useState<string>(content ? content.content : '');
  const [createDate, setCrateDate] = useState<Date>(content ? content.createdAt: new Date());
  const [updateDate, setUpdateDate] = useState<Date | null>(content ? content.updatedAt : null);
  const [postFlag, setPostFlag] = useState<boolean>(true);

  useEffect(() => {
    alreadyLogin()
  }, []);
  
  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      uid: userInfo.userId,
      authorName: userInfo.userName,
      title: title,
      content: ideaContent,
      goodCount: 0,
      postFlag: postFlag,
      createdAt: createDate instanceof Date ? createDate : new Date(),
      updatedAt: updateDate === null ? null : new Date(),
    }
    await createIdea(payload);
    setIdeaContent('');
    setTitle('');
    setPostFlag(true)
    setCrateDate(new Date());
    setUpdateDate(null);
  }

  return (
    <>
     { isLoading ? (
       <TextFieldWapper>
         <TitleLabel>投稿内容</TitleLabel>
         <h2>Now Sending...</h2>
       </TextFieldWapper>
     ) : (
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
     )}
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.postIdea.isLoading,
  userInfo: state.userInfromation.loginUser
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    createIdea: payload => postIdeaAction.start(payload),
    alreadyLogin: () => alreadyLoginUserAction.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIdeaContainer);