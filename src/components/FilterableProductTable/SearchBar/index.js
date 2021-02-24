const SearchBar = () => (
  <>
    <div className="mb-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input type="search" id="search" placeholder="Search..." />
    </div>

    <div className="flex items-center mb-4">
      <input type="checkbox" id="in-stock-only" className="mr-2" />
      <label htmlFor="in-stock-only">Only show products in stock</label>
    </div>
  </>
);

export default SearchBar;
