import Table from "./ProductTable";
import Search from "./SearchBar";

const FilterableProductTable = () => (
  <main className="container mx-auto w-1/2 flex flex-col items-center mt-8">
    <Search />
    <Table />
  </main>
);

export default FilterableProductTable;
