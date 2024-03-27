import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#feeaeb",
        color: "black",
        padding: "2rem 0",
        marginTop:"1rem"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Subscribe to Our Newsletter</Typography>
          <Typography variant="body2">
            Get updates and special offers directly to your inbox.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
            />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Box>
          <Typography variant="body2">
            © {new Date().getFullYear()} E-cart. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
