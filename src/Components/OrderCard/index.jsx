import { TrashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const OrderCard = ({ id, title, image, price, handleDelete }) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <div className="flex items-center gap-2 w-full h-full">
        <figure className="h-20 w-20">
          <img className="w-full h-full rounded-lg object-contain" src={image} alt={title} />
        </figure>
        <div className="flex flex-col w-full h-full justify-between">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-light">{title}</p>
            <p className="text-lg font-bold">${price}</p>
          </div>
          {handleDelete && (
            <div className="flex justify-between items-center">
              <span className="text-xs font-light text-black/40"></span>
              <TrashIcon onClick={() => handleDelete(id)} className="h-5 w-5 text-black cursor-pointer"></TrashIcon>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
OrderCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default OrderCard;
