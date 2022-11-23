import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const notify = () => toast("Added Successfully");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "2rem",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return (
          <Box
            key={product.id}
            sx={{
              cursor: "pointer",

              borderRadius: "0.3rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0rem 0.2rem 2rem 0rem;",
              marginTop: "2rem",
              width: "22rem",
              height: "22rem",
            }}
          >
            <Link
              key={product.id}
              to={`/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "1rem",
                }}
              >
                <img
                  src={`${product?.image}`}
                  width={250}
                  height={200}
                  alt="phone"
                  style={{ objectFit: "scale-down" }}
                />
              </Box>
            </Link>

            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                fontSize: "0.9rem",
                fontWeight: "600",
                color: "black",
              }}
            >
              {product?.title.slice(0, 10)}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.3rem",
              }}
            >
              <Box
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: "red",
                }}
              >
                {product?.price} USD{" "}
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.3rem",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(addToCart(product));
                    notify();
                  }}
                >
                  Add To Cart
                </Button>
              </Link>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Products;
