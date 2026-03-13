import { useState } from "react";
import type { blogType } from "../utils/entityTypes";
import BlogVCard from "./blogVCard";
import { blogsData } from "../mockData/mockData";

function FeaturedList() {
  // variables
  const [featuredBlogs, setFeaturedBlogs] = useState<blogType[]>(blogsData);

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-center text-2xl font-bold text-purple-950 underline">
        Featured Blogs
      </h2>
      <div className="grid grid-cols-3 gap-6 my-2 py-2">
        {featuredBlogs &&
          featuredBlogs.map((blog: blogType) => {
            return <BlogVCard key={blog.blogId} blog={blog} />;
          })}
      </div>
    </section>
  );
}

export default FeaturedList;
