import api from "api";
import { useEffect, useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // Await results of reading stream as JSON
      const productData = await api.index();
      setProducts(() => productData);
    })();
  });

  return <table></table>;
};

export default ProductTable;
