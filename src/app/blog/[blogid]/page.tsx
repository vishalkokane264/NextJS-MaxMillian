import Link from "next/link";
import React from "react";

const BlogPage = ({ params }: any) => {
  return (
    <div>
      <p>This is blog of {params.blogid} page</p>
    </div>
  );
};

export default BlogPage;
