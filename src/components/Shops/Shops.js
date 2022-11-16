import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cards from '../Cards/Cards';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import './Shops.css' 



const Shops = () => {
    
    const first10=fakeData.slice(0,10);
    const [products, setproducts] = useState(first10);
    const [card,setCard] = useState([]);
    useEffect(() => {
      
    const savedCard= getDatabaseCart();
    const productkeys= Object.keys(savedCard);
    const previousCard= productkeys.map(existingkey =>{
        const product = fakeData.find(pd=>pd.key===existingkey);
        product.quantity=savedCard[existingkey];
        return product ;

    })
    setCard(previousCard)
      
    }, [])
    
    const handleAddProduct = (product)=>{
              const toBeAddedKey=product.key;
             const sameProduct=card.find(pd=>pd.key=== product.key);
             let count = 1;
             let newCard;
             if(sameProduct){
                const count = sameProduct.quantity+1;
                sameProduct.quantity=sameProduct.quantity+1;
                const others = card.filter(pd=>pd.key!==toBeAddedKey)
                newCard=[...others,sameProduct]
             }
             else{
                product.quantity= 1;
                newCard=[...card,product];
             }
            
           
             setCard(newCard);
             
             addToDatabaseCart(product.key, count)

             
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                
            {
            products.map(pd => <Products 
                key={pd.key} showAddToCart ={true}  product={pd} 
                                        
                                        handleAddProduct={handleAddProduct}>

                                        </Products>)

            }

            

            </div>

            
            <div className="card-container">
              
           
           <Cards card={card}>
           <Link to = '/review'><button            className='product-button'>Review Order</button>
           </Link>
           </Cards>
            </div>

        </div>

    );
};

export default Shops;