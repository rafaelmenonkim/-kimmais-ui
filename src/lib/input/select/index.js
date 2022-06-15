import React from "react";
import { ReactSelect } from "./styles";

const styles = {
  default: { menuPortal: (provided) => ({ ...provided, zIndex: 1000 }) },
  borderless: {
    menuPortal: (provided) => ({ ...provided, zIndex: 1000 }),
    control: (provided) => ({
      ...provided,
      border: "none !important",
      background: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--color-primary-04) !important",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--color-primary-04)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--color-primary-04)",
    }),
  },
};

const Select = ({
  isClearable = true,
  multiple,
  options,
  variant,
  ...props
}) => {
  variant = variant ?? "default";

  return (
    <ReactSelect
      menuPortalTarget={document.body}
      classNamePrefix="Select"
      options={options}
      styles={styles[variant]}
      menuShouldBlockScroll={true}
      isClearable={isClearable}
      {...props}
    />
  );
};
export default Select;
