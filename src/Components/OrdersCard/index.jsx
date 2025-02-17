import PropTypes from "prop-types";

const OrdersCard = ({ index, totalProduct, total, createdAt, products }) => {
  return (
    <div className="flex flex-col gap-2 mb-3 border border-black rounded-lg p-3">
      <p className="flex justify-between items-center">
        <span className="font-bold">Order Nº {index+1}</span>
        <span className="text-xs">{createdAt}</span>
      </p>
      <p className="flex justify-between items-center">
        <span>Products: {totalProduct}</span>
        <span>{total}</span>
      </p>
      <div className="flex justify-center gap-2">
        {products.map((product, index) => (
          <div key={index} className="flex justify-between items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-12 w-12 object-contain rounded-sm border"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  index: PropTypes.number.isRequired,
  totalProduct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default OrdersCard;
