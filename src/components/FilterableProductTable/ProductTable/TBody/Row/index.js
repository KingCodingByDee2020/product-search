import PropTypes from "prop-types";

const Row = ({ name, price }) => (
  <tr>
    <td>{name}</td>
    <td>{price}</td>
  </tr>
);

Row.defaultProps = {
  price: "N/A",
};

Row.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
};

export default Row;
