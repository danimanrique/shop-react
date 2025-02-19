import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function HomePage() {
  const context = useContext(ShoppingCartContext);
  const { category } = useParams();

  useEffect(() => {
    if (category) context.setCategory(category)
  }, [category])

  return (
    <>
      <div className="my-6">
        <h1 className="text-xl">Our Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => context.setSearch(e.target.value)}
        value={context.search}
      />
      <>
        {context.filteredProducts?.length ? (
          <div className="my-6 grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl">
            {context.filteredProducts?.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-4 ">No products found</p>
        )}
      </>

      {context.isProductDetailOpen && <ProductDetail />}
    </>
  );
}

export default HomePage;
