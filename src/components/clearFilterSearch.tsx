import { useEffect, useState } from "react";
import useBlogsStore from "../stores/blogsStore";
import useUsersStore from "../stores/userStore";
import useCategoriesStore from "../stores/categoriesStore";

function ClearFilterSearch() {
  // variable
  const [authorName, setAuthorName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  // stores
  const {
    searchTerm,
    filterAuthor,
    filterCategory,
    removeSearchTerm,
    removeFilterCategory,
    removeFilterAuthor,
  } = useBlogsStore();
  const { getAuthorById } = useUsersStore();
  const { getCategoryById } = useCategoriesStore();

  // run when filter author changes
  useEffect(() => {
    if (filterAuthor !== 0) {
      getAuthorName();
    }
  }, [filterAuthor]);

  // run when filter category changes
  useEffect(() => {
    if (filterCategory !== 0) {
      getCategoryName();
    }
  }, [filterCategory]);

  // get category name
  const getCategoryName = async () => {
    let category = await getCategoryById(filterCategory);
    category && setCategoryName(category.name);
  };

  // get author name
  const getAuthorName = async () => {
    let author = await getAuthorById(filterAuthor);
    author && setAuthorName(author.name);
  };

  // handle clear search
  const handleClearSearch = async () => {
    //remove search term
    removeSearchTerm();
    // remove filter category
    removeFilterCategory();
    //remove filter author
    removeFilterAuthor();
  };

  return (
    <div className="flex justify-between align-center pb-2 pt-4 border-t-2 border-gray-400 mt-3">
      <div className="flex justify-start align-center">
        <p className="text-purple-950 text-lg py-2 italic me-2">
          Showing blogs that include the
        </p>
        <p className="text-purple-950 text-lg py-2 italic me-2">
          Search term:{" "}
          <span className="capitalize font-bold">{searchTerm}</span>,
        </p>
        <p className="text-purple-950 text-lg py-2 italic me-2">
          Category: <span className="capitalize font-bold">{categoryName}</span>
          ,
        </p>
        <p className="text-purple-950 text-lg py-2 italic me-2">
          Author: <span className="capitalize font-bold">{authorName}</span>
        </p>
      </div>
      <button
        className="text-white bg-purple-950 text-lg py-2 px-4 rounded shadow-md cursor-pointer"
        onClick={handleClearSearch}
      >
        Clear search
      </button>
    </div>
  );
}

export default ClearFilterSearch;
