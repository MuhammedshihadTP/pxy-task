
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSelected } from "../store/slicers/cartSlicer";
import { useNavigate } from "react-router-dom";
import {
Card,
CardActions,
CardContent,
CardMedia,
Button,
Typography,
} from "@mui/material";
import "../styles/product.css";

function ProductCard({ data }) {
  const cartItems = useSelector((state) => state.reducer.cartSlicer.cart);
  const dispatch = useDispatch();
  
// Check if the product is already in the cart
  const isfind = cartItems.find((item) => item.id === data.id);
  const navigate = useNavigate();
  const handleNavigate= () => {
    navigate("/cart"); 
  };

  return (
    <Card className="card">
      <CardMedia
        component="img"
        className="card-image"
        image={data.image}
        title="Product Image"
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.des}
        </Typography>
        <Typography variant="h6" color="black" className="price">
          ${data.price}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        {isfind ? (
          <Button size="small" onClick={() => handleNavigate()}>Go To cart</Button>
        ) : (
          <Button size="small" onClick={() => dispatch(handleSelected(data))}>
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProductCard;
