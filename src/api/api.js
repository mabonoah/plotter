import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://plotter-task.herokuapp.com/",
});

export async function getAll(pathName, successHandler) {
  api
    .get(pathName)
    .then(function (response) {
      // handle success
      successHandler(response.data);
    })
    .catch(function (error) {
      // handle error
      errorHandler(error);
    });
}

export async function update(pathName, data, successHandler) {
  api
    .put(pathName, data)
    .then(function (response) {
      // handle success
      successHandler(response.data);
    })
    .catch(function (error) {
      // handle error
      errorHandler(error);
    });
}

function errorHandler(error) {
  const errorMessage = error.message;
  toast.error(`${errorMessage}!`, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
}
