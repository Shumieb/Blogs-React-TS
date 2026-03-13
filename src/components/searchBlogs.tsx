interface PropTypes {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearchSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

function SearchBlogs({
  searchTerm,
  setSearchTerm,
  handleSearchSubmit,
}: PropTypes) {
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
