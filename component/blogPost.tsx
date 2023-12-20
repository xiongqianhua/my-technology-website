import React from 'react';

interface PostProps {
  post: {
    data: { [key: string]: any };
    content: string;
  };
}

const BlogPost = ({ post }: PostProps) => {
  return (
    <div>
      <h1>{post.data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
