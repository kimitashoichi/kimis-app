import React , { FC } from 'react';
import styled from 'styled-components';

import * as Models from '../models/ideaModel';
import { CREATED_AT } from '../constants/textIndex';
import { 
  dateToString,
  characterLimit
 } from '../utils/utilFunctions';
import LinkComponent from '../components/LinkComponest';

//  TODO: divタグで作成しているが呼び出ししている親コンポーネントで囲っている要素がpタグなのでコンソールにエラーが出ている。elemet要素を変更してエラーが出ないようにする
const IdeaBox = styled.div`
  height: 250px;
`;

const DateBox = styled.div`
  display: flex;
`;

interface StateProps {
  idea?: Models.PostIdea
}

const IdeaSingleComponent: FC<StateProps> = ({idea}) => {
  let urlParams: string = '';
  if(!idea) return null;
  if(idea.ideaId === 404){
    urlParams = '404'
  } else if (idea.ideaId !== 404 && idea.ideaId){
    urlParams = idea.ideaId.toString()
  }

  // ユーザーのプロフィールページでルーティングする時に今のままだと投稿詳細ページにうまく遷移しない
  // ユーザーのプロフィールページで投稿者名を出す必要もないのでそこも考える
  return (
    <>
      <IdeaBox>
        <LinkComponent src={`show/${urlParams}`}>
          <h3>{characterLimit(idea.content)}</h3>
        </LinkComponent>
        <DateBox>
          <LinkComponent src={'/profile/author_name'}>
            <h4>Author Name</h4>
          </LinkComponent>
          <h4>{CREATED_AT} :</h4>
          <h4>{dateToString(idea.createdAt)}</h4>
        </DateBox>
        <label>Good</label>
        <h3>{idea.goodCount ? idea.goodCount : 0}</h3>
      </IdeaBox>
    </>
  )
};


export default IdeaSingleComponent;