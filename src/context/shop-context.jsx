import { createContext } from "react";
import { useState } from "react";
export const ShopContext=createContext(null);
import { PRODUCTS } from "../Products";


const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    
   return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    
    

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))


    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
         
          if(cartItems[item]>0){
            let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
            totalAmount+=cartItems[item]*itemInfo.productPrice
            
          }
        }
        
        return totalAmount
      }
    const contextValue={cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>



}
export default ShopContextProvider;