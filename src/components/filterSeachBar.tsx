import FilterBlogsBar from "./filterBlogsBar";
import SearchBlogs from "./searchBlogs";

function FilterSeachBar() {
  return (
    <div className="flex justify-between align-center py-2">
      <FilterBlogsBar />
      <SearchBlogs />
    </div>
  );
}

export default FilterSeachBar;
