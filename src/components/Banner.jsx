import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../assets/images/shoe2.png";

function Banner() {
  return (
    <Box
      className="banner-container"
      sx={{
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "25rem",
        backgroundColor: "#feeaeb",
        borderRadius: "1rem",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Box
          sx={{
            marginRight: { xs: 0, md: 2 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontFamily: "monospace", mb: { xs: 2, md: 0 } }}
          >
            Shop the Latest Trends
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            sx={{ fontFamily: "monospace",}}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.,
          </Typography>
          <Button
            variant="contained"
            // color="#ed9637"
            sx={{
              mt: {
                xs: 2,
                md: 0,
                backgroundColor: "#ed9637",
                "&:hover": {
                  backgroundColor: "#ed9637", // Set the desired hover color
                },
                "&:active": {
                  boxShadow: "none", // Remove the active box-shadow
                },
                "&:focus": {
                  boxShadow: "none", // Remove the focus box-shadow
                },
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
        <img
          src={bannerImage}
          alt="Banner"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </Box>
  );
}

export default Banner;
