import {
  FiMic,
  FiMicOff,
  FiPause,
  FiPhone,
  FiPlay,
  FiPlus,
  FiVideo,
} from "react-icons/fi";
import { TbRecordMail, TbRecordMailOff } from "react-icons/tb";
import Button from "../Button";

const OutgoingCall = () => {
  return (
    <div className="w-full h-full flex flex-col font-semibol justify-between py-4">
      <div className="flex flex-col items-center justify-center gap-10 text-gray-600">
        <span className="text-xs text-green-700">Calling...</span>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-semibold">Unknown number</h1>
          <h2 className="text-xs font-semibold">+1234567890</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-4 bg-gray-400/[.3] rounded-xl shadow-sm p-8">
        <ButtonContainer icon={<FiPlus />} text={"Add Call"} />
        <ButtonContainer icon={<FiVideo />} text={"Video Call"} />
        <ButtonContainer icon={<FiPause />} text={"Hold"} />
        {/* <ButtonContainer icon={<FiPlay />} text={"UnHold"} /> */}
        <ButtonContainer icon={<FiMicOff />} text={"Mute"} />
        {/* <ButtonContainer icon={<FiMic />} text={"UnMute"} /> */}
        <ButtonContainer icon={<TbRecordMail />} text={"Record"} />
        {/* <ButtonContainer icon={<TbRecordMailOff />} text={"Stop Record"} /> */}
        <Button className=" w-10 h-10 sm:w-12 sm:h-12 col-span-3 border-red-700 text-red-700 hover:bg-red-700">
          <FiPhone className="rotate-[135deg]" />
        </Button>
      </div>
    </div>
  );
};

export default OutgoingCall;

const ButtonContainer = ({ onClick = () => {}, icon, text, className }) => {
  return (
    <div
      className={`w-fit flex items-center flex-col gap-1 justify-self-center ${className}`}
      onClick={onClick}
    >
      <Button className="w-10 h-10 sm:w-12 sm:h-12">{icon}</Button>
      <span className="text-[0.6rem] sm:text-xs font-medium text-gray-600">
        {text}
      </span>
    </div>
  );
};
