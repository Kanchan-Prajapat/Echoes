export function getApiError(error: any): string {
  const message = error?.response?.data?.message;

  if (typeof message === "string") {
    return message;
  }

  if (Array.isArray(message)) {
    return message.join("\n");
  }

  return "Something went wrong.";
}