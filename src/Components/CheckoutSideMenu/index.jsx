import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const renderTotal = () => {
    const total = context.cartProducts.reduce((acc, product) => acc + product.price, 0);
    return `$${total > 0 ? total.toFixed(2) : 0}`;
  };

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const 
  handleCheckout = () => {
    const newOrder = {
      createdAt: new Date().toLocaleString(),
      products: context.cartProducts,
      totalProducts: context.count,
      total: renderTotal(),
    };
    context.setMyOrder(newOrder);
    context.setMyOrders([...context.myOrders, newOrder]);

    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckoutSideMenu();
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } side-drawer flex-col fixed bg-white right-1 border border-black rounded-lg p-6 mb-2 z-11`}
    >
      <div className="flex flex-col justify-between h-full">
          <div className="mb-2 flex justify-between items-center pr-2">
            <span className="flex items-center">
              <h2 className="font-medium text-xl mr-2">My order</h2>
              <span className="text-xs font-light">({context.count} products)</span>
            </span>
            <XMarkIcon onClick={() => context.closeCheckoutSideMenu()} className="h-6 w-6 cursor-pointer" />
          </div>
          <div className="flex-1 py-4 pr-4 overflow-y-scroll">
            {context.cartProducts.map((product, index) => (
              <OrderCard
                key={index}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div>
            <hr className="border" />
            <div className="flex justify-between items-center mt-4 text-lg font-bold">
              <span>TOTAL</span>
              <span>{renderTotal()}</span>
            </div>
            {context.count > 0 && 
            <Link to='my-orders/last'>
              <button 
                className="cursor-pointer w-full bg-black text-white py-2 rounded-lg mt-4"
                onClick={() => 
                  handleCheckout()}
              >Checkout</button>
            </Link>
            }
          </div>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
