import PropTypes from "prop-types";

const SearchBar = ({ searchHandler, inStockHandler }) => (
  <>
    <div className="mb-4">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        id="search"
        placeholder="Search..."
        onKeyUp={searchHandler}
      />
    </div>

    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id="in-stock-only"
        className="mr-2"
        onChange={inStockHandler}
      />
      <label htmlFor="in-stock-only">Only show products in stock</label>
    </div>
  </>
);

SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  inStockHandler: PropTypes.func.isRequired,
};

export default SearchBar;
