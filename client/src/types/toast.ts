export type ToastType =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface Toast {

  id: string;

  type: ToastType;

  message: string;

  duration?: number;

}

export interface ToastState {

  toasts: Toast[];

  showToast: (
    toast: Omit<Toast, "id">
  ) => void;

  removeToast: (
    id: string
  ) => void;

  clearToasts: () => void;

}