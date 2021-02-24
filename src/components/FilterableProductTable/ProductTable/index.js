import TBody from "./TBody";

const ProductTable = () => {
  return (
    <table className="w-1/4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <TBody />
    </table>
  );
};

export default ProductTable;
