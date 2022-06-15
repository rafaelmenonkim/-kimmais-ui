import React from "react";
import { CustomTabs, CustomTabList, CustomTab, CustomTabPanel } from "./styles";

const Tabs = ({ children, ...props }) => (
  <CustomTabs {...props}>{children}</CustomTabs>
);

const TabList = ({ children, ...props }) => (
  <CustomTabList {...props}>{children}</CustomTabList>
);
TabList.tabsRole = "TabList";

const Tab = ({ children, ...props }) => (
  <CustomTab {...props}>{children}</CustomTab>
);
Tab.tabsRole = "Tab";

const TabPanel = ({ children, ...props }) => (
  <CustomTabPanel {...props}>{children}</CustomTabPanel>
);
TabPanel.tabsRole = "TabPanel";

export { Tabs, TabList, Tab, TabPanel };
