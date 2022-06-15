import styled from "styled-components";

export const Body = styled.div`
  width: 90%;
  max-width: ${({ limit }) => (limit ? limit : "var(--content-width-limit)")};
`;
