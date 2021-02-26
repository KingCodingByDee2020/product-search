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
  const { isSuccess, data: products } = useQuery("products", fetchAllProducts);

  const filteredProducts = products
    .filter((product) => (inStockOnly ? product.stocked : true))
    .filter((product) => product.name.toLowerCase().includes(searchTerm));

  return isSuccess ? (
    <table>
      <thead>
        <tr>
          <th className="text-left">Name</th>
          <th className="text-left">Price</th>
        </tr>
      </thead>
      <TBody products={filteredProducts} />
    </table>
  ) : (
    <p>Loading...</p>
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
