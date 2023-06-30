import React from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

const Product = ({ id, productName, productImage, productPrice }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "250px",
        height: "300px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={productImage}
        alt="Product"
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "16px", fontWeight: "bold", margin: "5px 0" }}>
          {productName}
        </p>
        <p style={{ fontSize: "14px", color: "#888", margin: "5px 0" }}>
          RS {productPrice}
        </p>
        <button className="butt" onClick={() => addToCart(id)}>
          Add to Cart {cartItems[id] > 0 && cartItems[id]}
        </button>
      </div>
      
    </div>
  );
};

export default Product;
