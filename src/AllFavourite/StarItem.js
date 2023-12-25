import { useState } from "react";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";
import { useSite } from "../Context/SiteContext";
function StarItem({ star }) {
  const [like, setLike] = useState(false);
  const {
    cardMoney,
    starBasket,
    setStarBasket,
    starFavourite,
    setStarFavourite,
    starMoney,
    setEmptyFavourite,
  } = useSite();
  const starBasketProduct = starBasket.find((item) => item.id === star.id);

  const addStarProduct = () => {
    const statusStarBasket = starBasket.find((item) => item.id === star.id);
    if (statusStarBasket) {
      statusStarBasket.amount += 1;
      setStarBasket([
        ...starBasket.filter((item) => item.id !== star.id),
        statusStarBasket,
      ]);
    } else {
      setStarBasket([
        ...starBasket,
        { id: star.id, title: star.title, amount: 1, price: star.price },
      ]);
    }
  };
  const removeStarPoduct = () => {
    const currentStarBasket = starBasket.find((item) => item.id === star.id);
    const defaultStarBasket = starBasket.filter((item) => item.id !== star.id);

    currentStarBasket.amount -= 1;

    if (currentStarBasket.amount === 0) {
      setStarBasket([...defaultStarBasket]);
    } else {
      setStarBasket([...defaultStarBasket, currentStarBasket]);
    }
  };

  const addStar = () => {
    const starLike = starFavourite.find((like) => like.id === star.id);
    if (starLike) {
      starLike.amount += 1;
      setStarFavourite([
        ...starFavourite.filter((like) => like.id !== star.id),
        starLike,
      ]);
    } else {
      setStarFavourite([
        ...starFavourite,
        { id: star.id, title: star.title, amount: 1 },
      ]);
    }
  };

  const removeStar = () => {
    const currentStarFavourite = starFavourite.find(
      (like) => like.id === star.id
    );
    const removeFavouriteLike = starFavourite.filter(
      (like) => like.id !== star.id
    );

    currentStarFavourite.amount -= 1;

    if (currentStarFavourite.amount === 0) {
      setStarFavourite([...removeFavouriteLike]);
    } else {
      setStarFavourite([...removeFavouriteLike, currentStarFavourite]);
    }
  };

  const starFavouriteProduct = () => {
    setLike(true);
    addStar();
    setEmptyFavourite(true);
  };

  const starFavouriteTry = () => {
    setLike(false);
    removeStar();
    setEmptyFavourite(false);
  };
  return (
    <>
      <div className="p-2  border border-gray-300 rounded-xl mb-2 lg:mb-5 w-[90%]">
        <h5 className="p-2  font-bold text-sm md:text-md mb-[4px] md:mb-[6px] lg:mb-[10px] products truncate ">
          {star.title}
        </h5>

        <picture className="relative mt-2 md:mt-[3px] lg:mt-[5px]  shrink-0 cursor-pointer overflow-hidden group  flip-card-inner">
          {!like ? (
            <button
              className="z-10 -mt-2 w-8 h-8 md:w-10 md:h-10  top-2 right-8 float-right absolute
       border border-gray-300 hover:text-white
        hover:bg-pink-600 hover:border-transparent focus:outline-none 
        focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 items-center 
        justify-center flex   rounded-full drop-shadow-xl"
              onClick={starFavouriteProduct}
            >
              <BsSuitHeart size={20} />
            </button>
          ) : (
            <button
              className="z-10 -mt-2 w-8 h-8 md:w-10 md:h-10  top-2 right-8 absolute  border border-gray-200  items-center justify-center flex  rounded-full drop-shadow-xl "
              onClick={starFavouriteTry}
            >
              <BsFillSuitHeartFill size={20} className="text-pink-700" />
            </button>
          )}

          <img
            src={star.image}
            alt={star.alt}
            title={star.alt}
            className="w-[80%] shrink-0   ml-2  duration-500 
            
              group-hover:scale-110   ease-linear   group-hover:opacity-90 flip-cart-front
            "
          />
        </picture>

        <div className="  font-bold  p-2">
          {star.price > 17000 ? (
            <ul className="items-center justify-between text-violet-700 shrink-0">
              <li className="line-through text-[10px] md:text-sm  ">
                {" "}
                {new Intl.NumberFormat("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                }).format(star.price)}{" "}
              </li>
              <li className="text-pink-700  text-xs md:text-md lg:text-lg">
                {" "}
                {new Intl.NumberFormat("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                }).format(star.price - star.price * 0.2)}{" "}
                <span
                  className="text-gray-500  text-xs md:text-sm
             space-x-2"
                >
                  %20
                </span>
              </li>
            </ul>
          ) : (
            <p className="text-xs md:text-md lg:text-lg text-violet-700 mt-4">
              {new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
              }).format(star.price)}
            </p>
          )}
        </div>

        <div className="space-y-1 md:space-y-2 lg:space-y-3 p-2 ">
          <div className="flex items-center justify-center">
            <p
              className="border  w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 border-gray-300 products flex items-center
        justify-center rounded-full text-center  text-sm lg:text-md font-bold"
            >
              {starBasketProduct ? starBasketProduct.amount : 0}{" "}
            </p>
          </div>

          <div className="space-y-2 w-full ">
            <button
              className="px-6 py-2 w-full  text-[10px] md:text-sm lg:text-md text-purple-600 font-semibold  rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
         disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white disabled:cursor-not-allowed 
         "
              disabled={starMoney + star.price > cardMoney}
              onClick={addStarProduct}
            >
              Sepete Ekle
            </button>
            <br></br>
            <button
              className="px-6 py-2 w-full  text-[10px] md:text-sm lg:text-md text-pink-600 font-semibold 
         rounded-full border border-pink-200 hover:text-white hover:bg-pink-600
          hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed
          disabled:opacity-80 disabled:text-red-700 disabled:hover:bg-white"
              disabled={!starBasketProduct}
              onClick={removeStarPoduct}
            >
              Sepet Çıkar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StarItem;
