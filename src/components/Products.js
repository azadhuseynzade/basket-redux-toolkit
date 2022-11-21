import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
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
        paddingTop: "30px",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return (
          <Link
            key={product.id}
            to={`/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                cursor: "pointer",

                borderRadius: "5px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                marginTop: "30px",
                width: "350px",
                height: "350px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
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
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "black",
                }}
              >
                {product?.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "red",
                  }}
                >
                  {product?.price} USD <Button>Add To Cart</Button>
                </Typography>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default Products;
