import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { DeleteOutline, Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteCartItem, increment } from "../store/slicers/cartSlicer";
const CartListing = () => {
  const cartItems = useSelector(
    (state) => state.reducer.cartSlicer.cart
  );

  const dispatch=useDispatch()

//  calculate the total price of all items in the cart

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.total;
    });
    return totalPrice;
  };


  return (
    <Container maxWidth="md" sx={{minHeight:'28rem' ,marginTop:"2rem"}}>
      <Typography variant="h4" component="h1" gutterBottom>
        Cart Listing
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" align="center">
          Cart is empty.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img src={item.image} alt={item.name} height="80" />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align="center">${item.price}</TableCell>
                <TableCell align="center">
                  {(item.count>1)&&
                    <IconButton
                    color="primary"
                    onClick={() => dispatch(decrement(item.id))}
                  >
                    <Remove />
                  </IconButton>
                  }
                 
                  {item.count}
                  <IconButton
                    color="primary"
                    onClick={() => dispatch(increment(item.id))}
                  >
                    <Add />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  ${item.total}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    onClick={() => dispatch(deleteCartItem(item.id))}
                  >
                    <DeleteOutline />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
      <Typography variant="h5" component="h2" align="right" gutterBottom>
        Total Amount: ${getTotalPrice()}
      </Typography>
    </Container>
  );
};

export default CartListing;
