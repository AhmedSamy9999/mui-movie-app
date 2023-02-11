import { Alert } from "@mui/material";
import React from "react";

const ErrorMsg = ({ error }) => {
  return (
    <Alert variant="filled" severity="error">
      {error}
    </Alert>
  );
};

export default ErrorMsg;
