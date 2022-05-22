import React from "react";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/solid";

import "./PricingOption.css";
import Benefits from "../Benefits/Benefits";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-2xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benefits:</h3>
        {benefits.map((benefit) => (
          <Benefits benefit={benefit}></Benefits>
        ))}
      </div>
      <button className="bg-indigo-500 text-xl font-bold py-2 flex w-full justify-center items-center mt-4  text-white rounded-lg hover:bg-indigo-700">
        Buy Now <ArrowRightIcon className="h-6 w-6 ml-2"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
