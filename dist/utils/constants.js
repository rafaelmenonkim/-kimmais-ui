"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEN_SECONDS = exports.TEN_MB = exports.TEMP_OPERATOR_ID = exports.REPORTS_CATEGORIES = exports.PRODUCT_TYPES = exports.ORDER_TYPES = exports.ORDER_STATUS = exports.ORDER_PAYMENT_TYPE = exports.ORDER_METHOD = exports.NULL_ID = exports.NOTIFICATION_TYPE = exports.FORM_MODE = exports.FIVE_SECONDS = exports.FILE_SUBCONTEXT = exports.FILE_KIND = exports.FILE_CONTEXT = exports.FIFTEEN_SECONDS = exports.DATE_TO_IGNORE = exports.CARD_TYPES = exports.CARD_STATUS = exports.BREAK_POINTS = void 0;
var FIVE_SECONDS = 5000;
exports.FIVE_SECONDS = FIVE_SECONDS;
var TEN_SECONDS = 10000;
exports.TEN_SECONDS = TEN_SECONDS;
var FIFTEEN_SECONDS = 15000;
exports.FIFTEEN_SECONDS = FIFTEEN_SECONDS;
var NULL_ID = "00000000-0000-0000-0000-000000000000";
exports.NULL_ID = NULL_ID;
var TEN_MB = 10000000;
exports.TEN_MB = TEN_MB;
var DATE_TO_IGNORE = "0001-01-01";
exports.DATE_TO_IGNORE = DATE_TO_IGNORE;
var TEMP_OPERATOR_ID = "7e17d3a1-4f26-443f-b8ff-0a4a227e2758";
exports.TEMP_OPERATOR_ID = TEMP_OPERATOR_ID;
var FORM_MODE = {
  ADD: "ADD",
  EDIT: "EDIT",
  VIEW: "VIEW"
};
exports.FORM_MODE = FORM_MODE;
var NOTIFICATION_TYPE = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning"
};
exports.NOTIFICATION_TYPE = NOTIFICATION_TYPE;
var BREAK_POINTS = {
  sm: "575px",
  md: "767px",
  lg: "991px",
  xl: "1199px",
  xxl: "1599px"
};
exports.BREAK_POINTS = BREAK_POINTS;
var CARD_TYPES = {
  1: "Vale Transporte Eletrônico",
  TRANSPORT: 1
};
exports.CARD_TYPES = CARD_TYPES;
var CARD_STATUS = {
  ACTIVE: 1,
  INACTIVE: 2,
  BLOQUED: 3
};
exports.CARD_STATUS = CARD_STATUS;
var ORDER_TYPES = {
  FIRSTCOPY: 1,
  SECONDCOPY: 2,
  RECHARGE: 3
};
exports.ORDER_TYPES = ORDER_TYPES;
var ORDER_STATUS = {
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
  CANCELING: 17
};
exports.ORDER_STATUS = ORDER_STATUS;
var ORDER_PAYMENT_TYPE = {
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
  ACCOUNT_BALANCE: 18
};
exports.ORDER_PAYMENT_TYPE = ORDER_PAYMENT_TYPE;
var ORDER_METHOD = {
  0: "Manual",
  1: "Importação",
  MANUAL: 0,
  IMPORT: 1
};
exports.ORDER_METHOD = ORDER_METHOD;
var PRODUCT_TYPES = {
  RATES: 1
};
exports.PRODUCT_TYPES = PRODUCT_TYPES;
var REPORTS_CATEGORIES = {
  ORDERS: "Pedidos",
  CARDS: "Cartões",
  //EMPLOYESS: "Colaboradores",
  //BENEFIT: "Benefícios",
  BALANCE: "Saldo"
};
exports.REPORTS_CATEGORIES = REPORTS_CATEGORIES;
var FILE_CONTEXT = {
  NONE: 0,
  COMPANY: 1,
  RESALE: 2,
  USER: 3
};
exports.FILE_CONTEXT = FILE_CONTEXT;
var FILE_SUBCONTEXT = {
  NONE: 0,
  TERM: 1,
  IMAGE: 2,
  PAYMENT: 3,
  REPORT: 4
};
exports.FILE_SUBCONTEXT = FILE_SUBCONTEXT;
var FILE_KIND = {
  NONE: 0,
  LOGOLARGE: 1,
  LOGOSMALL: 2,
  FAVICON: 3,
  AVATAR: 4,
  TERM: 5,
  PAYMENT: 6,
  PDFREPORT: 7,
  XLSREPORT: 8,
  CSVREPORT: 9
};
exports.FILE_KIND = FILE_KIND;