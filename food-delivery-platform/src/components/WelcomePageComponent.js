import React from "react";
import WecomePageNav from "./WecomePageNav";

const WelcomePageComponent = () => {
  return (
    <div className="mt-5" style={{fontSize:'2.5rem'}}>
      <p
        style={{
          textAlign: "center",
          color: "#5B4F47",
          textTransform: "uppercase",
        }}
      >
        Welcome to restaurant management
      </p>
      <WecomePageNav />
    </div>
  );
};

export default WelcomePageComponent;
