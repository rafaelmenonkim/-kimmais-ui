import React from "react";
import { Breadcrumb } from "..";
import { PageHeaderContainer, PageName } from "./styles";

const PageHeader = ({ children, location }) => {
  return (
    <PageHeaderContainer>
      <PageName>{children}</PageName>
      <Breadcrumb />
    </PageHeaderContainer>
  );
};

export default PageHeader;
