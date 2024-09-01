import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../colors";

const LoginScreen = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-full w-full rounded-xl overflow-hidden px-8">
        <div className=" rounded-xl sm:bg-gray-100 p-8 sm:shadow-md h-3/4 w-[400px] items-center justify-center flex flex-col">
          <span className="font-semibold text-xl md:hidden">
            Messaging App Replica
          </span>
          <hr className="border-1 border-indigo-500 w-[80%] mt-4 md:hidden" />
          <br />
          <div>
            <div className="flex flex-col p-2 px-8">
              <span className="text-sm px-2 mb-2">Enter your username</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="username"
                className="border-2 p-2 rounded-xl mb-4"
              />

              <span className="text-sm px-2 mb-2">Enter your password</span>
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                className="border-2 p-2 rounded-xl"
              />
              <span className="cursor-pointer text-xs text-indigo-500 font-semibold text-right px-4 py-2">
                forgot password?
              </span>
            </div>
            <div className="flex-col flex justify-evenly mt-1 gap-4">
              <button
                type="submit"
                className="bg-indigo-500 text-white mx-12 py-1 px-4 rounded-xl shadow-sm hover:scale-105"
              >
                Login
              </button>
              <span className="text-sm w-full text-center ">
                new user?&nbsp;
                <span className="text-indigo-500 font-semibold cursor-pointer">
                  create account
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-indigo-500 h-3/4 w-[400px] text-white hidden items-center justify-center text-xl rounded-xl shadow-lg flex-col md:flex">
          <div className="flex flex-col">
            <span>Sign in into</span>
            <span className="font-semibold ">Messaging App Replica</span>
          </div>
          <br />
          <span className="ri-building-3-fill text-[5rem] mt-8 "></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginScreen;
