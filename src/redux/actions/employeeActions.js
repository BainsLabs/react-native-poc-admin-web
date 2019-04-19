import {
  allEmployeesApi,
  loginAdminApi,
  submitEmployeeApi
} from "../../services/services";
import * as employee from "../actiontypes/employeeTypes";

export const getAllEmployess = params => async dispatch => {
  const response = await allEmployeesApi(params);
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

export const submitEmployee = params => async dispatch => {
  const response = await submitEmployeeApi(params);
  dispatch({
    type: employee.SUBMIT_EMPLOYEE,
    payload: response.data
  });
  return response.data;
};
