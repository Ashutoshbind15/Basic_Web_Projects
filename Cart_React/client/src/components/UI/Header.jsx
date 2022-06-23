import React from "react";

const Header = (props) => {
  return (
    <div className="header h-72 md:h-80 flex items-center flex-col tracking-widest uppercase justify-center">
      <div className="mb-4 text-4xl text-white font-black">
        Search For Products
      </div>
      <input
        type="text"
        name=""
        id=""
        className=" text-lg border-gray-600 border-2 w-3/5 rounded-full px-4 py-2 transition-all md:text-2xl focus:scale-105 outline-none "
        placeholder="Search"
        onChange={props.inputChangeHandler}
        value={props.searchInput}
      />
    </div>
  );
};

export default Header;
