import React from 'react';
import './Products.css'



// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
        
    
    return (
        <div className="product">
          <div className='img'>
               <img src={props.product.img} alt="" /> 
          </div>
          <div>
            
               <h4 className='product-name'>{props.product.name}</h4>
               <h5>by:{props.product.seller}</h5>
               <p>${props.product.price}</p>
               <p>only {props.product.stock}left in stock-order <br />soon</p>
               <button className='product-button'
               onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to card</button>

          </div>
        </div>
    );
};

export default Products;