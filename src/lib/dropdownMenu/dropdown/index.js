import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DropdownList } from "./styles";

const DropdownMenu = React.forwardRef(
  ({ children, isMenuOpen = false, positionRef }, ref) => {
    const [position, setPosition] = useState(false);

    useEffect(() => {
      const distances =
        positionRef.current.parentElement.getBoundingClientRect();
      setPosition({
        top: distances.top + document.querySelector("html").scrollTop,
        right: document.body.clientWidth - distances.right,
        fieldSizeY: positionRef.current.parentElement.clientHeight,
      });
    }, [isMenuOpen, positionRef]);

    return (
      <>
        {ReactDOM.createPortal(
          <DropdownList open={isMenuOpen} position={position} ref={ref}>
            {children}
          </DropdownList>,
          document.querySelector("#root")
        )}
      </>
    );
  }
);

export default DropdownMenu;
