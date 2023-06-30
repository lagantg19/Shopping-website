import React from "react";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const CartItem = (props) => {
  const { id, productName, productImage, productPrice } = props.data;
  const { cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);
  let cartAmount=cartItems[id];

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '200px',
      height: '250px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
    }}>
      <img
        src={productImage}
        alt="-"
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <div>
        <p>{productName}</p>
        <p>{productPrice}</p>
      </div>
      <div>
        <button style={{ padding: '5px 10px', fontSize: '14px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}  onClick={()=>removeFromCart(id)}>-</button>
        <input value={cartAmount} style={{ width: '40px', textAlign: 'center' }} onChange={(e)=>{
            updateCartItemCount(e.target.value,id);
        }}/>
        <button style={{ padding: '5px 10px', fontSize: '14px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={()=>addToCart(id)}>+</button>
      </div>
    </div>
  );
};
