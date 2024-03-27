import React, { useState } from "react";
import Banner from "../components/Banner";
import { Box, Typography } from "@mui/material";
import StyledButton from "../components/StyledButton";
import ProductCard from "../components/ProductCard";
import { productListing } from "../assets/data/ProdectListing";
import shoesImage from "../assets/images/SHOE1.png";
import bagImage from "../assets/images/bag3png.png";
import watchImage from "../assets/images/watch1.png";

function Landing() {
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productListing);
 // Handle category change
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory) {
       // Filter products based on the selected category
      const filteredData = productListing.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(productListing);
    }
  };

  let headline = "Products";
  if (category) {
    headline = category;
  }
  return (
    <div className="container">
      <Banner />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          overflowX: "auto",
        }}
      >
         {/* Button for selecting "watch" category */}
        <StyledButton
          value="Watch"
          BackgroundColor="rgb(237,150,55);"
          background="linear-gradient(90deg, rgba(237,150,55,1) 13%, rgba(228,213,34,1) 40%, rgba(228,199,29,1) 63%);"
          image={watchImage}
          onClick={() => handleCategoryChange("Watch")}
        />
         {/* Button for selecting "BackPack" category */}
        <StyledButton
          value="Back Pack"
          BackgroundColor="rgb(255,40,127)"
          background=" linear-gradient(90deg, rgba(255,40,127,1) 23%, rgba(255,40,185,1) 46%)"
          image={bagImage}
          onClick={() => handleCategoryChange("BackPack")}
        />
         {/* Button for selecting "Shoes" category */}
        <StyledButton
          value="Shoes"
          BackgroundColor="rgb(57,123,228);"
          background="linear-gradient(90deg, rgba(57,123,228,1) 35%, rgba(55,224,237,1) 70%)"
          image={shoesImage}
          onClick={() => handleCategoryChange("Shoes")}
        />
      </Box>
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        {headline}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3rem",
          marginTop: "1rem",
          "@media (max-width: 912px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}
      >
         {/* Render ProductCard for each filtered product */}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </Box>
    </div>
  );
}

export default Landing;
