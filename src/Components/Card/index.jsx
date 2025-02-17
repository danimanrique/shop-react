import { useContext } from "react";
import PropTypes from "prop-types";
import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const Card = ({ product }) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = () => {
    context.setProductToShow(product);
    context.openProductDetail();
    context.closeCheckoutSideMenu();
  }

  const addProductToCart = (event, product) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, product]);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
    context.setCount(context.count + 1);
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((cartProduct) => cartProduct.id === id);

    if(isInCart) {
      return (
        <div
            className="absolute top-1 right-1 flex justify-center items-center bg-black w-6 h-6 rounded-full"
          >
            <CheckIcon className="h-4 w-4 text-white" />
          </div>
      )
    } else {
      return (
        <div
            className="absolute top-1 right-1 flex justify-center items-center bg-white w-6 h-6 rounded-full"
            onClick={(event) => addProductToCart(event, product)}
          >
            <PlusIcon className="h-4 w-4" />
          </div>
      )
    }
  }

  return (
    <div onClick={() => showProductDetail()}
      className="bg-white cursor-pointer w-56 h-60 shadow-sm rounded-lg overflow-hidden">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-2 left-2 text-sm rounded-lg bg-white/90 px-3 py-0.5">{product.category}</span>
        <img className="w-full h-full object-contain" src={product.image} alt={product.title} />
        {renderIcon(product.id)}
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
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
