import api from "api";
import { useEffect, useState } from "react";
import Row from "./Row";

function renderRows(products) {
  return products.map(({ name }, index) => <Row name={name} key={index} />);
}

const TBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // Await results of reading stream as JSON
      const productData = await api.index();
      setProducts(() => productData);
    })();
  });
  return <tbody>{renderRows(products)}</tbody>;
};

export default TBody;
