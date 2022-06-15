import { Spinner } from "@/components";
import React from "react";
import { CustomTable, TableContainer } from "./styles";

const Table = ({ children, loading, ...props }) => (
  <TableContainer>
    {loading ? (
      <Spinner.Box style={{ height: "441px" }}>
        <Spinner />
      </Spinner.Box>
    ) : (
      <CustomTable {...props}>{children}</CustomTable>
    )}
  </TableContainer>
);

export default Table;
