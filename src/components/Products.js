import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import '../components/productstyle.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';   // This is a action which going to call with dispatch and later on it calls the reducer.

// STEP-5
// Now we can use the React-Redux hooks to let React components interact with the Redux store. 
// We can read data from the store with useSelector, and dispatch actions using useDispatch

function Products () {
    let [products, setProducts]= useState([]);
    
    useEffect(()=> {
        const fetchProducts = async () => {
            let res= await fetch('https://fakestoreapi.com/products');
            let data= await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts(); 
    }, []);

    let dispatch = useDispatch();  // this will be call in handleAdd function which calls with action.

// Now we are sending data in store 
// we diapatch action from our app and send data through this and then action calls the reducer.
// add and remove are 2 actions which calls the reducers. 
// reducer is presented in cartSlice.js file reducers: add and remove.

    function handleAdd (product){
        dispatch(add(product));    // disptach send the action(add) with payload(product) 
    };

    return (
        <>
        <div>Products</div>
        <div className='productWrapper'>
        {
        products.map((product)=>(
            <div className='card' key={product.id}>
                <img src={product.image}/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <Button onClick={()=> handleAdd(product)}>Add to cart</Button>
            </div>
        ))
            
        }
        </div>
        </>
    
  )
}

export default Products