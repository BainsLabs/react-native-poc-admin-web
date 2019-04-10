import * as employee from "../actiontypes/employeeTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case employee.GET_ALL_EMPLOYEES:
      return { ...action.payload };
    default:
      return state;
  }
};
