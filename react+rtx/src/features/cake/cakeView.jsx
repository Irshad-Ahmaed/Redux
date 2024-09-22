import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orderCake, restocked } from './cakeSlice';

const CakeView = () => {
    const [option, setOption] = useState();
    const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number Of Cakes: {numberOfCakes} </h1>
        <h3>Number of Cakes you want to order: </h3>
        <button onClick={()=> dispatch(orderCake())}>Order cake</button>
        <input placeholder='want to restock cakes' type='number' value={option} onChange={(e)=> setOption(parseInt(e.target.value))}/>
        <button style={{marginLeft:"5px"}} onClick={()=> dispatch(restocked(option))}>Restocked cakes</button>
    </div>
  )
}

export default CakeView