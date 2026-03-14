import { useEffect, useState } from "react";
import BlogsList from "../components/blogsList";
import type { blogType } from "../utils/entityTypes";
import useBlogsStore from "../stores/blogsStore";
import FilterSeachBar from "../components/filterSeachBar";
import ClearFilterSearch from "../components/clearFilterSearch";

function BlogsPage() {
  // variables
  const [blogs, setBlogs] = useState<blogType[]>();
  const [showClearFilterSearch, setShowClearFilterSearch] = useState(false);

  // store
  const {
    initializeBlogs,
    getBlogsBySearchTerm,
    addSearchTerm,
    removeSearchTerm,
  } = useBlogsStore();

  // run on first render
  useEffect(() => {
    getAllData();
  }, []);

  // get data
  const getAllData = async () => {
    let dbData = await initializeBlogs();
    setBlogs(dbData);
  };

  // function to search
  const handleSearch = async (term: string) => {
    // Add search term to store
    addSearchTerm(term);
    // Add functionality search
    let searchBlogs = await getBlogsBySearchTerm(term);
    searchBlogs && setBlogs(searchBlogs);
    // hide search bar
    setShowClearFilterSearch(true);
  };

  // function to clear search
  const clearSearch = async () => {
    // hide search bar
    setShowClearFilterSearch(false);
    //remove search term
    removeSearchTerm();
    // get all blogs
    getAllData();
  };

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-2xl text-purple-950 font-bold text-center mb-3">
        Amazing Blogs
      </h2>

      <FilterSeachBar handleSearch={handleSearch} />

      {showClearFilterSearch && <ClearFilterSearch clearSearch={clearSearch} />}

      {blogs ? (
        <BlogsList blogs={blogs} />
      ) : (
        <div>
          <p>No Blogs to display</p>
        </div>
      )}
    </section>
  );
}

export default BlogsPage;
