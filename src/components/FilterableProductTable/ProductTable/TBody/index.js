import PropTypes from "prop-types";
import { Fragment } from "react";
import Row from "./Row";

// TBody will receive filtered products - and will send one at a time to Row for rendering

function renderRows(products) {
  return products.map(({ name, price, category, stocked }, index, currArr) =>
    // Is the category of the previous item in the array the same as the current item's category?
    currArr[index - 1]?.category === currArr[index].category ? (
      // If category is same, JUST render the product.
      <Row name={name} price={price} key={index} stocked={stocked} />
    ) : (
      // If it's a new category, render 2 rows...
      <Fragment key={index}>
        <Row category={category} />
        <Row name={name} price={price} stocked={stocked} />
      </Fragment>
    )
  );
}

const TBody = ({ products }) => <tbody>{renderRows(products)}</tbody>;

TBody.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      price: PropTypes.string,
      stocked: PropTypes.bool,
      category: PropTypes.string,
    })
  ),
};

export default TBody;
