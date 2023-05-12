import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeIsShowCart } from "../../store/slices/cart.slice";

const Header = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.userInfo);
  const navigate = useNavigate();
  const handleClickShowCart = () => {
    if (!token) {
      navigate("/Login");
    } else {
      dispatch(changeIsShowCart());
    }
  };
  return (
    <section className="w-full border-b-[1px] border-gray-300">
      <nav className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-[auto,_1fr] p-3 w-full max-w-[1200px] m-auto ">
        <Link to="/">
          <h1 className="text-4xl text-red-600 tracking-widest">E-commers</h1>
        </Link>
        <div className="grid grid-cols-3 place-self-end text-4xl gap-[1px] bg-gray-300 mx-auto sm:m-0">
          
          <Link to="/login" className="text-center bg-white w-[100px]">
            <i className="bx bx-user"></i>
          </Link>
          <Link to="/purchases" className="text-center bg-white w-[100px]">
            <i className="bx bx-box"></i>
          </Link>
          <button onClick={handleClickShowCart} className="text-center bg-white w-[100px]">
            <i className="bx bx-cart"></i>
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
