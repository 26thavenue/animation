import { useState, useEffect, useRef } from "react";

const App = () => {
  return (
    <div className="relative flex justify-center w-[100dvw] h-[100dvh]">
      <BottomNav />
    </div>
  );
};

export default App;

export const BottomNav = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startFilling = () => {
    if (intervalRef.current == null) {
      intervalRef.current = window.setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 1 : 100));
      }, 10); // Fill in 1s
    }
  };

  const resetFilling = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-10 mx-auto flex justify-center h-[70px] w-[400px] bg-gray-700 rounded-md">
      <div
        className="h-full w-fit flex flex-col cursor-pointer gap-1 items-center justify-center"
        onMouseEnter={startFilling}
        onMouseLeave={resetFilling}
      >
        <h4 className="text-white text-xl">Display Text</h4>
        <div className="relative h-[2px] w-24 bg-gray-400 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-white transition-all duration-1000 ease-in"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
