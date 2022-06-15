import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Input, DateContainer, Calendar, CalendarIcon } from "./styles";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { isValidDate } from "../../utils/functionUtils";
import "./calendar.css";

const LOCALE = "pt-br";

const InputDate = ({
  value,
  onChange,
  required,
  minDate,
  maxDate,
  ref,
  placeholder,
  ...props
}) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [position, setPosition] = useState(null);
  const calendarRef = useRef();
  const clickOut = useOnClickOutside((e) => {
    !calendarRef.current.contains(e.target) && setIsCalendarVisible(false);
  });
  value = typeof value === "string" ? new Date(value) : value;

  function handleOnCalendarChange(date) {
    onChange(date);
    setIsCalendarVisible(false);
  }

  function handleOnFieldChange(e) {
    const input = e.target.value;
    if (input[0] === " " || !input) {
      onChange("");
      return;
    }
    if (input.slice(-1) === " " || !input) return;
    const slicedDate = input.match(/[^/]*[0-9]/gi);
    const dateString = `${slicedDate[1]}/${slicedDate[0]}/${slicedDate[2]}`;
    const newDate = new Date(dateString);
    onChange(newDate);
  }

  function handleOnIconClick(e) {
    setIsCalendarVisible(!isCalendarVisible);
    const distances = e.target.parentElement.getBoundingClientRect();
    setPosition({
      top: distances.top + document.querySelector("html").scrollTop,
      right: distances.right,
      left: distances.left,
      fieldSize: e.target.parentElement.clientWidth,
    });
  }

  function handleOnBlur(e) {
    const input = e.target.value;
    if (input.slice(-1) === " " || !isValidDate(value)) {
      e.target.value = null;
      onChange("");
    }
  }

  return (
    <DateContainer ref={clickOut}>
      <Input
        format="##/##/####"
        value={value ? value.toLocaleDateString(LOCALE) : null}
        onChange={handleOnFieldChange}
        onBlur={handleOnBlur}
        required={required}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />

      <CalendarIcon name="calendar" onClick={handleOnIconClick} />

      {ReactDOM.createPortal(
        <div ref={calendarRef}>
          <Calendar
            onChange={handleOnCalendarChange}
            value={isValidDate(value) ? value : null}
            visible={isCalendarVisible}
            weekStartDay={0}
            returnValue="start"
            calendarType={"US"}
            minDetail={"decade"}
            navigationLabel={({ label, view }) =>
              `${view === "month" ? label.match(/[^ ]*/) : label}`
            }
            maxDate={maxDate}
            minDate={minDate}
            position={position}
          />
        </div>,
        document.querySelector("#root")
      )}
    </DateContainer>
  );
};

export default InputDate;
