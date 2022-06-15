const buildQuery = (paginator) => {
  return `?Page=${paginator.page}&PageSize=${
    paginator.pageSize
  }${__queryBuilder(paginator.query)}`;
};

const setOrder = (paginator, orderBy, direction = true) => {
  return {
    ...paginator,
    query: { ...paginator.query, Sort: orderBy, Desc: !direction },
    doRequest: true,
  };
};

const setFilters = (paginator, filters) => {
  return {
    ...paginator,
    page: 1,
    query: { ...paginator.query, ...filters },
    doRequest: true,
  };
};

const overrideFilters = (paginator, filters) => {
  return { ...paginator, page: 1, query: filters, doRequest: true };
};

const resetFilters = (paginator) => {
  return { ...paginator, query: {}, doRequest: true };
};

const setPage = (paginator, wantedPage) => {
  return { ...paginator, page: wantedPage, doRequest: true };
};

const setPageSize = (paginator, newSize) => {
  return { ...paginator, page: 1, pageSize: newSize, doRequest: true };
};

const updatePaginator = (paginator, newPaginator) => {
  return { ...paginator, ...newPaginator, doRequest: false };
};

const refresh = (paginator) => {
  return { ...paginator, doRequest: true };
};

const __queryBuilder = (queryObject) => {
  if (!queryObject) return "";
  let query = "";
  for (const attribute in queryObject) {
    if (!!!queryObject[attribute]) continue;
    query += `&${attribute}=${queryObject[attribute]}`;
  }
  return query;
};

const paginatorMethods = {
  buildQuery,
  refresh,
  setFilters,
  resetFilters,
  setOrder,
  setPage,
  setPageSize,
  overrideFilters,
  updatePaginator,
};

export default paginatorMethods;
