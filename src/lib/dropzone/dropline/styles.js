import styled from "styled-components";

export const DropContainer = styled.div`
  background-color: var(--color-secundary-02);
  border: 1px dashed
    ${({ fileName, error }) =>
      error
        ? "var(--color-message-03)"
        : fileName
        ? "var(--color-primary-01)"
        : "var(--color-secundary-06)"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  margin: auto;
  padding: 26px;
  cursor: pointer;
`;

export const FileTitle = styled.p`
  color: var(--color-primary-04);
  font-size: 1.125rem;
  letter-spacing: 0;
`;

export const SubText = styled.p`
  color: var(--color-primary-03);
  font-size: 16px;
  letter-spacing: 0;
  margin-top: 8px;
`;

export const Document = styled.div`
  > svg {
    height: 50px;
    width: 40px;
    margin-right: 20px;
    fill: ${({ fileName }) =>
      fileName ? "var(--color-primary-01)" : "var(--color-primary-04)"};
  }
`;

export const FileName = styled.p`
  color: var(--color-primary-03);
  margin-top: 8px;
  white-space: nowrap;

  > strong {
    font-weight: var(--font-weight-semi-bold);
  }
`;

export const Error = styled.span`
  color: var(--color-message-03);
  font-weight: var(--font-weight-semi-bold);
`;
