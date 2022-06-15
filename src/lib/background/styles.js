import styled from "styled-components";

export const Body = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0 40px 0;
  min-height: calc(100vh - var(--menu-height) - var(--footer-height));
  height: auto;
  position: relative;
  display: flex;
  margin: 0 auto;
  overflow: hidden;
  /* background: #fff; */
`;

export const Signature = styled.div`
  position: absolute;
  color: var(--color-primary-03);
  bottom: 45px;
`;
