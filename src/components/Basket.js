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
          fontSize: "30px",
          fontWeight: "bold",
          color: "red",
          paddingTop: "20px",
        }}
      >
        Total Amount: {getTotal().totalPrice.toFixed(2)} USD 💰
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "black",
          paddingTop: "20px",
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
                maxWidth: "300px",
                borderRadius: "5px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                padding: "10px ",
                marginTop: "30px",
                marginLeft: { xs: "0px", md: "20px" },
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
                  fontSize: "16px",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  fontSize: "22px",
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
                  fontSize: "22px",
                  color: "black",
                }}
              >
                Count :{item.quantity}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  color: "gray",
                }}
              >
                {item?.description.substring(0, 100)}...
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </Button>
                <Typography
                  sx={{
                    fontSize: "30px",
                    marginTop: "5px",
                    padding: "0px 10px",
                  }}
                >
                  {item.quantity}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
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
