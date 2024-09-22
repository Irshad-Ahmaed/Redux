import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { orderIceCream, restocked } from './iceCreamSlice';

const IceCreamView = () => {
    const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
    const [option, setOption] = useState();
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number Of iceCream: {numberOfIceCream} </h1>
        <button onClick={()=> dispatch(orderIceCream())}>Order iceCream</button>
        <input placeholder='want to restock iceCream' type='number' value={option} onChange={(e)=> setOption(parseInt(e.target.value))} />
        <button style={{marginLeft:"5px"}} onClick={()=> dispatch(restocked(option))}>Restocked iceCream</button>
    </div>
  )
}

export default IceCreamView