import axios from "axios";
const service = axios.create({
  baseURL: "http://8f841665.ngrok.io"
});
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.resolve(error.response);
  }
);
export const allEmployeesApi = params => {
  return service.post("appadmin/allemployee", params);
};

export const loginAdminApi = params => {
  return service.post("appadmin/adminlogin", params, {
    headers: {
      "Content-type": "application/json"
    }
  });
};

export const submitEmployeeApi = params => {
  return service.post("employee/new_employee", params);
};
