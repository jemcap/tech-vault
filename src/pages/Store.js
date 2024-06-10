import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { productsArr } from "../context/productStore";
import ProductCard from "../components/ProductCard";
import FilterButtons from "../components/FilterButtons";
const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const products = productsArr;
  const productCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <FilterButtons
        categories={productCategories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <h3 align="center" className="p-3">
        {selectedCategory === "All" ? "All" : selectedCategory}
      </h3>
      <Row xs={1} md={3} className="g-4">
        {filteredProducts.map((product, index) => (
          <Col align="center" key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
