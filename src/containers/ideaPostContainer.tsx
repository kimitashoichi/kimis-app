import React, { FC, useState, FormEvent, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

//  material-ui
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//  file
import { 
  postIdeaAction,
  draftIdeaAction
 } from '../actions/postIdeaAction';
import * as Models from '../models/ideaModel';
import * as TextIndex from '../constants/textIndex';
import { AppState } from '../models'

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
    console.log(isDraft);

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
       <div>Now Loading</div>
     ) : (
      <>
      <div>
        <TextField
          id="standard-textarea"
          label="アイディア"
          placeholder="アイディアを投稿しよう！"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          multiline
        />

        <Button 
          onClick={handleOnSubmit}
          onMouseDown={() => setIsDraft(true)}
          variant="contained">
          {TextIndex.DRAFT}
        </Button>

        <Button 
          onClick={handleOnSubmit}
          onMouseDown={() => setIsDraft(false)}
          variant="contained" 
          color="primary">
          {TextIndex.SUBMIT}
        </Button>
      </div>
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