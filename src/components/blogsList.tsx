import type { blogType } from "../utils/entityTypes";
import BlogVCard from "./blogVCard";

interface PropTypes {
  blogs: blogType[];
}

function BlogsList({ blogs }: PropTypes) {
  return (
    <div className="grid grid-cols-3 gap-8 my-4 py-2">
      {blogs &&
        blogs.map((blog: blogType) => {
          return <BlogVCard key={blog.blogId} blog={blog} />;
        })}
    </div>
  );
}

export default BlogsList;
