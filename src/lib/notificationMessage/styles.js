import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

export const NotificationMessageBody = styled.div`
  background-color: var(--color-primary-05);
  border-radius: 16px;
  color: var(--color-primary-03);
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  align-items: center;
  display: flex;
  min-height: 132px;
  min-width: 24.125rem;
  max-width: min(90vw, 950px);
  overflow: hidden;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1001;
  padding: 48px 20px 40px 148px;
`;

export const CloseIcon = styled(RiCloseLine)`
  fill: var(--color-primary-03);
  position: absolute;
  right: 16px;
  top: 16px;
  min-height: 24px;
  max-height: 24px;
  min-width: 24px;
  max-width: 24px;
  transition: all 0.1s linear;
  cursor: pointer;

  :hover {
    transform: scale(1.3);
  }

  :active {
    transform: scale(0.9);
  }
`;

export const TypeIdentifier = styled.div`
  height: 100%;
  width: 132px;
  background-color: ${({ color }) => color};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: var(--color-primary-05);
    stroke: var(--color-primary-05);
    min-height: 48px;
    max-height: 48px;
    min-width: 48px;
    max-width: 48px;
  }
`;

export const MessageContainer = styled.div`
  max-height: 200px;
  overflow: auto;
`;

export const Message = styled.p`
  overflow-wrap: break-word;
`;

export const TimeAnimation = styled.div`
  position: absolute;
  left: 132px;
  height: 5px;
  background-color: var(--color-secundary-08);
  bottom: 0;
  animation: notification-message-disappear-time
    ${({ animationTime }) => animationTime}s linear infinite;

  @keyframes notification-message-disappear-time {
    from {
      width: 0;
    }
    to {
      width: calc(100% - 132px);
    }
  }
`;
