import React from "react";
import { Paper, Typography } from "@mui/material";

const Header = () => {
  return (
    <Paper sx={{ height: "10vh" }}>
      <Typography
        variant="body1"
        fontWeight="600"
        fontSize="1.5rem"
        fontFamily="Clarity city"
        align="center"
        sx={{ pt: 2 }}
      >
        Weekday Frontend Assignment
      </Typography>
    </Paper>
  );
};

export default Header;
