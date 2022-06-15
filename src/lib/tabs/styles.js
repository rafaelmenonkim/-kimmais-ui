import styled, { css } from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const standardTab = css`
  background-color: var(--color-primary-05);
  font-weight: var(--font-weight-semi-bold);
  transition: all 0.2s;

  &.is-selected {
    background-color: var(--color-primary-01);
    color: var(--color-primary-05);
  }

  & + li::before {
    content: "";
    border-left: 1px solid var(--color-primary-03);
    position: absolute;
    left: 0;
    height: 1.5rem;
  }

  &.is-selected::before,
  &.is-selected + li::before {
    border: none;
  }
`;

const underScoredTab = css`
  &.is-selected {
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-primary-01);
    border-bottom: 3px solid var(--color-primary-01);
  }
`;

const CustomTabs = styled(Tabs)`
  -webkit-tap-highlight-color: transparent;
`;

const CustomTabList = styled(TabList)`
  display: inline-block;
  padding: 0;
  white-space: nowrap;
  width: 100%;
  background-color: var(--color-primary-05);
  border-radius: 0.5rem 0.5rem 0 0;
`;

const CustomTab = styled(Tab)`
  color: var(--color-primary-03);
  align-items: center;
  display: inline-flex;
  justify-content: center;
  list-style: none;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  height: 2.8125rem;
  position: relative;

  ${({ variant }) => (variant === "underscore" ? underScoredTab : standardTab)}

  :first-child {
    border-radius: 0.5rem 0 0 0;
  }

  :last-child {
    border-radius: 0 0.5rem 0 0;
  }

  &.is-disabled {
    cursor: not-allowed;
  }
`;

const CustomTabPanel = styled(TabPanel)`
  background-color: var(--color-primary-05);
  border-radius: 0 0 0.5rem 0.5rem;
  display: none;
  padding: 2rem;
  overflow: hidden;
  height: 100%;

  &.is-selected {
    display: block;
  }
`;

export { CustomTabs, CustomTabList, CustomTab, CustomTabPanel };
