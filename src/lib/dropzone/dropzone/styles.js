import styled from "styled-components";
import Icon from "../../icon";

export const DropContainer = styled.div`
  background-color: var(--color-secundary-02);
  border: 1px dashed #878181;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  max-width: 85%;
  margin: auto;
  cursor: pointer;
`;

export const MainText = styled.p`
  font-size: 18px;
  letter-spacing: 0;
  margin-top: 40px;
`;

export const SubText = styled.p`
  color: var(--color-primary-03);
  font-size: 16px;
  letter-spacing: 0;
  margin-top: 16px;
`;

export const UploadIcon = styled(Icon)`
  height: 96px;
  width: 96px;
  stroke: var(--color-primary-03);
`;

export const TextDecoration = styled.span`
  color: var(--color-primary-02);
  text-decoration: underline;
`;
