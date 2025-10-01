import React from "react";
import { useState, useEffect } from "react";
import "./loader.css";

const Loader = () => {
  const [active, setIsActive] = useState(0);

  useEffect(() => {
    // let direction = 1; // 1 = forward, -1 = backward

    // const interval = setInterval(() => {
    //   setIsActive((prev) => {
    //     if (prev === 5) direction = -1; // reverse at max
    //     if (prev === 0) direction = 1; // forward at min
    //     return prev + direction;
    //   });
    // }, 200); // change every second
    const interval = setInterval(() => {
      setIsActive((prev) => {
        if (prev < 8) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 180); // change every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className="loader-container p-5">
      <img src="/assets/icons/badge (1).svg" className=" position-absolute top-0 start-0  scaleAnim d1 " style={{ height: "150px" }} />
      <img src="/assets/icons/badge (2).svg" className=" position-absolute top-0 end-0  scaleAnim d2" style={{ height: "150px" }} />
      <img src="/assets/icons/badge (3).svg" className=" position-absolute bottom-0 start-0  scaleAnim d3" style={{ height: "150px" }} />
      <img src="logo_tutto.svg" className=" position-absolute bottom-0 end-0  scaleAnim d4" style={{ height: "150px", filter: "invert(1)" }} />

      <div className="w-100">
        <div className="laoder-wrapper">
          <div className="loader">
            <img src="/assets/loader/1.png" alt="Loading..." className={`${active == 0 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/2.png" alt="Loading..." className={`${active == 1 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/3.png" alt="Loading..." className={`${active == 2 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/4.png" alt="Loading..." className={`${active == 3 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/5.png" alt="Loading..." className={`${active == 4 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/5.png" alt="Loading..." className={`${active == 5 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/2.png" alt="Loading..." className={`${active == 6 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/3.png" alt="Loading..." className={`${active == 7 ? "d-block" : "d-none"}`} />
            <img src="/assets/loader/3.png" alt="Loading..." className={`${active == 8 ? "d-block" : "d-none"}`} />
          </div>
        </div>
        <h5 className="text-start fs-4  p-font txt-warning mt-4">
          LOADING <br /> EXPERIENCE
        </h5>
      </div>
    </div>
  );
};

export default Loader;
