import React, { FC, useState, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components'

// material-ui
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// file
import * as Models from '../../models/commentModel';
import * as TextIndex from '../../constants/textIndex';
import { createComment } from '../../actions/commentAction';
import { AppState } from '../../models';

const SubmitButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 38px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

const StyledTextField = styled(TextField)`
  height: 60%;
  width: 100%;
  margin: 0 auto;
`;

const TextFieldWapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 45%;
`;

const TextFieldLabel = styled.h3`
  text-align: left;
`;

const ButtonWapper = styled.div`
  padding-top: 20px;
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
        <TextFieldWapper>
          <TextFieldLabel>コメント投稿</TextFieldLabel>
            <StyledTextField
              className="standard-textarea"
              placeholder="投稿する！"
              value={content}
              rows={5}
              multiline
              variant="outlined"
              onChange={(e) => setContent(e.target.value)} />
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