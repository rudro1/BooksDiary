import React, { createContext, useEffect, useRef, useState } from 'react';
import { getreaditems } from '../utilty/UseStore';
import { useLoaderData } from 'react-router-dom';
import { getwishitem } from '../utilty/Wishlist';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { GoChevronDown } from "react-icons/go";
import Book from '../Books/book/Book'

export const Transferstate=createContext();
const ListedBook = () => {
  const loader = useLoaderData();
  const [readboi, setbook] = useState([]);
  const [wishbook, setwishbook] = useState([]);


    const [tab,settab]=useState(true);
  // const [sortingbook,setboookss]=useState(null);
  useEffect(() => {
    const readbooks = getreaditems();
    const Wishlist = getwishitem();
    console.log(readbooks);
    console.log(loader)
    // const readbooksarray=readbooks.map(id=>loader.find(books=>id==books.id))
    const readboookdata = loader.filter(books => readbooks.includes(books.id))
    // console.log(readboookdata)
    setbook(readboookdata);
    const wishlistbooks = loader.filter(books => Wishlist.includes(books.id))
    setwishbook(wishlistbooks)


  }, [])
 
  const sorting = (name) => {
    // console.log(ref.current)
    let newboook = [...readboi]

    if(name==="Rating")
    {
console.log(name)
       
      newboook = newboook.sort((a, b) => {
       
 
      a = (a.rating)
      b = (b.rating)
      return a - b

    })
  }

  else if(name==="Number of pages")
  {

newboook=newboook.sort((a,b)=>{
a=parseInt(a.totalPages)
b=parseInt(b.totalPages)
return a-b;

})

  }
  else if(name==="Publisher year")
  {
newboook=newboook.sort((a,b)=>{
// console.log(typeof a.yearOfPublishing)
a=parseInt(a.yearOfPublishing)
b=parseInt(b.yearOfPublishing)
return a-b

})
  }


    //     setbook(readboisort((a,b)=>{
    // a=(a.rating)
    // b=(b.rating)
    // return  a-b)

    setbook(newboook)

  }


  return (
    <div className='mb-5'>
    
      <h1 className='text-4xl font-bold capitalize text-center bg-[#F3F3F3] mb-5 py-5'>books</h1>
     
      <div className='flex justify-center'>
        <div className="dropdown dropdown-bottom dropdown-center ">
          <div tabIndex={0} role="button" className="btn px-3 py-5   rounded-lg bg-[#23BE0A] font-semibold text-white text-lg flex items-center">Sort By <GoChevronDown className='font-extrabold text-lg'></GoChevronDown></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => sorting("Rating")}><a>Rating</a></li>
            <li onClick={() => sorting("Number of pages")}><a>Number of pages</a></li>
            <li onClick={() => sorting("Publisher year")}><a>Publisher year</a></li>
          </ul>
        </div>
      </div>


     

   <div className='w-10/12 mx-auto'>

       <Tabs>
        <TabList >

            <Tab>
        <div className={`font-regular text-lg  ${tab?'text-[#131313CC]':'text-[#13131380]'}`} onClick={()=>settab(true)}> Read Books</div>
              </Tab>

          <Tab>
<div className={`font-regular text-lg  ${tab?'text-[#13131380]':'text-[#131313CC]'}`} onClick={()=>settab(false)}>Wishlist Books</div>

          </Tab>
        </TabList>

        <TabPanel className=' mx-auto bg-amber-50 '>
         <Transferstate.Provider value={true}> 
          <div className='flex flex-col gap-y-5'>
            {
              readboi.map((books, idx) =><Book key={idx} book={books}></Book>)
            }
          </div>
          </Transferstate.Provider>
        </TabPanel>
        <TabPanel>
         <Transferstate.Provider value={true}>
           <div className=''>
            {
              wishbook.map((books, idx) =><Book key={idx} book={books} ></Book>)
            }
          </div>
         </Transferstate.Provider>
        </TabPanel>
      </Tabs>
   </div>
    </div>
  );
};

export default ListedBook;