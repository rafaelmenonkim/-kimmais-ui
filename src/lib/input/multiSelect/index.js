import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import Input from "..";
import Spinner from "@/components/spinner";
import { RiCloseFill, RiArrowDownSLine } from "react-icons/ri";
import {
  FloatingList,
  FloatingListContent,
  FloatingListItem,
  FloatingListItemLabel,
  Icon,
  SelectContainer,
  SelectedInput,
} from "./styles";

const MultiSelect = ({
  options = [],
  placeholder = "Selecione",
  multiSelectionLabel = "itens selecionados",
  noOptionLabel = "Sem opções",
  getOptionValue = (option) => option.value,
  getOptionLabel = (option) => option.label,
  isClearable = true,
  isLoading = false,
  isDisabled = false,
  onChange = () => null,
  onInputChange = () => null,
  inputRef,
  useOnClickOutside,
}) => {
  const positionRef = useRef(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [position, setPosition] = useState(false);
  const [selecteds, setSelecteds] = useState([]);
  const [filter, setFilter] = useState("");
  const [isFocused, setIsFocused] = useState(true);
  const clickOutside = useOnClickOutside((e) => {
    if (!positionRef.current.contains(e.target)) {
      setIsListOpen(false);
      setFilter("");
    }
    setIsFocused(false);
  });

  useEffect(
    () => !isDisabled && onChange(selecteds),
    [onChange, selecteds, isDisabled]
  );
  useEffect(
    () => !isDisabled && onInputChange(filter),
    [onInputChange, filter, isDisabled]
  );

  const canClear = isClearable && selecteds.length > 0;

  const isSelected = (option) => {
    return (
      selecteds.findIndex(
        (selected) => getOptionValue(option) === getOptionValue(selected)
      ) >= 0
    );
  };

  const handleOptionClick = (option) => {
    setSelecteds((state) => {
      const newState = [...state];
      const optionIndex = newState.findIndex(
        (selected) => getOptionValue(option) === getOptionValue(selected)
      );
      if (optionIndex >= 0) {
        newState.splice(optionIndex, 1);
        return newState;
      } else {
        newState.push(option);
        return newState;
      }
    });
  };

  const defineLabel = () => {
    if (selecteds.length === 0) {
      return placeholder;
    } else if (selecteds.length === 1) {
      return getOptionLabel(selecteds[0]);
    } else {
      return `${selecteds.length} ${multiSelectionLabel}`;
    }
  };

  const getSelectedsOutOptions = () => {
    return (
      selecteds.filter(
        (selected) =>
          !options.some(
            (option) => getOptionValue(option) === getOptionValue(selected)
          )
      ) || []
    );
  };

  const generateRenderArray = () => {
    let optionsToRender = [];
    if (filter !== "") {
      const filteredOptions = options.filter((option) => {
        const label = String(getOptionLabel(option)).toLowerCase();
        const value = String(getOptionValue(option)).toLowerCase();
        if (label.includes(filter) || value.includes(filter)) return true;
        return false;
      });
      optionsToRender = [...optionsToRender, ...filteredOptions];
    } else {
      const out = getSelectedsOutOptions();
      optionsToRender = [...optionsToRender, ...options, ...out];
    }
    return optionsToRender;
  };

  const renderItensList = () => {
    if (isLoading) return;
    const optionsToRender = generateRenderArray();
    return optionsToRender.length > 0 ? (
      optionsToRender.map((option) => {
        return (
          <FloatingListItem
            onClick={() => handleOptionClick(option)}
            key={_.uniqueId()}
          >
            <Input.CheckBox
              controlled
              checked={isSelected(option)}
              onClick={null}
            />
            <FloatingListItemLabel>
              {getOptionLabel(option)}
            </FloatingListItemLabel>
          </FloatingListItem>
        );
      })
    ) : (
      <FloatingListItem>
        <FloatingListItemLabel>{noOptionLabel}</FloatingListItemLabel>
      </FloatingListItem>
    );
  };

  const handleOnClearClick = (e) => {
    e.stopPropagation();
    setIsListOpen(false);
    setFilter("");
    setSelecteds([]);
  };

  const handleButtonClick = (e) => {
    setIsFocused(true);
    !clickOutside.current.contains(e.target) &&
      setIsListOpen((state) => !state);
    const distances = positionRef.current.getBoundingClientRect();
    setPosition({
      top:
        distances.top +
        document.querySelector("html").scrollTop +
        positionRef.current.offsetHeight +
        8,
      right: distances.right,
      left: distances.left,
      fieldSizeX: positionRef.current.offsetWidth,
    });
  };

  return (
    <SelectContainer
      ref={positionRef}
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      <SelectedInput
        placeholder={defineLabel()}
        ref={inputRef}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        onFocus={() => setIsFocused(true)}
        value={filter}
        disabled={isDisabled}
      />
      {ReactDOM.createPortal(
        <FloatingList
          ref={clickOutside}
          visible={isListOpen}
          position={position}
        >
          <FloatingListContent>{renderItensList()}</FloatingListContent>
        </FloatingList>,
        document.querySelector("#root")
      )}

      {canClear && !isLoading && (
        <Icon isfocused={isFocused}>
          <RiCloseFill onClick={handleOnClearClick} />
        </Icon>
      )}
      {isLoading && (
        <Icon isfocused={isFocused}>
          <Spinner variant="sm" />
        </Icon>
      )}
      <Icon isfocused={isFocused}>
        <RiArrowDownSLine />
      </Icon>
    </SelectContainer>
  );
};

export default MultiSelect;
