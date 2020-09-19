import React, { FC, useState, FormEvent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';

//  material-ui
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

//  file
import { 
  postIdeaAction,
  draftIdeaAction
 } from '../../actions/ideaAction';
import * as Models from '../../models/ideaModel';
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

// git reset --soft HEAD~
interface DispatchProps {
  createIdea: (payload: Models.PostIdea) => void;
  createDraftIdea: (payload: Models.PostIdea) => void;
}

interface Props {
  content?: Models.PostIdea;
}

interface StateProps {
  isLoading?: boolean;
  isDraft?: boolean;
}

type DefaultProps = DispatchProps & Props & StateProps;


const PostIdeaContainer: FC<DefaultProps> = ({
  isLoading,
  content,
  createIdea,
  createDraftIdea
}) => {
  const [idea, setIdea] = useState<string>(content ? content.content : '');
  const [createDate, setCrateDate] = useState<Date>(content ? content.createdAt: new Date());
  const [updateDate, setUpdateDate] = useState<Date | null>(content ? content.updatedAt : null);
  const [isDraft, setIsDraft] = useState<boolean>(false);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      content: idea,
      createdAt: createDate instanceof Date ? createDate : new Date(),
      updatedAt: updateDate === null ? null : new Date(),
    }

    if(isDraft) {
      await createDraftIdea(payload);
    } else {
      await createIdea(payload);
    }

    setIdea('');
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
            <StyledTextField
              className="standard-textarea"
              placeholder="アイディアを投稿しよう！"
              value={idea}
              rowsMin={10}
              onChange={(e) => setIdea(e.target.value)}/>
          <ButtonWapper>
            <StyledButton 
              onClick={handleOnSubmit}
              onMouseDown={() => setIsDraft(true)}>
              {TextIndex.DRAFT}
            </StyledButton>
            <SubmitButton
              className='idea-post-button'
              onClick={handleOnSubmit}
              onMouseDown={() => setIsDraft(false)}
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
  isLoading: state.postIdea.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    createIdea: payload => postIdeaAction.start(payload),
    createDraftIdea: payload => draftIdeaAction.start(payload)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIdeaContainer);