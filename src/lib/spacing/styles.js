import styled from "styled-components";

export const Body = styled.div`
  margin-top: ${({ top }) => top && top};
  margin-bottom: ${({ bottom }) => bottom && bottom};
  margin-left: ${({ left }) => left && left};
  margin-right: ${({ right }) => right && right};
`;
