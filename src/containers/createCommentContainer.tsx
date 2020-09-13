import React, { FC, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components'

// material-ui
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

// file
import * as Models from '../models/commentModel';
import * as TextIndex from '../constants/textIndex';
import { createComment } from '../actions/commentAction';
import { AppState } from '../models';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-right: 20px;
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  margin-right: 20px;
`

const StyledTextField = styled(TextareaAutosize)`
  width: 100%;
  height: 60%;
`;

const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 70%;
`;

const ButtonWapper = styled.div`
  padding-top: 30px;
  text-align: right;
`;


interface StateProps {
  isLoading?: boolean;
}

interface DispatchProps {
  createComment: (payload: Models.Comment) => void;
}

type DefautProps = StateProps & DispatchProps;

const CreateCommentContainer: FC<DefautProps> = ({
  isLoading,
  createComment,
}) => {

  const [content, setContent] = useState<string>('');
  const [createDate, setCrateDate] = useState<Date | null>(new Date());

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      content: content,
      userName: 'test user',
      createdAt: createDate instanceof Date ? createDate : new Date()
    }

    await createComment(payload);

    setContent('');
    setCrateDate(new Date());
  }

  return (
    <>
     { isLoading ? (
       <div>Now Loading</div>
     ) : (
      <>
      <div>
        
        <TextFieldWapper>
          <h3>コメント投稿</h3>
          <div>
            <StyledTextField
              className="standard-textarea"
              placeholder="コメントを投稿しよう！"
              value={content}
              rowsMax={5}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <ButtonWapper>
            <SubmitButton
              className='idea-post-button'
              onClick={handleOnSubmit}
              variant="contained" 
              color="primary">
              {TextIndex.SUBMIT}
            </SubmitButton>
          </ButtonWapper>
        </TextFieldWapper>

      </div>
      </>
     )}
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.comment.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    createComment: payload => createComment.start(payload)
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCommentContainer);