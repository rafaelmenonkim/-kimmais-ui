export default function successHandler(message) {
  return {
    type: "success",
    content: message || "Operação realizada com sucesso",
  };
}
