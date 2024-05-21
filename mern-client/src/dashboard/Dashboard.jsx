import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar component */}

      <div className="flex flex-wrap flex-1 p-8">
        <div className="w-full text-center mb-8">
          <div className="bg-blue-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">User Data</h2>
            <p> <b>Total users:</b> 1500</p>
            <p> <b>Active users:</b> 1180</p>
            <p> <b>Total Publishers:</b> 50</p>
            {/* Add more user-related data if needed */}
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Book Count</h2>
            <p>Total books: 1500</p>
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Category Count</h2>
            <p>Total categories: 30</p>
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">National Award-winning Books</h2>
            <p><b>Total count:</b> 35</p>
            <ul>
              <li>"Echoes of Eternity" by Sarah Michaels</li>
              <li>"Shadows of Serenity" by Michael Thompson</li>
              {/* Add more national award-winning books */}
              <a href='' className='text-black-600 hover:text-blue-700'>Read more...</a>
            </ul>
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-8 space">
            <h2 className="text-xl font-bold mb-4">Most Read Books</h2>
            <p><b>Total count:</b> 150</p>
            <ul>
              <li>"To Kill a Mockingbird" by Harper Lee</li>
              <li>"The Great Gatsby" by F. Scott Fitzgerald</li>
              {/* Add more national award-winning books */}
              <a href='' className='text-black-600 hover:text-blue-700'>Read more...</a>
              {/* Add more most read books */}
            </ul>
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Recently Visited Books</h2>
            <p><b>Total count: </b>10</p>
            <ul>
              <li>"The Diary of a Young Girl" by Anne Frank</li>
              <li>"Harry Potter and the Philosopher's Stone" by J.K. Rowling</li>
              {/* Add more national award-winning books */}
              <a href='' className='text-black-600 hover:text-blue-700'>Read more...</a>
            </ul>
          </div>
        </div>

        <div className="w-1/2 px-4">
          <div className="bg-pink-100 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Popular Suggestions</h2>
            <p><b>Total count: </b>60 Collections</p>
            <ul>
              <li>"Where the Crawdads Sing" by Delia Owens</li>
              <li>"Normal People" by Sally Rooney</li>
              {/* Add more national award-winning books */}
              <a href='' className='text-black-600 hover:text-blue-700'>Read more...</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
