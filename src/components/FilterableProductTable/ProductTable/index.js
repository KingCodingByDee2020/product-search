import api from "api";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import TBody from "./TBody";

const ProductTable = ({ inStockOnly, searchTerm }) => {
  const fetchAllProducts = async () => {
    const data = await api.index();
    return data;
  };

  // On initial render - `products` will be `undefined`
  const { isSuccess, isLoading, data: products } = useQuery(
    "products",
    fetchAllProducts
  );

  const filteredProducts = products
    ?.filter((product) => (inStockOnly ? product.stocked : true))
    .filter((product) => product.name.toLowerCase().includes(searchTerm));

  return isLoading ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="animate-spin text-yellow-500 w-16"
    >
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <table>
      <thead>
        <tr>
          <th className="text-left">Name</th>
          <th className="text-left">Price</th>
        </tr>
      </thead>
      <TBody products={filteredProducts} />
    </table>
  );
};

ProductTable.defaultProps = {
  inStockOnly: false,
  searchTerm: "",
};

ProductTable.propTypes = {
  inStockOnly: PropTypes.bool,
  searchTerm: PropTypes.string,
};

export default ProductTable;
