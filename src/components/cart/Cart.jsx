import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { changeIsShowCart, getCartProduct, purchaseCart } from "../../store/slices/cart.slice";
import ProductCart from "./ProductCart";

const Cart = () => {
  const { isShowCart , products } = useSelector((store) => store.
  cart);

  const { token } = useSelector( (store) => store.userInfo)
  const dispatch = useDispatch()

  const totalPrice = products.reduce( (acc , curr) => acc+(curr.quantity * curr.product.price) ,0)

  const handleClose = () => {
    dispatch(changeIsShowCart())
  }

  const handleClickCheckout = () => {
    dispatch(purchaseCart())
  }

  useEffect(() => {
    if (isShowCart) {
        dispatch(getCartProduct())
    }
  }, [isShowCart])
  
  return (
    <section
      className={`fixed bg-white h-screen w-[270px] p-3 sm:w-[320px] top-[115px] sm:top-[70px]
      shadow-xl ${isShowCart && token ? "right-0" : "right-[-100%]"} duration-200 grid grid-rows-[auto,_1fr,_auto]`}
    >
      <h2 className="text-red-600 font-medium text-xl tracking-[3px]">Shopping Cart</h2>
      <i onClick={handleClose} className='bx bx-x absolute top-2 right-3 text-xl cursor-pointer'></i>
      {/* losproductos */}
      <section className="overflow-y-auto grid gap-3 py-4 content-start">
        {
            products.map( (product)=> <ProductCart key={product.id} product={product} /> )
        }
      </section>
      {/* checkout */}
      <section className="grid grid-cols-2 gap-5">
        <span>total</span>
        <h4>$ {totalPrice}</h4>
        <button onClick={handleClickCheckout} className="w-full bg-red-500 py-2 text-white col-span-2">
            checkout
        </button>
      </section>
    </section>
  );
};

export default Cart;
