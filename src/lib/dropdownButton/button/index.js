import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ButtonTitle, CustomButton, DropdownList } from "./styles";
import Icon from "../../icon";
import Spinner from "../../spinner";

const DropdownButton = ({
  children,
  icon,
  title,
  stayOpen,
  loading,
  variant = "default",
  useOnClickOutside,
  ...props
}) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [position, setPosition] = useState(false);
  const positionRef = useRef(null);
  const buttonRef = useRef(null);

  const clickOut = useOnClickOutside(
    (e) => !buttonRef.current.contains(e.target) && setIsListOpen(false)
  );

  function handleButtonClick(e) {
    !clickOut.current.contains(e.target) && setIsListOpen((state) => !state);
    const distances = positionRef.current.parentElement.getBoundingClientRect();
    setPosition({
      top: distances.top + document.querySelector("html").scrollTop,
      right: distances.right,
      left: distances.left,
      fieldSizeX: positionRef.current.parentElement.clientWidth,
      fieldSizeY: positionRef.current.parentElement.clientHeight,
    });
  }

  return (
    <CustomButton
      variant={variant}
      onClick={handleButtonClick}
      ref={buttonRef}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {icon ? <Icon name={icon} /> : null}
          <ButtonTitle ref={positionRef}>{title}</ButtonTitle>
          <Icon name="arrow-down" />
        </>
      )}

      {ReactDOM.createPortal(
        <DropdownList
          open={isListOpen}
          position={position}
          ref={clickOut}
          onClick={() => !stayOpen && setIsListOpen(false)}
        >
          {children}
        </DropdownList>,
        document.querySelector("#root")
      )}
    </CustomButton>
  );
};

export default DropdownButton;
