import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const Basket = () => {
  const { cart } = useSelector((item) => item.user);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "red",
          paddingTop: "20px",
        }}
      >
        Total Amount: {total} USD 💰
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
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
                {item?.price} USD
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
                  0
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
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
