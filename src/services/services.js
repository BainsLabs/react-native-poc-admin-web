import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:8000/"
});

export const allEmployees = () => {
  return service.get("appadmin/allemployee");
};
