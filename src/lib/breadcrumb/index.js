import React from "react";
import { withRouter } from "react-router";
import { Crumb, CrumbsContainer } from "./styles";

const Breadcrumb = ({ location, props, history, routesAlias }) => {
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((x) => x);

  function generateCrumbs(pathnames) {
    return pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      return (
        <Crumb
          key={index + "_link"}
          isLast={isLast}
          onClick={() => {
            !isLast && history.push(routeTo);
          }}
        >
          {routesAlias[routeTo]
            ? routesAlias[routeTo]
            : name.charAt(0).toUpperCase() + name.slice(1)}
        </Crumb>
      );
    });
  }

  return (
    <CrumbsContainer {...props}>
      <Crumb
        onClick={() => {
          history.push("/");
        }}
      >
        Início
      </Crumb>
      {generateCrumbs(pathnames)}
    </CrumbsContainer>
  );
};

export default withRouter(Breadcrumb);
