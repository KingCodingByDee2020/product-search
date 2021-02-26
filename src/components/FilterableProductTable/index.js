import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Table from "./ProductTable";
import Search from "./SearchBar";

// Create the client ONE TIME (not every re-render)
const qc = new QueryClient();

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
      <QueryClientProvider client={qc}>
        <Table searchTerm={searchTerm} inStockOnly={inStockOnly} />
      </QueryClientProvider>
    </main>
  );
};

export default FilterableProductTable;
