import styled from "styled-components";

export const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.5em;
`;

export const Triangle = styled.div`
  cursor: pointer;
  width: 0;
  border-bottom: 6px solid black;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  + div {
    margin-top: 3px;
  }

  ${({ down }) => down && " transform: scaleY(-1)"};
`;
