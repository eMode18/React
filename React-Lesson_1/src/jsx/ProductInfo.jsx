/**
 * Renders a list of product details
 * @param {Object} product Product details
 * @returns {JSX.Element} List of product details
 */
const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1280,
    availability: "In Stock",
  };

  return (
    <div>
      <ul>
        {Object.values(product).map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductInfo;
