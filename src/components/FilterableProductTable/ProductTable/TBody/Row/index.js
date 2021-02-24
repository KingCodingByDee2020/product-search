import PropTypes from "prop-types";

const Row = ({ category, name, price, stocked }) => (
  <tr>
    {category ? (
      <td className="font-bold">{category}</td>
    ) : (
      <>
        <td className={stocked ? "" : "text-red-500"}>{name}</td>
        <td>{price}</td>
      </>
    )}
  </tr>
);

Row.defaultProps = {
  name: "",
  price: "",
  category: "",
  stocked: true,
};

Row.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
  stocked: PropTypes.bool,
};

export default Row;
