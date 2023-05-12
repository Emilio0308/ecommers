import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../../utils/configAxios";
import SimilarProducts from "./SimilarProducts";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../store/slices/cart.slice";

const positionImage = {
  "0": "-ml-[0%]",
  "1": "-ml-[100%]",
  "2": "-ml-[200%]",
}

const ProductDetail = ({ productId }) => {
  const [productData, setProductData] = useState();
  const [counter, setCounter] = useState(1);
  const [position, setPosition] = useState(0);

  const { id } = useParams();

  const hanldeClickPlus = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const hanldeClickLess = () => {
    const newCounter = counter - 1;
    if (newCounter > 0) {
      setCounter(newCounter);
    }
  };

  const hanldeClickNext = () => {
    const newposition = position + 1
    if (newposition <= 2) {
      setPosition(newposition)
    } else{
      setPosition(0)
    }
  };

  const hanldeClickPrev = () => {
    const newposition = position - 1
    if (newposition >= 0) {
      setPosition(newposition)
    } else{
      setPosition(2)
    }
  };

  const dispatch = useDispatch();

  const hanldeClickAddToCart = () => {
    dispatch(
      addProductCart({
        productId: productData.id,
        quantity: counter,
      })
    );
  };

  useEffect(() => {
    axiosEcommerce
      .get(`products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  }, [productId]);
  return (
    <section className="w-full max-w-[1200px] m-auto">
      <section className="flex gap-3 items-center my-[30px]">
        <Link to="/">Home</Link>
        <div className="h-[7px] aspect-square bg-red-500 rounded-full"></div>
        <span className="text-gray-700 font-semibold">
          {productData?.title}
        </span>
      </section>
      <section className="grid gap-10 sm:grid-cols-2 max-w-[1024] mx-auto">
        <section className="p-4 relative overflow-hidden">
          <section className={`flex w-[300%] top-[50%] translate-y-[-50%] transition-opacity absolute ${positionImage[position]}`}>
            <div
              className="h-[300px] w-[calc(100%_/_3)] p-3"
            >
              <img
                className="max-h-[300px] w-full object-contain"
                src={productData?.images[0].url}
                alt=""
              />
            </div>
            <div
              className="h-[300px] w-[calc(100%_/_3)] p-3"
            >
              <img
                className="max-h-[300px] w-full object-contain"
                src={productData?.images[1].url}
                alt=""
              />
            </div>
            <div
              className="h-[300px] w-[calc(100%_/_3)] p-3"
            >
              <img
                className="max-h-[300px] w-full object-contain"
                src={productData?.images[2].url}
                alt=""
              />
            </div>
          </section>
          <button
              onClick={hanldeClickPrev}
              className="absolute top-[50%] translate-y-[-50%] text-3xl left-0 w-[30px] aspect-square"
            >
              {"<"}
          </button>
          <button
              onClick={hanldeClickNext}
              className="absolute top-[50%] translate-y-[-50%] text-3xl right-0 w-[30px] aspect-square"
            >
              {">"}
          </button>
        </section>
        <section className="grid gap-4 p-8">
          <h4 className="text-lg text-gray-300">{productData?.brand}</h4>
          <h2 className="pl-4 capitalize font-semibold text-gray-600 text-2xl">
            {productData?.title}
          </h2>
          <p className="text-justify">{productData?.description}</p>
          <section className="grid grid-cols-2">
            <article>
              <h4 className="text-gray-300">Price</h4>
              <span className="pl-4 font-semibold text-gray-600 text-xl">
                $ {productData?.price}
              </span>
            </article>
            <article>
              <h4 className="text-gray-300">Quantity</h4>
              <div className="flex">
                <button
                  className="w-[30px] aspect-square border-[1px] border-gray-300 "
                  onClick={hanldeClickLess}
                >
                  -
                </button>
                <span className="flex justify-center items-center h-[30px] aspect-[3/2] border-[1px] border-gray-300">
                  {counter}
                </span>
                <button
                  className="w-[30px] aspect-square border-[1px] border-gray-300"
                  onClick={hanldeClickPlus}
                >
                  +
                </button>
              </div>
            </article>
          </section>
          <button
            onClick={hanldeClickAddToCart}
            className="w-full bg-red-500 py-2 text-white"
          >
            ADD to cart
          </button>
        </section>
      </section>
      <SimilarProducts
        productId={productData?.id}
        categoryId={productData?.categoryId}
      />
    </section>
  );
};

export default ProductDetail;
