import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ noPadding }) => (noPadding ? "0" : "32px")};
  position: relative;
  background-color: var(--color-primary-05);
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
`;
