import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../store/slices/userInfoSlice.slice";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { token, user } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUser(data));
    reset({
      email: "",
      password: "",
    });
  };

  const logOutUser = () => {
    dispatch(logout())
  }

  return (
    <main className="bg-gray-200 flex justify-center items-center px-3 w-screen pt-[115px] sm:pt-[70px] min-h-screen">
      {token ? (
        <article className="w-full max-w-[400px] flex flex-col justify-center items-center p-3 text-center bg-white/80 rounded-md">
          <div className="h-[90px] w-[90px]">
            <img className="h-full m-auto" src="/img/userdefault.png" alt="" />
          </div>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <span>{user.email}</span>
          <button className="text-[#2fa8f8]" onClick={logOutUser}> log out</button>
        </article>
      ) : (
        <form
          className="bg-white rounded-md p-4 max-w-[320px] grid gap-6"
          onSubmit={handleSubmit(submit)}
        >
          <h2 className="text-2xl font-[500]">
            Welcome! Enter your email and password to continue
          </h2>

          <section className="bg-[#d8f5fd] rounded-md p-4">
            <h3>Test Data</h3>
            <div className="flex gap-2 items-center">
              <i className="text-xl bx bx-envelope"></i>
              <span>ecommerce@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <i className="text-xl bx bx-lock-alt"></i>
              <span>cartproyect</span>
            </div>
          </section>

          <div className="grid gap-1">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className="outline-none border-[1px] border-gray-300 p-1"
              type="email"
              id="email"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              className="outline-none border-[1px] border-gray-300 p-1"
              type="password"
              id="password"
            />
          </div>

          <button className="block w-full py-2 bg-red-500 text-white">
            Login
          </button>
        </form>
      )}
    </main>
  );
};

export default Login;
