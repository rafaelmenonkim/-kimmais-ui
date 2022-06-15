export const FIVE_SECONDS = 5000;
export const TEN_SECONDS = 10000;
export const FIFTEEN_SECONDS = 15000;
export const NULL_ID = "00000000-0000-0000-0000-000000000000";
export const TEN_MB = 10000000;
export const DATE_TO_IGNORE = "0001-01-01";
export const TEMP_OPERATOR_ID = "7e17d3a1-4f26-443f-b8ff-0a4a227e2758";

export const FORM_MODE = {
  ADD: "ADD",
  EDIT: "EDIT",
  VIEW: "VIEW",
};

export const NOTIFICATION_TYPE = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
};

export const BREAK_POINTS = {
  sm: "575px",
  md: "767px",
  lg: "991px",
  xl: "1199px",
  xxl: "1599px",
};

export const CARD_TYPES = {
  1: "Vale Transporte Eletrônico",
  TRANSPORT: 1,
};

export const CARD_STATUS = {
  ACTIVE: 1,
  INACTIVE: 2,
  BLOQUED: 3,
};

export const ORDER_TYPES = {
  FIRSTCOPY: 1,
  SECONDCOPY: 2,
  RECHARGE: 3,
};

export const ORDER_STATUS = {
  0: "Rascunho",
  1: "Processando",
  3: "Aguardando pagamento",
  4: "Pago",
  6: "Em andamento",
  10: "Disponível para retirada",
  11: "Enviando produto",
  15: "Concluído",
  16: "Cancelado",
  17: "Cancelando",
  DRAFT: 0,
  PROCESSING: 1,
  WAITING_PAYMENT: 3,
  PAID: 4,
  RUNNING: 6,
  AVAILABLE_PICKUP: 10,
  DELIVER: 11,
  COMPLETED: 15,
  CANCELED: 16,
  CANCELING: 17,
};

export const ORDER_PAYMENT_TYPE = {
  1: "Boleto",
  3: "Cartão de Crédito",
  14: "Pix",
  17: "Free",
  SLIP: 1,
  DEBITCARD: 2,
  CREDITCARD: 3,
  TRANSFER: 4,
  DEPOSIT: 5,
  PIX: 14,
  FREE: 17,
  ACCOUNT_BALANCE: 18,
};

export const ORDER_METHOD = {
  0: "Manual",
  1: "Importação",
  MANUAL: 0,
  IMPORT: 1,
};

export const PRODUCT_TYPES = {
  RATES: 1,
};

export const REPORTS_CATEGORIES = {
  ORDERS: "Pedidos",
  CARDS: "Cartões",
  //EMPLOYESS: "Colaboradores",
  //BENEFIT: "Benefícios",
  BALANCE: "Saldo",
};

export const FILE_CONTEXT = {
  NONE: 0,
  COMPANY: 1,
  RESALE: 2,
  USER: 3,
};

export const FILE_SUBCONTEXT = {
  NONE: 0,
  TERM: 1,
  IMAGE: 2,
  PAYMENT: 3,
  REPORT: 4,
};

export const FILE_KIND = {
  NONE: 0,
  LOGOLARGE: 1,
  LOGOSMALL: 2,
  FAVICON: 3,
  AVATAR: 4,
  TERM: 5,
  PAYMENT: 6,
  PDFREPORT: 7,
  XLSREPORT: 8,
  CSVREPORT: 9,
};
