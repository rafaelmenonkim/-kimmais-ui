import React from "react";
import Icon from "../icon";
import { StepsContainer, DashedLine, Step } from "./styles";

const STATUS = {
  NOT_STARTED: "notstarted",
  ONGOING: "ongoing",
  DONE: "done",
};

const Steps = ({ currentStep, steps, ...props }) => {
  currentStep -= 1;

  return (
    <StepsContainer style={{ flexDirection: "row", display: "flex" }}>
      {steps.map((step, index) => {
        const status =
          index === currentStep
            ? STATUS.ONGOING
            : index < currentStep
            ? STATUS.DONE
            : STATUS.NOT_STARTED;

        return (
          <Step
            status={status}
            navigable={step.navigable}
            key={index}
            onClick={step.navigable ? () => step.handleNavigation() : null}
            {...props}
          >
            {currentStep > index ? <Icon name="ok"></Icon> : index + 1}
            <label>{step.name}</label>
          </Step>
        );
      })}
      <DashedLine />
    </StepsContainer>
  );
};

export default Steps;
