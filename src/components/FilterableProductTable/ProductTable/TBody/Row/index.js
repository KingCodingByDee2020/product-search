import PropTypes from "prop-types";

const Row = ({ category, name, price }) => (
  <tr>
    {category ? (
      <td className="font-bold">{category}</td>
    ) : (
      <>
        <td>{name}</td>
        <td>{price}</td>
      </>
    )}
  </tr>
);

Row.defaultProps = {
  name: "",
  price: "",
  category: "",
};

Row.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  category: PropTypes.string,
};

export default Row;
