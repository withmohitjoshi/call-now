import Dialpad from "./components/Dialpad";
import OutgoingCall from "./components/OutgoingCall";
import IncommingCall from "./components/IncommingCall";
import { useSip } from "./hooks/useSip";

const App = () => {
  useSip()
  return (
    <div className="flex items-center justify-center p-4 h-screen">
      <div className="shadow-xl rounded-xl p-4 w-full flex items-center justify-center max-w-sm min-h-[600px] max-h-[600px] h-full">
        {/* <Dialpad /> */}
        <IncommingCall />
        {/* <OutgoingCall /> */}
      </div>
    </div>
  );
};

export default App;
