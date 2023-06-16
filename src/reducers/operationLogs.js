import React from "react";
import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions";

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operateAt: action.operateAt,
      };
      return [operationLog, ...state];
    case DELETE_ALL_OPERATION_LOGS:
      return [];

    default:
      break;
  }
};

export default operationLogs;
