import { useContext } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className="my-6">
        <h1 className="text-xl">Home</h1>
      </div>
      <div className="my-6 grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {
          context.products?.map((product) => (
            <Card key={product.id} product={product}/>
          ))
        }
      </div>
      {
        context.isProductDetailOpen &&
        <ProductDetail />
      }
    </>
  );
}

export default Home;
