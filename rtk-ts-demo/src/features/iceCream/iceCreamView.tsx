import { useState } from 'react'
import { orderIceCream, restocked } from './iceCreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const IceCreamView = () => {
    const numberOfIceCream = useAppSelector((state) => state.iceCream.numberOfIceCream);
    const [option, setOption] = useState<any>();
    const dispatch = useAppDispatch();
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