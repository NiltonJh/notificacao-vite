import React from 'react';
import ShareButton from './ShareButton';

const posts = [
  { id: 1, content: 'https://example.com/article1' },
  { id: 2, content: 'https://example.com/article2' },
  { id: 3, content: 'https://example.com/article3' },
];

const Feed = () => {
  return (
    <div className="feed">
      {posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
          <ShareButton content={post.content} />
        </div>
      ))}
    </div>
  );
};

export default Feed;