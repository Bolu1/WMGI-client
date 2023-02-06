/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import { withAuth } from "../utils/withAuth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Response: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null)

  const loginHandler = async () => {
    setLoading(true);
    console.log(token)
    try {
      await axios.post(`http://localhost:8000/api/response/response`, {
        author: name,
        response: response,
        category: category,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
      );
      toast.success("Response saved")
      setLoading(false);
      router.push('/')
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const user = JSON.parse(Cookies.get('user'))
    console.log(user)
    setToken(user.token)
  }, []);

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
              <p className="form-label text-white">Name</p>
              <input
                placeholder="Name"
                type="text"
                className="form-control py-2 px-2 rounded-md border border-white bg-gray-900 text-white"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3 block">
              <p className="form-label text-white">Response</p>

              <textarea
                placeholder="Response"
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                className="block h-20 px-2 w-full py-2 text-white bg-gray-900 border rounded-md :bg-gray-800 :text-gray-300 :border-gray-600 focus:border-blue-400 :focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              ></textarea>
            </div>

            <div className="mb-3 block">
              <p className="form-label text-white">Category</p>
              <input
                placeholder="Category"
                type="text"
                className="form-control py-2 px-2 rounded-md border border-white bg-gray-900 text-white"
                id="exampleInputPassword1"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center">
            {!loading ? (
              <a
                onClick={() => loginHandler()}
                className="relative inline-flex items-center cursor-pointer justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>

                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative">Response</span>
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

export default withAuth(Response);
