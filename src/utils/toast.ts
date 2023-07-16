import toast, { ToastOptions } from "react-hot-toast";

export enum TOAST_TYPES {
  "LOADING" = "loading",
  "ERROR" = "error",
  "SUCCESS" = "success"
}

export function showToast(
  type: TOAST_TYPES,
  message: string,
  options?: ToastOptions
): string {
  const toastOptions: ToastOptions = {
    duration: 1500,
    position: "top-right",
    ...options,
  };

  switch (type) {
    case TOAST_TYPES.LOADING: {
      return toast.loading(message, toastOptions);
    }

    case TOAST_TYPES.SUCCESS: {
      return toast.success(message, toastOptions);
    }

    case TOAST_TYPES.ERROR: {
      return toast.error(message, toastOptions);
    }

    default:
      return toast.success(message, toastOptions);
  }
}
