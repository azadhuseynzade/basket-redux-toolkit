import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";

const Basket = () => {
  const { cart } = useSelector((item) => item.user);
  console.log(cart);

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
      {/* <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          >
            <Box>
              {" "}
              <img
                src={
                  "https://kontakt.az/wp-content/uploads/2022/07/4__22_2_png.webp"
                }
                alt="addedProduct"
                width={250}
                height={250}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "25px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Iphone
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "22px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                Count: 1
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  fontSize: "15px",
                  color: "red",
                  fontWeight: "600",
                }}
              >
                Price: 1200 USD
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
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
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "left" },
                  marginTop: "20px",
                }}
              >
                <Button variant="contained">Remove </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "15px", md: "0px" } }}>
          <Typography
            sx={{
              fontSize: "30px",
              marginTop: "5px",
              fontWeight: "bold",
              color: "red",
            }}
          >
            Total:3500 USD 💰
          </Typography>
        </Box>
      </Box> */}
      {cart?.map((item) => {
        return <h1 key={item.id}>{item?.title}</h1>;
      })}
    </Box>
  );
};

export default Basket;
