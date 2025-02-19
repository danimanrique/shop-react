import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrdersPage() {
  const context = useContext(ShoppingCartContext);
  return (
    <>
      <div className="my-6 flex items-center justify-center relative w-80">
        <Link to='/' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
        </Link>
        <h1 className="text-xl">My Orders</h1>
      </div>
      <div className="w-80">
        <p className="text-right text-xs font-light mb-2">Total orders: {context.myOrders.length}</p>
        {context.myOrders.length ? (
          context.myOrders.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                index={index}
                createdAt={order.createdAt}
                total={order.total}
                totalProduct={order.totalProducts}
                products={order.products}
              />
            </Link>
          ))
        ) : (
          <p className="text-center">No order yet</p>
        )}
      </div>
    </>
  );
}

export default MyOrdersPage;
