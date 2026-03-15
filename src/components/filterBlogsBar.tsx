import { useEffect, useState } from "react";
import useUsersStore from "../stores/userStore";
import type { categoryType, userType } from "../utils/entityTypes";
import useCategoriesStore from "../stores/categoriesStore";
import useBlogsStore from "../stores/blogsStore";

function FilterBlogsBar() {
  //variables
  const [authors, setAuthors] = useState<userType[] | []>([]);
  const [categories, setCategories] = useState<categoryType[] | []>([]);
  const [filterCategoryId, setFilterCategoryId] = useState(0);
  const [filterAuthorId, setFilterAuthorId] = useState(0);

  // store
  const { initializeAuthors } = useUsersStore();
  const { initializeCategories } = useCategoriesStore();
  const { addFilterAuthor, addFilterCategory, filterCategory, filterAuthor } =
    useBlogsStore();

  // run on first render
  useEffect(() => {
    getAllData();
  }, []);

  // runs when filter category changes
  useEffect(() => {
    setFilterCategoryId(filterCategory);
  }, [filterCategory]);

  // runs when filter author changes
  useEffect(() => {
    setFilterAuthorId(filterAuthor);
  }, [filterAuthor]);

  // get authors and categories
  const getAllData = async () => {
    // get authors
    let dbAuthors = await initializeAuthors();
    dbAuthors && setAuthors(dbAuthors);

    // get categories
    let dbCategories = await initializeCategories();
    dbCategories && setCategories(dbCategories);
  };

  // handle categories filter change
  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //change store value
    addFilterCategory(Number(e.target.value));
    // set state
    setFilterCategoryId(Number(e.target.value));
  };

  // handle authors filter change
  const handleAuthorFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //change store value
    addFilterAuthor(Number(e.target.value));
    // set state
    setFilterAuthorId(Number(e.target.value));
  };

  return (
    <div className="flex justify-start align-center">
      {/* category filter */}
      <select
        onChange={(e) => handleCategoryFilter(e)}
        value={filterCategoryId}
        className="border-2 border-purple-950 text-lg py-1 px-2 me-3 rounded outline-none bg-purple-950 text-white capitalize cursor-pointer"
      >
        <option value={0}>Filter By Category</option>
        {categories &&
          categories.map((category: categoryType) => {
            return (
              <option value={category.categoryId} key={category.categoryId}>
                {category.name}
              </option>
            );
          })}
      </select>

      {/* author filter */}
      <select
        onChange={(e) => handleAuthorFilter(e)}
        value={filterAuthorId}
        className="border-2 border-purple-950 text-lg py-1 px-2 me-3 rounded outline-none bg-purple-950 text-white capitalize cursor-pointer"
      >
        <option value={0}>Filter By Author</option>
        {authors &&
          authors.map((author: userType) => {
            return (
              <option value={author.userId} key={author.userId}>
                {author.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FilterBlogsBar;
