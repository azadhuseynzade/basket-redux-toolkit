import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductsDetail = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log(product, "forCount");
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
            sx={{ paddingTop: "20px", paddingLeft: { xs: "0px", md: "40px" } }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: "18px",
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
                fontSize: "20px",
                color: "red",
                fontWeight: "600",
              }}
            >
              {product?.price} USD
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: { xs: "center", md: "left" },
                fontSize: "14px",
                color: "gray",
                maxWidth: "500px",
              }}
            >
              {product?.description}
              USD
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left" },
                marginTop: "10px",
              }}
            >
              <Button
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                onClick={() => dispatch(incrementQuantity(product.id))}
              >
                +
              </Button>
              <Typography sx={{ fontSize: "20px", marginTop: "7px" }}>
                0
              </Typography>
              <Button
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                onClick={() => dispatch(decrementQuantity(product.id))}
              >
                -
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left", marginTop: "15px" },
              }}
            >
              <Button
                variant="contained"
                onClick={() => dispatch(addToCart(product))}
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
