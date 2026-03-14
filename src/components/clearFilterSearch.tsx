import useBlogsStore from "../stores/blogsStore";

interface PropTypes {
  clearSearch: () => void;
}

function ClearFilterSearch({ clearSearch }: PropTypes) {
  // store
  const { searchTerm } = useBlogsStore();

  return (
    <div className="flex justify-between align-center pb-2 pt-4 border-t-2 border-gray-400 mt-3">
      <p className="text-purple-950 text-lg py-2 italic">
        Showing blogs that include the search term:{" "}
        <span className="capitalize font-bold">{searchTerm}</span>
      </p>
      <button
        className="text-white bg-purple-950 text-lg py-2 px-4 rounded shadow-md cursor-pointer"
        onClick={clearSearch}
      >
        Clear search
      </button>
    </div>
  );
}

export default ClearFilterSearch;
