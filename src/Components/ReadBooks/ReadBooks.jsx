import React, { useEffect, useState } from 'react';

import {ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import '../ReadBooks/Readbooks.css'
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width /3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width /2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



const ReadBooks = () => {
const [data,setdata]=useState([])
useEffect(()=>{



fetch('../../../src/books.json')
.then(res=>res.json())
.then(data=>setdata(data))




},[])
const {title,totalPages}=data;
console.log(data);
    return (
        <div>
           
{/* @media(width>=) */ }
       <div className={`w-8/12 lg:w-11/12  mx-auto flex items-center justify-center mb-5  min-h-screen`}>
  <ResponsiveContainer className={`w-full`} height={500}>

                <BarChart
    //   width={""}
    //   height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} >
        {data.splice(0,3).map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[[index % 10]]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
       </div>
        </div>
    );
};

export default ReadBooks;