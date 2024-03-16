import React, { useState } from "react";

const Line = ({ color, height, text }) => {
  const [opacity, setOpacity] = useState(true);
  let styles = {
    width: "100px",
    height: height,
    borderRadius: "10px 10px 0px 0px",
    backgroundColor: color,
  };

  let textStyles = {
    // transform: `rotate(90deg)`,
    opacity: opacity ? 1 : 0,
  };

  return (
    <div className="line">
      {/* <h4 style={textStyles}>{text}</h4> */}
      <div
        className="lineContainer"
        style={styles}
        onClick={() => setOpacity(!opacity)}
      >
        <div className="circle"></div>
        <h2 style={textStyles}>{text}</h2>
      </div>
    </div>
  );
};

export default Line;
