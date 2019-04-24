import { useEffect } from "react";
export const componentWillMount = (callback, data, action, params = {}) => {
  useEffect(() => {
    const value = callback();
    params = value;
    action(params);
  }, data);
};
