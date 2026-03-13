import { useEffect, useState } from "react";
import type { blogType } from "../utils/entityTypes";
import BlogVCard from "./blogVCard";
import { blogsData } from "../mockData/mockData";
import { Link } from "react-router";
import useBlogsStore from "../stores/blogsStore";

function FeaturedList() {
  // variables
  const [featuredBlogs, setFeaturedBlogs] = useState<blogType[]>(blogsData);

  // store
  const { getFeaturedBlog } = useBlogsStore();

  // run on first render
  useEffect(() => {
    getData();
  }, []);

  // get data
  const getData = async () => {
    let dbData = await getFeaturedBlog();
    setFeaturedBlogs(dbData.slice(0, 3));
  };

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-2xl text-purple-950 underline">Featured Blogs</h2>
      <div className="grid grid-cols-3 gap-8 my-4 py-2">
        {featuredBlogs &&
          featuredBlogs.map((blog: blogType) => {
            return <BlogVCard key={blog.blogId} blog={blog} />;
          })}
      </div>
      <div className="text-center py-2 px-2">
        <Link
          to="/blogs"
          className="bg-purple-950 text-white text-lg text-center py-2 px-4 rounded shadow-md hover:shadow-xl"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}

export default FeaturedList;
