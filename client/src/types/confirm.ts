export interface ConfirmOptions {

  title: string;

  message: string;

  confirmText?: string;

  cancelText?: string;

  danger?: boolean;

  onConfirm: () => void;

}

export interface ConfirmState {

  open: boolean;

  options?: ConfirmOptions;

  showConfirm: (

    options: ConfirmOptions

  ) => void;

  hideConfirm: () => void;

}