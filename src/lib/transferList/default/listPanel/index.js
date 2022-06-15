import { Panel, Search, Spacing } from "../../../index";
import React from "react";
import { TitlePanel } from "./styles";

const ListPanel = ({ children, filter, setFilter, title }) => {
  return (
    <Panel
      style={{
        padding: "32px",
        height: "630px",
        maxWidth: "40%",
      }}
    >
      <div style={{ overflow: "hidden", height: "100%" }}>
        <TitlePanel>{title}</TitlePanel>
        <div style={{ marginTop: "15px", width: "70%" }}>
          <Search
            placeholder="Buscar na lista abaixo"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Spacing top="32px" />
        {children}
      </div>
    </Panel>
  );
};

export default ListPanel;
