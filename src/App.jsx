import Dialpad from "./components/Dialpad";
import OutgoingCall from "./components/OutgoingCall";
import IncommingCall from "./components/IncommingCall";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mx-4">
      <div className="shadow-xl rounded-xl p-4 w-full flex items-center justify-center max-w-sm min-h-[600px] max-h-[600px] overflow-y-auto">
        {/* <Dialpad /> */}
        <IncommingCall />
      </div>
    </div>
  );
};

export default App;
