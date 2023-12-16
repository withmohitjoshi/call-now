import React from "react";
import Button from "../Button";
import { FiPhone } from "react-icons/fi";

const IncommmingCall = () => {
  return (
    <div className="w-full flex flex-col gap-y-96 px-4">
      <div className="flex flex-col items-center justify-center gap-12 text-gray-600">
        <span className="text-xs sm:text-xl text-blue-600">Incomming call</span>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-semibold">Unknown number</h1>
          <h2 className="text-xs sm:text-xl font-semibold">+1234567890</h2>
        </div>
      </div>
      <div className="flex justify-between items-center px-8">
        <Button className="col-span-3 border-green-700 text-green-700 hover:bg-green-700">
          <FiPhone />
        </Button>
        <Button className="col-span-3 border-red-700 text-red-700 hover:bg-red-700">
          <FiPhone className="rotate-[135deg]" />
        </Button>
      </div>
    </div>
  );
};

export default IncommmingCall;
