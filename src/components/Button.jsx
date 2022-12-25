import React from "react";

const Button = ({ children }) => {
  return (
    <button className="mx-auto py-3 px-6 rounded-md font-bold  bg-yellow-500 hover:bg-yellow-600 text-black">
      {children}
    </button>
  );
};

export default Button;
