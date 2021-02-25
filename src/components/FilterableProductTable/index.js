import { useState } from "react";
import Table from "./ProductTable";
import Search from "./SearchBar";

const FilterableProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  function handleKeyUp({ target: { value } }) {
    setSearchTerm(() => value);
  }

  function handleChange() {
    setInStockOnly((prev) => !prev);
  }

  return (
    <main className="container mx-auto w-1/2 flex flex-col items-center mt-8">
      <Search searchHandler={handleKeyUp} inStockHandler={handleChange} />
      <Table />
    </main>
  );
};

export default FilterableProductTable;
