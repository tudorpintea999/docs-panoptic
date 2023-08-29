import React from 'react';
import BlogPostDetails from './Details';
import BlogPostImage from './BlogPostImage';
import "./BlogPostItem.css"

export default function BlogPostItem({children, className}) {
  
  const metadata = children.type?.metadata
  const imageUrl = metadata.frontMatter?.image;
  return (
    <div className="blog-post-item">
      <BlogPostImage imageUrl={imageUrl}/>
      <BlogPostDetails/>
    </div>
  );
}
