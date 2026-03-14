import { useEffect, useState } from "react";
import useUsersStore from "../stores/userStore";
import type { categoryType, userType } from "../utils/entityTypes";

function FilterBlogsBar() {
  //variables
  const [authors, setAuthors] = useState<userType[] | []>([]);
  const [categories, setCategories] = useState<categoryType[] | []>([]);

  // store
  const { initializeAuthors } = useUsersStore();

  // run on first render
  useEffect(() => {
    getAllData();
  }, []);

  // get authors and categories
  const getAllData = async () => {
    let dbAuthors = await initializeAuthors();
    dbAuthors && setAuthors(dbAuthors);
  };

  return (
    <div className="flex justify-start align-center">
      <select
        onChange={(e) => console.log(e)}
        className="border-2 border-purple-950 text-lg py-1 px-2 me-3 rounded outline-none bg-purple-950 text-white capitalize"
      >
        <option>Filter By Category</option>
        <option value="cat">By Category</option>
        <option value="auth">By Author</option>
      </select>
      <select
        onChange={(e) => console.log(e.target.value)}
        className="border-2 border-purple-950 text-lg py-1 px-2 me-3 rounded outline-none bg-purple-950 text-white capitalize"
      >
        <option>Filter By Author</option>
        {authors &&
          authors.map((author) => {
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
