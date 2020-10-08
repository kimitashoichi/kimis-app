import React, { FC } from 'react'
import {
  FacebookShareButton,
  FacebookIcon
} from 'react-share';

interface StateProps {
  shareUrl?: string;
}

const FbShareButton: FC<StateProps> = ({
  shareUrl
}) => {
  return(
    <>
      {/* 本来ならば投稿の詳細ページに設置して、そのページのURLを各種SNSでシェアできるようにする */}
      {/* 今現在はこのコンポーネントではYoutubeのURLをシェアすることになるが後々修正する */}
      <FacebookShareButton url={shareUrl ? shareUrl : 'https://www.youtube.com/?gl=JP'}>
        <FacebookIcon size={43} />
      </FacebookShareButton>
    </>
  );
};

export default FbShareButton;