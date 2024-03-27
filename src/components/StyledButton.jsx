import React from "react";

import { Button, Typography } from "@mui/material";

function StyledButton({ BackgroundColor, image, value, onClick, background }) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          width: "20rem",
          height: "6rem",
          marginTop: "3rem",
          backgroundColor: BackgroundColor,
          background,

          "&:hover": {
            backgroundColor: BackgroundColor,
          },
          "&:active": {
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "none",
          },
          borderRadius: "1rem",
        }}
        onClick={onClick}
      >
        <Typography variant="body1">{value}</Typography>
        <img
          src={image}
          alt="my"
          style={{ borderRadius: "50%", width: "50px" }}
        />
      </Button>
    </>
  );
}

export default StyledButton;
