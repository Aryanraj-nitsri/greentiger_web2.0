import React from "react";

export default function Nav() {
  return (
    <div className="w-3/5 p-3 fixed left-[20%]">
      <div className="w-full flex justify-between m-auto">
        {/* leftSide  */}
        <div className="w-48 flex-initial h-14">
          <img
            src="https://greentiger.in/assets/logo.png"
            alt="error"
            className="object-cover object-center"
          />
        </div>
        {/* rightside */}
        <div className="w-1/3  flex items-center justify-evenly flex-initial">
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className="inline-block px-2.5 py-3 bg-[#00aa13] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#026b0f] hover:shadow-lg focus:bg-[#026b0f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026b0f] active:shadow-lg transition duration-150 ease-in-out"
            >
              Our Products
            </button>
          </div>
          <div class="flex space-x-2 justify-center">
            <button
              type="button"
              className="inline-block px-2.5 py-3 bg-[#00aa13] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#026b0f] hover:shadow-lg focus:bg-[#026b0f] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026b0f] active:shadow-lg transition duration-150 ease-in-out"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
