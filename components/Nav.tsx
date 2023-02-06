import { useRouter } from "next/router";
import React, { useState } from "react";

function Nav() {
  const router = useRouter()
  const [show, setshow] = useState(false);

  return (
    <div className="pt-4 z-10  absolute px-5 md:flex md:items-center md:justify-between bg-none w-full bg-opacity-50">
      <div className="flex justify-between items-center">
        <a
            onClick={()=>router.push("/")}
             className="inline-block py-2 cursor-pointer text-white text-xl font-bold">
          <img src="/wlogo.png" className="h-28 w-28" />
        </a>

        <div
          id="bgIcon"
          onClick={() => setshow(!show)}
          className={`focus:outline-none pt-4 text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center md:hidden cursor-pointer`}
        >
          <svg
            className={`${show ? "hidden" : ""}`}
            width={24}
            height={24}
            viewBox="0 0 24 24 text-white bg-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" transform duration-150 text-white bg-white"
              d="M4 6H20"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className=" transform duration-150"
              d="M4 18H20"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              bg-black
            />
          </svg>
          <svg
            className={`${show ? "block" : "hidden"}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        id="MobileNavigation"
        className={`${show ? "block" : "hidden"} lg:hidden mt-4 mx-auto`}
      >
        <div className="flex flex-row items-center justify-center space-x-6"></div>

        <ul className="space-y-4 tracking-wide mt-2 bg-black">
          <li>
            <a
              onClick={()=>router.push("/")}
              className="px-4 py-5 cursor-pointer  no-underline hover:underline flex items-center space-x-4 text-gray-100 border-line group"
            >
              <span className="font-mono no-underline hover:underline">
                HOME
              </span>
            </a>
          </li>

          <li>
            <a
              onClick={()=>router.push("/property")}
              className="px-4 py-5 flex items-center space-x-4 text-gray-100 border-line group"
            >
              <span className="group-hover:text-tgray">PROPERTY</span>
            </a>
          </li>

          <li>
            <a
              onClick={()=>router.push("/contact-us")}
              className="px-4 py-5 flex items-center space-x-4 text-gray-100 border-line group"
            >
              <span className="group-hover:text-tgray">CONTACT US</span>
            </a>
          </li>

          <li>
            <a
              onClick={()=>router.push("/about-us")}
              className="px-4 py-5 flex items-center space-x-4 text-gray-100 border-line group"
            >
              <span className="group-hover:text-tgray">ABOUT US</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="hidden md:block space-x-5">
          <a
            className="group text-white transition-all duration-300 ease-in-out"
            onClick={()=>router.push("/")}
          >
            <span className="bg-left-bottom cursor-pointer font-mono bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              HOME
            </span>
          </a>
          <a
            className="group text-white transition-all duration-300 ease-in-out"
            onClick={()=>router.push("/property")}
          >
            <span className="bg-left-bottom cursor-pointer font-mono bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              PROPERTY
            </span>
          </a>
          <a
            className="group text-white transition-all duration-300 ease-in-out"
            onClick={()=>router.push("/contact-us")}
          >
            <span className="bg-left-bottom cursor-pointer font-mono bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              CONTACT US
            </span>
          </a>
          <a
            className="group text-white transition-all duration-300 ease-in-out"
            onClick={()=>router.push("/about-us")}
          >
            <span className="bg-left-bottom cursor-pointer font-mono bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              ABOUT US
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
