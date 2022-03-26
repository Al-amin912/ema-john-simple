import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cards from '../Cards/Cards';
import Products from '../Products/Products';

import './Shops.css' 



const Shops = () => {
    
    const first10=fakeData.slice(0,10);
    const [products, setproducts] = useState(first10);
    const [card,setCard] = useState([]);
    const handleAddProduct = (product)=>{
       
             console.log(product)
             const newCard = [...card,product];
             setCard(newCard);

             
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                
            {
            products.map(pd => <Products product={pd} 
                                        handleAddProduct={handleAddProduct}>

                                        </Products>)

            }

            

            </div>

            
            <div className="card-container">
              
           
           <Cards card={card}></Cards>
            </div>

        </div>

    );
};

export default Shops;