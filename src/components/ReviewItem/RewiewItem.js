import React from 'react'
import './ReviewItem.css'

export default function RewiewItem(props) {
  const {name,quantity,key}=props.product;
  return (
    <div className='review-item'>
     <h4 className='product-name'>{name}</h4>
     <p>Quantiry:{quantity}</p>
     <button onClick={()=>props.removeProduct(key)} className='product-button'>remove</button>
    </div>
  )
}
