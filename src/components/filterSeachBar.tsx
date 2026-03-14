import FilterBlogsBar from "./filterBlogsBar";
import SearchBlogs from "./searchBlogs";

interface PropTypes {
  handleSearch: (term: string) => void;
}

function FilterSeachBar({ handleSearch }: PropTypes) {
  return (
    <div className="flex justify-between align-center py-2">
      <FilterBlogsBar />
      <SearchBlogs handleSearch={handleSearch} />
    </div>
  );
}

export default FilterSeachBar;
