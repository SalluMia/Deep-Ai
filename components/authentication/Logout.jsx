"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const Logout = () => {
  const signOutHandler = () => {
    signOut();
  };
  return (
    <button
      onClick={() => {
        signOutHandler();
      }}
      className={`px-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 rounded-lg flex justify-center items-center gap-2`}
    >
      <p>Logout</p>
      <ArrowLeftOnRectangleIcon className="text-white h-6 w-6 font-bold" />
    </button>
  );
};

export default Logout;
