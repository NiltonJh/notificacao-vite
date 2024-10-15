import React from 'react';
import ShareButton from './ShareButton';

const Post = ({ content }) => {
  return (
    <div className="post">
      <p>{content}</p>
      <ShareButton content={content} />
    </div>
  );
};

export default Post;