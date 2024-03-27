import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (path) => {
    navigate(path);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const cartItems = useSelector((state) => state.reducer.cartSlicer.cart);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", borderRadius: "1rem" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "Black",
                textDecoration: "none",
              }}
            >
              E-cart
            </Typography>

            {/* Mobile Navigation Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="Black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* Mobile Navigation Menu Items */}
                {pages.map((page) => (
                  <MenuItem
                    key={page.label}
                    onClick={() => handlePageClick(page.path)}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo (Mobile) */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "Black",
                textDecoration: "none",
              }}
            >
              E-cart
            </Typography>

            {/* Desktop Navigation Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={() => handlePageClick(page.path)}
                  sx={{ my: 2, color: "Black", display: "block" }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* Cart Button */}
              <Badge badgeContent={cartItems.length} color="primary">
                <IconButton sx={{ p: 0 }} onClick={handleCartClick}>
                  <ShoppingCartIcon />
                </IconButton>
              </Badge>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavBar;
