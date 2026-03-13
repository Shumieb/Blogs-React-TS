import FilterBlogsBar from "./filterBlogsBar";
import SearchBlogs from "./searchBlogs";

interface PropTypes {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearchSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}
function FilterSeachBar({
  searchTerm,
  setSearchTerm,
  handleSearchSubmit,
}: PropTypes) {
  return (
    <div className="flex justify-between align-center py-2">
      <FilterBlogsBar />
      <SearchBlogs
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default FilterSeachBar;
