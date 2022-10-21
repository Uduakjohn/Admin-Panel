import React from 'react'
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const UserData = [
    {
      name: 'Jan',
      ActiveUser: 4000,
      
    },
    {
        name: 'Feb',
        ActiveUser: 3000,
        
      },
      {
        name: 'Mar',
        ActiveUser: 5000,
        
      },
      {
        name: 'Apr',
        ActiveUser: 8000,
        
      },
      {
        name: 'May',
        ActiveUser: 7000,
        
      },
      {
        name: 'June',
        ActiveUser: 6000,
        
      },
      {
        name: 'Jul',
        ActiveUser: 4000,
        
      },
      {
        name: 'Aug',
        ActiveUser: 8000,
        
      },
      {
        name: 'Sept',
        ActiveUser: 4000,
        
      },
      {
        name: 'Oct',
        ActiveUser: 5000,
        
      },
      {
        name: 'Nov',
        ActiveUser: 9000,
        
      },
      {
        name: 'Dec',
        ActiveUser: 10000,
        
      },
   
  ];
  

function Chart({title, data, dataKey, grid}) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd"/>
            <Line type= "monotone" dataKey="ActiveUser" stroke='#5550bd'/>
            <Tooltip/>
           {grid && <CartesianGrid stroke='gray' strokeDasharray="5 5"/>}
            <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
