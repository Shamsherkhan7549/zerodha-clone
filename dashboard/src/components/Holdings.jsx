import React, { useEffect, useState } from "react";
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {
    const [holdings, setHoldings]  = useState([]);
   
    // export const data = {
    //   labels,
    //   datasets: [
    //     {
    //       label: 'Dataset 1',
    //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //     },
    //     {
    //       label: 'Dataset 2',
    //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //     },
    //   ],
    // };

    useEffect(()=>{
      async function fetchData(){
        const url = import.meta.env.VITE_BACKEND_URL;
        const fetchData = await axios.get(url+'/allHoldings');

        if(fetchData.data.success){
          setHoldings(fetchData.data.allData)
        }else{
          console.log("Holdings not available")
        }
      }
      fetchData();
      
    }, []);

    const labels = holdings.map((subArray) => subArray["name"]);

      const data = {
        labels,
        datasets:[
          
          {
            label:"Stock Price",
            data: holdings.map((stock) => stock.price),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ]
      }


  return (
    <>
      <h3 className='title'>Holdings {holdings.length}</h3>

      <div className='order-table'>
        <table>
         <thead>
         <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>Cur.</th>
            <th>P&l</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
         </thead>
         <tbody>
         {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
         </tbody>
        </table>

        
      </div>
     <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
