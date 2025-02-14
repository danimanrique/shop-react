import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ product }) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 shadow-sm rounded-lg overflow-hidden">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 text-sm rounded-lg bg-white/90 px-3 py-0.5">{product.category}</span>
        <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
        <div
          className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full"
          onClick={() => context.setCount(context.count + 1)}
        >
         +
        </div>
      </figure>
      <p className="p-2 flex justify-between items-center">
        <span className="text-sm font-light">
          {/* truncar name a 15 caracteres */}
          {product.title.length > 16 ? `${product.title.slice(0, 16)}...` : product.title}
        </span>
        <span className="text-lg font-semibold">${product.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
