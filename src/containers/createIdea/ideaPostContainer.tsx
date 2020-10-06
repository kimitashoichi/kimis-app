import React, { FC, useState, useEffect, FormEvent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

//  material-ui
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

//  file
import { postIdeaAction } from '../../actions/ideaAction';
import { alreadyLoginUserAction } from '../../actions/userAction';
import * as Models from '../../models/ideaModel';
import * as UModels from '../../models/userModels';
import * as TextIndex from '../../constants/textIndex';
import { AppState } from '../../models'

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #808080 30%, #a9a9a9 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 20px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 20px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

const StyledTextField = styled(TextareaAutosize)`
  width: 100%;
  height: 60%;
`;

const StyledTitleField = styled(TextareaAutosize)`
  width: 100%;
  height: 30%;
`;

const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50%;
`;

const ButtonWapper = styled.div`
  padding-top: 20px;
  text-align: right;
`;

const TitleLabel = styled.h3`
  text-align: left;
`;

const ContentLabel = styled.h4`
  text-align: left;
`;

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