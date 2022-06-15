"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.states = exports.productStatus = exports.orderStatus = exports.numberOfBeneficiaries = exports.cardStatus = exports.branches = void 0;
var states = [{
  label: "AC",
  value: "AC"
}, {
  label: "AL",
  value: "AL"
}, {
  label: "AM",
  value: "AM"
}, {
  label: "AP",
  value: "AP"
}, {
  label: "BA",
  value: "BA"
}, {
  label: "CE",
  value: "CE"
}, {
  label: "DF",
  value: "DF"
}, {
  label: "ES",
  value: "ES"
}, {
  label: "GO",
  value: "GO"
}, {
  label: "MA",
  value: "MA"
}, {
  label: "MT",
  value: "MT"
}, {
  label: "MS",
  value: "MS"
}, {
  label: "MG",
  value: "MG"
}, {
  label: "PA",
  value: "PA"
}, {
  label: "PB",
  value: "PB"
}, {
  label: "PR",
  value: "PR"
}, {
  label: "PE",
  value: "PE"
}, {
  label: "PI",
  value: "PI"
}, {
  label: "RJ",
  value: "RJ"
}, {
  label: "RN",
  value: "RN"
}, {
  label: "RO",
  value: "RO"
}, {
  label: "RS",
  value: "RS"
}, {
  label: "RR",
  value: "RR"
}, {
  label: "SC",
  value: "SC"
}, {
  label: "SE",
  value: "SE"
}, {
  label: "SP",
  value: "SP"
}, {
  label: "TO",
  value: "TO"
}];
exports.states = states;
var branches = [{
  label: "Atendimento ao Cliente",
  value: "47"
}, {
  label: "Biologia",
  value: "43"
}, {
  label: "Compras",
  value: "41"
}, {
  label: "Contabilidade",
  value: "42"
}, {
  label: "Informática",
  value: "40"
}, {
  label: "Sociologia",
  value: "44"
}, {
  label: "Televendas",
  value: "45"
}, {
  label: "Vendas",
  value: "39"
}];
exports.branches = branches;
var numberOfBeneficiaries = [{
  label: "Individual/Autônomo",
  value: 1
}, {
  label: "2 a 10 colaboradores",
  value: 2
}, {
  label: "11 a 50 colaboradores",
  value: 3
}, {
  label: "51 a 100 colaboradores",
  value: 4
}, {
  label: "101 a 500 colaboradores",
  value: 5
}, {
  label: "Mais de 500 colaboradores",
  value: 6
}];
exports.numberOfBeneficiaries = numberOfBeneficiaries;
var productStatus = [{
  label: "ATIVO",
  value: "1"
}, {
  label: "INATIVO",
  value: "2"
}, {
  label: "BLOQUEADO",
  value: "3"
}];
exports.productStatus = productStatus;
var cardStatus = [{
  label: "ATIVO",
  value: "0"
}, {
  label: "INATIVO",
  value: "1"
}];
exports.cardStatus = cardStatus;
var orderStatus = [{
  label: "Aguardando pagamento",
  value: "3"
}, {
  label: "Cancelado",
  value: "16"
}, {
  label: "Concluído",
  value: "15"
}, {
  label: "Disponível para retirada",
  value: "10"
}, {
  label: "Em andamento",
  value: "6"
}, {
  label: "Enviando produto",
  value: "11"
}, {
  label: "Rascunho",
  value: "0"
}];
exports.orderStatus = orderStatus;