import Icon from "../../../icon";
import styled from "styled-components";

export const TitlePanel = styled.p`
  color: var(--color-primary-04);
  font-weight: 600;
  font-size: 16px;
`;

export const IconArrows = styled(Icon)`
  width: 70px;
  background-color: var(--color-primary-05);
  stroke: var(--color-primary-01);
  height: 60px;
  cursor: pointer;
  margin: 32px;

  :active {
    transform: scale(0.9);
  }

  :last-of-type {
    transform: scaleX(-1);
    :active {
      transform: scale(0.9) scaleX(-1);
    }
  }
`;
