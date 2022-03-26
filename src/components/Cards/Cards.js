import React from 'react';

const Cards = (props) => {
    const card = props.card;
    
     //const total = card.reduce((total,prd)=>total+prd.price,0)
     let total = 0;
     for(let i=0;i<card.length;i++){
         const product  = card[i];
         total= total+product.price;
     }
     let shipping = 0;
     if(total>35){
         shipping =0;

     }
     else if (total>15){
         shipping = 4.99;
     }
     else if (total>0){
         shipping = 12.99
     }
     const tax = (total/ 10).toFixed(2);
     const grandTotal = (total + shipping + Number(tax)).toFixed(2);
     const formatNumber = num =>{
         const precision = num.toFixed(2);
         return Number(precision);
     }
    return (
        <div>
            <h5>Order summary</h5>
            <p>Item Ordered:{card.length}</p>
            <p>product price:{formatNumber(total)}</p>
            <p>shipping cost:{shipping}</p>
            <p>Tax + Vat :{tax}</p>
            <p>Total price:{grandTotal}</p>

        </div>
    );
};

export default Cards;