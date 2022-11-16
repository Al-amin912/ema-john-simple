import React from 'react';
import './Products.css'



// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { /*faCoffee,*/faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
Link
  
} from "react-router-dom";

const Products = (props) => {
        
    
    return (
        <div className="product">
          <div className='img'>
               <img src={props.product.img} alt="" /> 
          </div>
          <div>
            
               <h4 className='product-name'> <Link to={"/product/"+props.product.key}>{props.product.name}</Link></h4>
               <h5>by:{props.product.seller}</h5>
               <p>${props.product.price}</p>
               <p>only {props.product.stock}left in stock-order <br />soon</p>
              {props.showAddToCart && <button className='product-button'
               onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to card</button>}

          </div>
        </div>
    );
};

export default Products;