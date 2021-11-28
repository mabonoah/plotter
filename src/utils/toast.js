import { toast } from "react-toastify";

export const successToast = (message, position = toast.POSITION.TOP_RIGHT) => {
  toast.success(message, {
    position: position,
  });
};

export const warnToast = (message, position = toast.POSITION.TOP_CENTER) => {
  toast.warn(message, {
    position: position,
  });
};

export const errorToast = (
  message,
  position = toast.POSITION.BOTTOM_CENTER
) => {
  toast.error(message, {
    position: position,
  });
};
