import PropTypes from "prop-types";

const Row = ({ name }) => (
  <tr>
    <td>{name}</td>
  </tr>
);

Row.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Row;
