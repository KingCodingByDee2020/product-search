import api from "api";
import { useEffect, useState } from "react";
import Row from "./Row";

function renderRows(products) {
  return products.map(({ name, price, category }, index, currArr) =>
    // Is the category of the previous item in the array the same as the current item's category?
    currArr[index - 1]?.category === currArr[index].category ? (
      // If category is same, JUST render the product.
      <Row name={name} price={price} key={index} />
    ) : (
      // If it's a new category, render 2 rows...
      <>
        <Row category={category} key={index} />
        <Row name={name} price={price} key={index} />
      </>
    )
  );
}

const TBody = () => {
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
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
    []
  );

  // Trim duplicate categories from the catalog
  return <tbody>{renderRows(products)}</tbody>;
};

export default TBody;
