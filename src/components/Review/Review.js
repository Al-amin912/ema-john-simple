import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cards from '../Cards/Cards';
import RewiewItem from '../ReviewItem/RewiewItem';


const Review = () => {
    const [cart,setCart]=useState([]);
    const removeProduct = (productKey)=>{
      
        const newCart = cart.filter(pd=>pd.key!==productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
      const savedCart =getDatabaseCart();
      const productkeys = Object.keys(savedCart);
      const cartProduct =productkeys.map(key=> {
        const product = fakeData.find(pd=>pd.key===key);
        product.quantity=savedCart[key];
        return product;
      });
      setCart(cartProduct);

      
    },[])
    
    return (
        <div className='shop-container'>
         
        <div className='product-container'>
        {
            cart.map(pd =><RewiewItem  key={pd.key} removeProduct={removeProduct} product ={pd}></RewiewItem>)
         } 
         
        </div>
        <div className="card-container">
              
           
              <Cards card={cart}>
                <button className='product-button'>place order</button>
              </Cards>
        </div>
      
        </div>
    );
};

export default Review;