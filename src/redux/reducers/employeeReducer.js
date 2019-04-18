import * as employee from "../actiontypes/employeeTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case employee.GET_ALL_EMPLOYEES:
      return { ...payload };
    case employee.LOGIN_ADMIN:
      return { ...state, ...payload };
    default:
      return state;
  }
};
