import React, { useCallback, useState } from "react";
import { FiDelete, FiPhone } from "react-icons/fi";
import CountryFlag from "../CountryFlag";
import "./dialpad.scss";
import Button from "../Button";

const VALID_NUMBER_REGEX = /^[0-9*#]+$/g;

const Dialpad = () => {
  const [number, setNumber] = useState("");

  const handleOnChange = useCallback((e) => {
    if (e.target.value && !e.target.value.match(VALID_NUMBER_REGEX)) {
      e.preventDefault();
      return;
    }
    setNumber(e.target.value);
  }, []);

  const handleSetNumber = useCallback((e) => {
    if (number.length <= 13) setNumber((prev) => prev + e.target.innerText);
  }, []);

  return (
    <div className="w-full flex flex-col font-semibol gap-12">
      <div className="flex gap-2 justify-center items-center">
        <div className="w-12">{number && <CountryFlag number={number} />}</div>
        <input
          type="text"
          value={number}
          onChange={handleOnChange}
          className="dialpad-input"
          placeholder="+1234567890"
          maxLength={13}
        />
        <div className="text-gray-600 w-12">
          {number && (
            <FiDelete onClick={() => setNumber((prev) => prev.slice(0, -1))} />
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-4 sm:gap-y-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((digit) => (
          <Button
            key={digit}
            onClick={handleSetNumber}
            disabled={number.length === 13}
          >
            {digit}
          </Button>
        ))}
        <Button
          className="col-span-3 border-green-700 text-green-700 hover:bg-green-700"
          onClick={() => console.log("HElo world")}
        >
          <FiPhone />
        </Button>
      </div>
    </div>
  );
};

export default Dialpad;
