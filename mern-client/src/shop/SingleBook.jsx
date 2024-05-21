import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { bookTitle, imageURL, bookDescription, bookPDFURL } = useLoaderData();

  return (
    <div className="flex mt-24 px-4 lg:px-24"> {/* Added mt-24 for margin top */}
    {/* Main Content */}
    <div className="w-full text-center bg-blue-200 rounded-lg p-4 mt-8"> {/* Added background color, padding, rounded corners, and margin top */}
  <div className="flex justify-center">
    <img src={imageURL} alt={bookTitle} className="h-96" />
  </div>
  <h2 className="text-3xl font-bold mt-4">{bookTitle}</h2> {/* Adjusted margin top */}
  <p className="mt-4 w-1/2 mx-auto text-center mb-4">{bookDescription}</p>
<b className='semi-bold text-blue-1200 block mb-4'>SOURCE TO READ FULL BOOK</b> {/* Added margin-bottom */}
<a href={bookPDFURL} download="BookName.pdf" className="font-bold mt-4 text-blue-600 hover:underline">Download Book</a>


</div>



      </div>
    
  
  
  );
};

export default SingleBook;
