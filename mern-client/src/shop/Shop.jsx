import React, {useState, useEffect} from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books,setBooks] = useState([]);

  useEffect( ()=>{
    fetch("https://book-store-ydv9.onrender.com/all-books").then(res=>res.json()).then(data => setBooks(data));
  }, [])
  return (
    <div>
      <div className='mt-28 px-4 lg:px24'>
        <h2 className='text-5xl font-bold text-center'>All Books are Here!</h2>

        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
         {
            books.map((book, index) => (
              <Card
                key={index} className="border rounded-lg overflow-hidden shadow-md"> 
                <img src={book.imageURL} alt={book.bookTitle} className='h-96' />
                <div className="p-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 <p>{book.bookTitle}</p> 
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <button className='bg-blue-700 font-semibold text-white py-2 rounded px-4 mt-4'>Buy Now</button> </div>
              </Card>
            ))
         }
        
        
        </div>

      </div>
    </div>
  )
}

export default Shop