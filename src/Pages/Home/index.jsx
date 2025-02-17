import { useState, useEffect, useContext } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
const apiUrl = 'https://fakestoreapi.com'

function Home() {
  const [products, setProducts] = useState(null);
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    fetch(`${apiUrl}/products?offset=1050`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <>
      <div className="my-6">
        <h1 className="text-xl">Home</h1>
      </div>
      <div className="my-6 grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
        {
          products?.map((product) => (
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
