import React from "react";

import customerImage1 from "../assets/customer-01.jpg";

export const Customer: React.FC<{ items: number }> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 rounded shadow-lg p-1 bg-gray-100">
        {items}
      </div>
      <img
        src={customerImage1}
        alt="customer"
        className="rounded-full h-20 w-20"
      />
    </div>
  );
};
