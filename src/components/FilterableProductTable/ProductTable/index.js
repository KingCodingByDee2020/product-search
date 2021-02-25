import api from "api";
import { useEffect, useState } from "react";

import TBody from "./TBody";

/**
  * TODO: ProductTable receives filter props from FilterableProductTAble
  * TODO: PRoductTable applies the filters and seends filtered products to TBody
 */

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      (async () => {
        // Await results of reading stream as JSON
        const productData = await api.index();
        setProducts(() => productData);
      })();
    },
  );

  return (
    <table className="w-1/4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <TBody products={products}/>
    </table>
  );
};

export default ProductTable;
