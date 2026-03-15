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
    getBlogsBySearchOrFilter,
    searchTerm,
    filterAuthor,
    filterCategory,
  } = useBlogsStore();

  // run on first render
  useEffect(() => {
    getAllData();
  }, []);

  //runs when search term changes
  useEffect(() => {
    if (searchTerm.length > 1 || filterAuthor !== 0 || filterCategory !== 0) {
      handleSearchFilter(searchTerm, filterCategory, filterAuthor);
      // hide search bar
      setShowClearFilterSearch(true);
    } else {
      // get all blogs
      getAllData();
      // hide search bar
      setShowClearFilterSearch(false);
    }
  }, [searchTerm, filterAuthor, filterCategory]);

  // get data
  const getAllData = async () => {
    let dbData = await initializeBlogs();
    setBlogs(dbData);
  };

  // function to search and filter
  const handleSearchFilter = async (
    term: string,
    category: number,
    author: number,
  ) => {
    let searchBlogs = await getBlogsBySearchOrFilter(term, category, author);
    searchBlogs && setBlogs(searchBlogs);
  };

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-2xl text-purple-950 font-bold text-center mb-3">
        Amazing Blogs
      </h2>

      <FilterSeachBar />

      {showClearFilterSearch && <ClearFilterSearch />}

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
