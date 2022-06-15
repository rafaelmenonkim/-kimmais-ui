import React, { useEffect, useState } from "react";
import { Text } from "./styles";

const Footer = ({ paginator, ...props }) => {
  const [internalPaginator, setInternalPaginator] = useState(paginator);
  useEffect(
    () => paginator.page && setInternalPaginator(paginator),
    [paginator]
  );

  const initialItem =
    internalPaginator.pageSize * (internalPaginator.page - 1) + 1;
  const lastItem = Math.min(
    internalPaginator.pageSize * internalPaginator.page,
    internalPaginator.totalItens
  );

  return (
    <Text {...props}>
      {`Exibindo resultados ${
        internalPaginator.totalItens > 0 ? initialItem : 0
      } - ${lastItem} de ${internalPaginator.totalItens}.`}
    </Text>
  );
};

export default Footer;
