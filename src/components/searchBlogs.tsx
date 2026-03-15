import { useState } from "react";
import useBlogsStore from "../stores/blogsStore";

function SearchBlogs() {
  // variables
  const [searchTerm, setSearchTerm] = useState("");

  // store
  const { addSearchTerm } = useBlogsStore();

  // function to handle submit
  const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.length < 3) return;
    // Add search term to store
    addSearchTerm(searchTerm);

    //clear state
    setSearchTerm("");
  };

  return (
    <section>
      <form
        onSubmit={(e) => {
          handleSearchSubmit(e);
        }}
      >
        <input
          type="text"
          name="searchTerm"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="outline-none border-2 border-purple-950 py-1 px-2 text-lg rounded-tl-md rounded-bl-md"
        />
        <input
          type="submit"
          value="Search"
          className="bg-purple-950 border-2 border-purple-950 text-white text-lg text-center py-1 px-4 rounded-tr-md rounded-br-md cursor-pointer"
        />
      </form>
    </section>
  );
}

export default SearchBlogs;
