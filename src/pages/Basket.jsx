import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../components/BasketItem'

const Basket = () => {
  const state = useSelector((store) => store.basketReducer)
  return (
    <div className='row align-items-center p-4'>
    <div className='col-md-9 text-center mt-5 fs-2'>
     {/* Eğer ürün yoksa */}
     {state.basket.length === 0&&(<p>No product added yet</p>)}
     {/* Eğer ürün varsa */}
     {state.basket.map((basketProduct)=> (
       <BasketItem key={basketProduct.id} basketProduct={basketProduct}/>
     ))}
    </div>


    <div className='col-md-3'>
      <h5 className='mx-3'>Total: $ {state.total}</h5>
      <button className='btn btn-success mx-3'>Complete the shopping</button>
    </div>
   </div>
  )
}

export default Basket
