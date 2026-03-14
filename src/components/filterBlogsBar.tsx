function FilterBlogsBar() {
  //variables

  return (
    <div className="flex justify-start align-center">
      <select
        onChange={(e) => console.log(e)}
        className="border-2 border-purple-950 text-lg py-1 px-2 me-3 rounded outline-none bg-purple-950 text-white"
      >
        <option>Filter</option>
        <option value="cat">By Category</option>
        <option value="auth">By Author</option>
      </select>
      <select
        onChange={(e) => console.log(e)}
        className="border-b-2 border-purple-950 text-lg py-1 px-2 ms-3 outline-none"
      >
        <option></option>
        <option value="">By Category</option>
        <option value="">By Author</option>
      </select>
    </div>
  );
}

export default FilterBlogsBar;
