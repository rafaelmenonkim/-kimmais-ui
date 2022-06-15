export default function errorHandler(error) {
  if (!error?.data?.errors || !error) {
    return {
      type: "error",
      content: `Erro Inesperado ${error ? `(${error.status})` : ""}`,
    };
  }

  if (Array.isArray(error.data.errors)) {
    return error.data.errors.map((message) => ({
      type: "error",
      content: message,
    }));
  }

  if (typeof error.data.errors === "object") {
    let notifications = [];
    for (let element in error.data.errors) {
      const newNotificaitons = error.data.errors[element].map((message) => ({
        type: "error",
        content: message,
      }));
      notifications = [...notifications, ...newNotificaitons];
    }
    return notifications;
  }

  return {
    type: "error",
    content: "Erro Inesperado",
  };
}
