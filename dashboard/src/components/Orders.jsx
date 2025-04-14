import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fecthData = async() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const response = await axios.get(url+'/allOrders');

    if(response.data.success){
      setAllOrders(response.data.data);
    }

  }

  useEffect(()=>{
    fecthData();
  },[]);

  return (

    <>
    <h3 className='title'>Position {allOrders.length}</h3>
    <div className='order-table'>
      <table>
       <thead>
         <tr>
          <th>Product</th>
       
          <th>Qty.</th>
          
          <th>Price</th>
  
     
        </tr>
       </thead>
       <tbody>
        {allOrders.map((stock, index) => {
          return (
            
            <tr key={index}>
              
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price.toFixed(2)}</td>
            </tr>
            
          );
        })}
        </tbody>
      </table>
    </div>
  </>
   
  );
};

export default Orders;



{/* 
  
   <div className="orders">
  <div className="no-orders">
<p>You haven't placed any orders today</p>

<Link to={"/"} className="btn">
  Get started
</Link>
</div>
</div> */}
