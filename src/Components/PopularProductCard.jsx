import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating = 4.5 }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer">

      {/* Product Image */}
      <div className="flex justify-center items-center">
        <img
          src={imgURL}
          alt={name}
          className="w-[260px] h-[260px] object-contain transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Rating */}
      <div className="mt-6 flex items-center gap-2">
        <img
          src={star}
          alt="rating star"
          className="w-5 h-5"
        />
        <p className="font-montserrat text-lg text-slate-gray">
          {rating}
        </p>
      </div>

      {/* Product Name */}
      <h3 className="mt-2 text-xl font-semibold font-palanquin text-gray-800 line-clamp-1">
        {name}
      </h3>

      {/* Price */}
      <p className="mt-1 font-semibold font-montserrat text-coral-red text-xl">
        ${price}
      </p>

    </div>
  );
};

export default PopularProductCard;
