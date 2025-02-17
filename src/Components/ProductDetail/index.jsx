import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  
  return (
    <aside className="side-drawer flex flex-col fixed bg-white right-1 border border-black rounded-lg p-6 mb-2 z-11">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Product detail</h2>
        <XMarkIcon onClick={() => context.closeProductDetail()} className="h-6 w-6 cursor-pointer" />
      </div>
      <figure className='pt-6 px-4'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow?.image}
          alt={context.productToShow?.title} />
      </figure>
      <p className='flex flex-col p-4'>
        <span className='font-medium text-2xl mb-2'>${context.productToShow?.price}</span>
        <span className='font-medium text-md'>{context.productToShow?.title}</span>
        <span className='font-light text-sm'>{context.productToShow?.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
