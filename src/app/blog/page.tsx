import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <p>This is blog container page</p>
      <p>Available Blogs are</p>
      <p>
        <Link href="/blog/post-1">ReactJS Course</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Angular Course</Link>
      </p>
    </div>
  );
};

export default BlogPage;
