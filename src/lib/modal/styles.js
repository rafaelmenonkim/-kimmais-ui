import styled from "styled-components";

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 32px;
`;

export const ButtonWrapper = styled.div`
  margin: auto;
  max-width: 250px;
  margin-top: 32px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;

  > button + button {
    margin-left: 32px;
  }
`;
