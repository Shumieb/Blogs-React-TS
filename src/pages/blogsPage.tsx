import { useEffect, useState } from "react";
import BlogsList from "../components/blogsList";
import type { blogType } from "../utils/entityTypes";
import useBlogsStore from "../stores/blogsStore";
import FilterSeachBar from "../components/filterSeachBar";
import ClearFilterSearch from "../components/clearFilterSearch";

function BlogsPage() {
  // variables
  const [blogs, setBlogs] = useState<blogType[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearFilterSearch, setShowClearFilterSearch] = useState(false);

  // store
  const { initializeBlogs, getBlogsBySearchTerm } = useBlogsStore();

  // run on first render
  useEffect(() => {
    getData();
  }, []);

  // get data
  const getData = async () => {
    let dbData = await initializeBlogs();
    setBlogs(dbData);
  };

  // function to handle submit
  const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.length < 3) return;
    handleSearch();
  };

  // function to search
  const handleSearch = async () => {
    // TODO: Add functionality search
    let searchBlogs = await getBlogsBySearchTerm(searchTerm);
    searchBlogs && setBlogs(searchBlogs);
    // hide search bar
    setShowClearFilterSearch(true);
  };

  // function to clear search
  const clearSearch = async () => {
    // clear state
    setSearchTerm("");
    // hide search bar
    setShowClearFilterSearch(false);
    // get all blogs
    let dbData = await initializeBlogs();
    setBlogs(dbData);
  };

  return (
    <section className="w-[90%] px-4 py-4 mx-auto">
      <h2 className="text-2xl text-purple-950 font-bold text-center">
        Amazing Blogs
      </h2>

      <FilterSeachBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchSubmit={handleSearchSubmit}
      />

      {showClearFilterSearch && (
        <ClearFilterSearch searchTerm={searchTerm} clearSearch={clearSearch} />
      )}

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
