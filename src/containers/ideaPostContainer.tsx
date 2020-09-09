import React, { FC, useState, FormEvent, useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Input from '@material-ui/core/Input';

import { postIdeaAction } from '../actions/postIdeaAction';
import * as Models from '../models/ideaModel';
import { AppState } from '../models'

interface DispatchProps {
  createIdea: (payload: Models.PostIdea) => void;
}

interface Props {
  content?: Models.PostIdea;
}

interface StateProps {
  isLoading?: boolean;
}

type DefaultProps = DispatchProps & Props & StateProps;

const PostIdeaContainer: FC<DefaultProps> = ({
  isLoading,
  content,
  createIdea
}) => {
  const [idea, setIdea] = useState<string>(content ? content.content : '');
  const [createDate, setCrateDate] = useState<Date>(content ? content.createdAt: new Date());
  const [updateDate, setUpdateDate] = useState<Date | null>(content ? content.updatedAt : null);

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      content: idea,
      createdAt: createDate instanceof Date ? createDate : new Date(),
      updatedAt: updateDate === null ? null : new Date(),
    }

    await createIdea(payload);

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
        <label>アイディア</label>
        <Input
          type="text"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button
          onClick={handleOnSubmit}
        >送信</button>
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
    createIdea: payload => postIdeaAction.start(payload)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIdeaContainer);