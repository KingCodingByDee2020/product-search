import api from "api";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TBody from "./TBody";

const ProductTable = ({ inStockOnly, searchTerm }) => {
  const [products, setProducts] = useState([]);

  const filters = {
    inStockOnly(item) {
      return item.stocked;
    },
    searchTerm(item) {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    },
  };

  useEffect(() => {
    (async () => {
      // Await results of reading stream as JSON
      const productData = await api.index();
      setProducts(() => productData);
    })();
  }, []);

  const filteredProducts = products
    .filter((product) => (inStockOnly ? product.stocked : true))
    .filter((product) => product.name.toLowerCase().includes(searchTerm));

  return (
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
