export const minTwoDigits = (number) => {
  return number ? ("0" + number).slice(-2) : "00";
};

export const hideDocument = (document) => {
  if (!document) return;
  const hidedDoc = `***.${document.slice(3, 6)}.${document.slice(6, 9)}-**`;
  return hidedDoc;
};

export const removeSpecialCharacters = (string) =>
  string?.replace(/[^0-9|a-z]/gi, "");

export const reduceBigTextLines = (text, limit) => {
  return text.length > limit ? text.slice(0, limit) + " . . ." : text;
};

export const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
};

export const formatMoney = (value = 0) =>
  parseFloat(value).toLocaleString("pt-br", { minimumFractionDigits: 2 });

export const findOption = (options, key, keyValue) => {
  const option = options.find((item) => item[key] === keyValue);
  return option;
};

export const download = (url, filename = "file") => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
