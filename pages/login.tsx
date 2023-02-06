/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import response from "./response";

const Login: NextPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `https://scared-felicia-bolu1.koyeb.app/api/auth/signin`,
        {
          email: login,
          password: password,
        }
      );

      Cookies.set("user", JSON.stringify(data.data), { expires: 24 });
      router.push("/response");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  if (Cookies.get("user")) {
    router.push("/response");
  }

  return (
    <div className="min-h-screen bg-black ">
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        closeOnClick
      />
      <div className="flex justify-center items-center h-screen">
        <div className="space-y-4">
          <div>
            <div className="mb-3 block">
              <p className="form-label text-white">Login</p>
              <input
                type="login"
                className="form-control py-2 px-2 rounded-md border border-white bg-gray-900 text-white"
                id="exampleInputPassword1"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>

            <div className="mb-3 block">
              <p className="form-label text-white">Password</p>
              <input
                type="password"
                className="form-control py-2 px-2 rounded-md border border-white bg-gray-900 text-white"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            {!loading ? (
              <a
                onClick={() => loginHandler()}
                className="relative inline-flex items-center  cursor-pointer  justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative">Login</span>
              </a>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full motion-safe:animate-bounce animate-pulse bg-white"></div>
                <div className="w-4 h-4 rounded-full motion-safe:animate-bounce animate-pulse bg-white"></div>
                <div className="w-4 h-4 rounded-full motion-safe:animate-bounce animate-pulse bg-white"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
