import axios from "axios";
import { errorToast } from "../utils/toast";

const api = axios.create({
  baseURL: "https://plotter-task.herokuapp.com/",
});

export async function getAll(pathName, successHandler, setLoading) {
  setLoading(true);
  api
    .get(pathName)
    .then(function (response) {
      // handle success
      successHandler(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      // handle error
      setLoading(false);
      errorHandler(error);
    });
}

export async function post(pathName, data, successHandler, setLoading) {
  setLoading(true);
  api
    .post(pathName, data, { "Content-Type": "application/json" })
    .then(function (response) {
      // handle success
      successHandler(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      // handle error
      setLoading(false);
      errorHandler(error);
    });
}

function errorHandler(error) {
  const errorMessage = error.message;
  errorToast(`${errorMessage}!`);
}
