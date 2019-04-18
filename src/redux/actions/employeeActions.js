import { allEmployeesApi, loginAdminApi } from "../../services/services";
import * as employee from "../actiontypes/employeeTypes";

export const getAllEmployess = () => async dispatch => {
  const response = await allEmployeesApi();
  dispatch({
    type: employee.GET_ALL_EMPLOYEES,
    payload: response.data
  });
};

export const loginAdmin = params => async dispatch => {
  const response = await loginAdminApi(params);
  dispatch({
    type: employee.LOGIN_ADMIN,
    payload: response.data
  });
  return response.data;
};
