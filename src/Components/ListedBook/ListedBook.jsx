import React, { useEffect, useState } from 'react';
import { getreaditems } from '../utilty/UseStore';
import { useLoaderData } from 'react-router-dom';
import { getwishitem } from '../utilty/Wishlist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Books/book/Book'

const ListedBook = () => {
const loader=useLoaderData();
const [readboi,setbook]=useState([]);
const [wishbook,setwishbook]=useState([]);
useEffect(()=>{
const readbooks=getreaditems();
const Wishlist=getwishitem();
console.log(readbooks);
console.log(loader)
// const readbooksarray=readbooks.map(id=>loader.find(books=>id==books.id))
const readboookdata=loader.filter(books=>readbooks.includes(books.id))
// console.log(readboookdata)
setbook(readboookdata);
const wishlistbooks=loader.filter(books=>Wishlist.includes(books.id))
setwishbook(wishlistbooks)

},[])

    return (
        <div>
            <h1>hello readlist {readboi.length}</h1>
           
<h2>{wishbook.length}</h2>

<Tabs>
    <TabList>
      <Tab>Read</Tab>
      <Tab>WishList</Tab>
    </TabList>

    <TabPanel className=' mx-auto bg-amber-50'>
     <div className='grid grid-cols-2  w-8/12 mx-auto gap-5'>
         {
                readboi.map((books,idx)=><Book key={idx} book={books}></Book>)
            }
     </div>
    </TabPanel>
    <TabPanel>
      <div>
        {
          wishbook.map((books,idx)=><Book key={idx} book={books}></Book>)  
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;