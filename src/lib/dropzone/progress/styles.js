import styled from "styled-components";
import Icon from "../../icon";

export const Container = styled.div`
  background-color: var(--color-primary-05);
  border: 1px solid var(--color-secundary-04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  width: 100%;
`;

export const ProgressBar = styled.div`
  background-color: var(--color-secundary-04);
  border-radius: 5px;
  margin-top: 8px;
  height: 6px;
  width: 100%;
  overflow: hidden;
`;

export const FilledPercentage = styled.div`
  background-color: var(--color-primary-02);
  border-radius: 5px;
  height: 100%;
  width: ${({ sended }) => sended + "%"};
`;

export const CloseIcon = styled(Icon)`
  cursor: pointer;
  height: 20px;
  width: 20px;
  stroke: var(--color-secundary-06);
`;

export const FileName = styled.p`
  display: inline;
  color: var(--color-primary-03);
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0;
`;

export const FileSize = styled.p`
  color: font-variant(--color-secundary-06);
  display: inline;
  font-size: 0.6875rem;
  margin-left: 8px;
  text-transform: capitalize;
`;

export const UploadPercentage = styled.p`
  display: inline;
  color: var(--color-primary-03);
  font-size: 0.75rem;
  letter-spacing: 0;
  position: absolute;
  right: 0;
`;
