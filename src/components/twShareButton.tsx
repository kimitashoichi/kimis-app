import React, { FC } from 'react'
import {
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

interface StateProps {
  shareUrl?: string;
}

const TwShareButton: FC<StateProps> = ({
  shareUrl
}) => {
  return(
    <>
      {/* 本来ならば投稿の詳細ページに設置して、そのページのURLを各種SNSでシェアできるようにする */}
      {/* 今現在はこのコンポーネントではYoutubeのURLをシェアすることになるが後々修正する */}
      <TwitterShareButton url={shareUrl ? shareUrl : 'https://www.youtube.com/?gl=JP'}>
        <TwitterIcon size={43} />
      </TwitterShareButton>
    </>
  )
}

export default TwShareButton;