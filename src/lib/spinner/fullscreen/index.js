import { Backdrop } from "@/components";
import React from "react";
import loadingMotiva from "@/assets/loading.gif";

const Fullscreen = ({ style, ...props }) => {
  return (
    <Backdrop {...props} style={{ zIndex: "300000" }}>
      <img src={loadingMotiva} alt="loading..." style={style} />
    </Backdrop>
  );
};

export default Fullscreen;
