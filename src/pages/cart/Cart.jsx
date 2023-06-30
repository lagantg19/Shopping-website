import React from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from './cart-item';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  const Navigate=useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px', justifyContent: 'center' }}>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <div key={product.id}><CartItem data={product} /></div>;
          }
          return null;
        })}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h1>Total amount = RS {totalAmount}</h1>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }} onClick={()=>Navigate("/")}>Shop again</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
