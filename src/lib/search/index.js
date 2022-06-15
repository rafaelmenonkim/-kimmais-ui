import React from "react";
import { useRef } from "react";
import Icon from "../icon";
import { SearchContainer, Field } from "./styles";

const Search = ({ search, preventEnter, searchOnBlur, ...props }) => {
  const ref = useRef(null);

  return (
    <SearchContainer>
      <Field
        ref={ref}
        {...props}
        onKeyDown={(e) =>
          !preventEnter && e.code === "Enter" && search(ref.current.value)
        }
        onBlur={() => searchOnBlur && search(ref.current.value)}
      />
      <Icon name="search" onClick={() => search(ref.current.value)} />
    </SearchContainer>
  );
};

export default Search;
