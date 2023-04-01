import React from 'react'
import { useSelector, useDispatch } from 'react-redux';  // useSelector is used to show the ui which is added through add() action
//Dispatch function is used to update the state of the Redux store by dispatching actions
import '../pages/carttstyle.css';
import Button from 'react-bootstrap/Button';
import { remove } from '../store/cartSlice';

function Cartt () {
   const addproducts = useSelector((state) => state.cart);
   
   const dispatch = useDispatch();  // using with remove() action 

   const handleRemove = (productId) => {
    dispatch(remove(productId));  // disptach send the action(remove) with payload(productId)
    };

  return (
    <>
    <div>Cart</div>
    <div className='productWrapper2'>
    {addproducts.map((product)=>(
        <div>
            <img src={product.image}/>
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <Button onClick={() => handleRemove(product.id)}>Remove</Button>
        </div>
    ))}
    </div> 
    </>
  )
}

export default Cartt;