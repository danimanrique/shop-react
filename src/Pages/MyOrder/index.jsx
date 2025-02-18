import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const params = useParams();

  let order;
  if(params.index) {
    order = context.myOrders[params.index];
  } else {
    order = context.myOrder;
  }
  const renderTotal = () => {
    const total = order.products.reduce((acc, product) => acc + product.price, 0);
    return `$${total > 0 ? total.toFixed(2) : 0}`;
  };

  return (
    <>
      <div className="my-6 flex items-center justify-center relative w-80">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1 className="text-xl">My Order</h1>
      </div>
      <div className="w-80">
        {order ? (
          <div>
            <p className="flex flex-col font-light text-center">
              <span className="font-bold">
                { params.index ? `Order Nº ${parseInt(params.index) + 1}` : `Order Nº ${context.myOrders.length + 1}` }
              </span>
              {order.createdAt}
            </p>
            <h2 className="text-lg my-4">Products ({order.totalProducts}) </h2>
            {order.products.map((product, index) => (
              <OrderCard
                key={index}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
            <hr className="border" />
            <div className="flex justify-between items-center mt-4 text-lg font-bold">
              <span>TOTAL</span>
              <span>{renderTotal()}</span>
            </div>
          </div>
        ) : (
          <p>No order yet</p>
        )}
      </div>
    </>
  );
}

export default MyOrder;
