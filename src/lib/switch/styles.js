import styled from "styled-components";

export const Body = styled.div`
  display: inline-block;
  position: relative;

  .react-switch-bg {
    border: 1px solid ${({ active }) => (active ? "transparent" : "#707070")};
  }
`;
