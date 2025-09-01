import React, { useEffect, useState } from 'react';
import Book from './book/Book';

const Books = () => {
const [books,setbooks]=useState([]);
useEffect(()=>{

fetch('../../../src/books.json')
.then(res=>res.json())
.then(data=>setbooks(data))




},[])

    return (
        <div>
            <h1 className='text-4xl font-bold capitalize text-center'>books</h1>
            <div className='w-11/12  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    books.map(book=><Book key={book.id} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;