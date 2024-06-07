import { useEffect, useState } from "react";

type TBlog = {
  blogName: string;
  content: string;
};

const Editor = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-server-rosy-mu.vercel.app/api/v1/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  return (
    <div>
      {blogs?.map((blog: TBlog) => (
        <div>
          <h1>{blog.blogName}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      ))}
    </div>
  );
};

export default Editor;
