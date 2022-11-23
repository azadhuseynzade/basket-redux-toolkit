import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { formatter } from "../utils";

const ProductsDetail = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const notify = () => toast("Added Successfully");

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const decrementCount = () => {
    if (count === 1) {
      return;
    }
    setCount((prevState) => prevState - 1);
  };

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {product && (
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {
              <img
                src={`${product?.image}`}
                width={250}
                height={250}
                alt="phone"
              />
            }
          </Box>
          <Box
            sx={{
              paddingTop: "1.2rem",
              paddingLeft: { xs: "0", md: "2.5rem" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "black",
              }}
            >
              {product?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: "1.2rem",
                color: "red",
                fontWeight: "600",
              }}
            >
              {formatter.format(product?.price)}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: "0.9rem",
                color: "gray",
                maxWidth: "31.25rem",
              }}
            >
              {product?.description}
              USD
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left" },
                marginTop: "0.8rem",
              }}
            >
              <Button
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                onClick={() => {
                  dispatch(incrementQuantity(product.id));
                  incrementCount();
                }}
              >
                +
              </Button>
              <Typography sx={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
                {count}
              </Typography>
              <Button
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
                onClick={() => {
                  dispatch(decrementQuantity(product.id));
                  decrementCount();
                }}
              >
                -
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left", marginTop: "1rem" },
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(addToCart(product));
                  notify();
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductsDetail;
