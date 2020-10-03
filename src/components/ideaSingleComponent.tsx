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
  if(!idea) return null;

  // ユーザーのプロフィールページでルーティングする時に今のままだと投稿詳細ページにうまく遷移しない
  // ユーザーのプロフィールページで投稿者名を出す必要もないのでそこも考える
  return (
    <>
      <IdeaBox>
        <LinkComponent src={`/show/${idea.ideaId}`}>
          <h3>{characterLimit(idea.content)}</h3>
        </LinkComponent>
        <DateBox>
          <LinkComponent src={`/profile/${idea.uid}`}>
            <h4>{ idea.authorName }</h4>
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