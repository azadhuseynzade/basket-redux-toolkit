import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";

const Basket = () => {
  const { cart } = useSelector((item) => item.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "red",
          paddingTop: "1.2rem",
        }}
      >
        Total Amount: {getTotal().totalPrice.toFixed(2)} USD 💰
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "black",
          paddingTop: "1.2rem",
        }}
      >
        Total Products Count:
        {getTotal().totalQuantity || 0}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {cart.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                maxWidth: "18.75rem",
                borderRadius: "0.3rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0rem 0.5rem 2rem 0rem;",
                padding: "0.7rem ",
                marginTop: "2rem",
                marginLeft: { xs: "0rem", md: "1.2rem" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={`${item.image}`}
                  alt="product"
                  width={100}
                  height={100}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                {item?.title.slice(0, 10)}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: "red",
                  fontWeight: "600",
                }}
              >
                {item?.price * item.quantity} USD
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: "black",
                }}
              >
                Count :{item.quantity}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "gray",
                }}
              >
                {item?.description.substring(0, 80)}...
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "0.7rem",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </Button>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    marginTop: "0.3rem",
                    padding: "0rem 0.7rem",
                  }}
                >
                  {item.quantity}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Basket;
