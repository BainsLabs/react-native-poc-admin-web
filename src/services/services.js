import axios from "axios";
const service = axios.create({
  baseURL: "http://08e62cd9.ngrok.io/"
});

export const allEmployeesApi = () => {
  return service.post("appadmin/allemployee");
};

export const loginAdminApi = params => {
  return service.post(`appadmin/adminlogin`, params);
};
