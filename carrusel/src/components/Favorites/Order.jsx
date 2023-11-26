import { useDispatch } from "react-redux";
import { orderFav } from "../../Redux/actions";
import {useState}from 'react';


const Order = () => {
 const dispatch =useDispatch();
    const [aux, setAux]= useState(false);

    const handleOrder = (event) => {
        dispatch(orderFav(event.target.value))
        setAux(!aux)
    }
  return (
    <div>
      <select onChange={handleOrder}>
      <option value="All">ORDENAR POR ALFB.</option>
        <option value="Ascendente">ASCENDENTE</option>
        <option value="Descendente">DESCENDENTE</option>
      </select>
    </div>
  );
};

export default Order;
