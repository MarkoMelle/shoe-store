import React from "react";

interface ProductDetailsProps {
  details: Array<[string, string]>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ details }) => (
  <table className="table table-bordered">
    <tbody>
      {details.map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductDetails;
