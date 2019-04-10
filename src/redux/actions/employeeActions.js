import { allEmployees } from "../../services/services";
import * as employee from "../actiontypes/employeeTypes";

export const getAllEmployess = () => async dispatch => {
  const response = await allEmployees();
  dispatch({
    type: employee.GET_ALL_EMPLOYEES,
    payload: response.data
  });
};
