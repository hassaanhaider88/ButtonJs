import React, { useEffect, useState } from "react";

import BlogData from "../Data/BlogData";
import BlogCard from "./BlogCard";

const BlogPostCom = () => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    var randomThreeBlogs = BlogData.sort(() => Math.random() - 0.5).slice(0, 3);
    setBlogs(randomThreeBlogs);
  }, []);

  return (
    <>
      {Blogs.map((blogData, idx) => {
        return <BlogCard BlogData={blogData} key={idx} />;
      })}
    </>
  );
};

export default BlogPostCom;
