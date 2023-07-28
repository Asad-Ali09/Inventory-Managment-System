import BtcSVG from "./BtcSVG";
import { useEffect, useRef } from "react";

const Loading = () => {
  const ref = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      let loadText = ref.current?.innerHTML;
      if (loadText === "Loading...") {
        loadText = "Loading.";
      } else {
        loadText = loadText.concat(".");
      }
      ref.current.innerHTML = loadText;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="loading">
        <BtcSVG />
        <p ref={ref} className="loading__text">
          Loading...
        </p>
      </div>
    </>
  );
};

export default Loading;
