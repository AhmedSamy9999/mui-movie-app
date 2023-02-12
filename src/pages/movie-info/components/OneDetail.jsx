import { Box, Typography } from "@mui/material";
import React from "react";

const OneDetail = ({ title, content }) => {
  return (
    <Box my={3}>
      <Typography variant="body1" component="p" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="body1" fontWeight="bold" ml={3} component="h6">
        {content}
      </Typography>
    </Box>
  );
};

export default OneDetail;
