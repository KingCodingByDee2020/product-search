import api from "api";
import { useEffect, useState } from "react";
import Row from "./Row";

function renderRows(products) {
  return products.map(({ name, price }, index) => (
    <Row name={name} price={price} key={index} />
  ));
}

const TBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      // Await results of reading stream as JSON
      const productData = await api.index();
      setProducts(() => productData);
    })();
  },

  /**
    * 2nd argument to `useEffect` is an Array.
    * This array tells `useEffect` what pieces of state it
    * should watch.
    *
    * An empty array means that `useEffect` should never run again
    * after initial load - as it's not watching any state.
  */
  []);

  return <tbody>{renderRows(products)}</tbody>;
};

export default TBody;
