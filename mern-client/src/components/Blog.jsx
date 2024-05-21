import React from 'react';
import BlogImg from "../assets/blog.jpeg"

const Blog = () => {
  return (
    <div className='px-4 lg:px-24 bg-blue-100 text-gray-800 flex flex-col items-center'>
      <div className='flex w-full flex-col items-center gap-12 py-20'>
        {/* Main Title */}
        <div>
          <h2 className='text-5xl font-bold leading-snug text-center'>
            
        Exploring <span className='text-blue-600'>the Literary Universe</span>
          </h2>
        </div>
        
        {/* Introduction */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-10 bg-blue-200 rounded-lg p-6'>
          <div className='md:w-1/2'>
            <h3 className='text-3xl font-bold text-blue-600 mb-4'>Discovering Hidden Gems: Exploring Lesser-Known Authors</h3>
            <p className='text-base'>
            Join us on a journey to uncover some of the most talented yet underrated authors in the literary world. 
            From captivating storytelling to unique perspectives, these hidden gems are sure to enrich your reading experience
            </p>
          </div>
          <div className='md:w-1/2'>
            <img src={BlogImg} alt='Our Mission' className='w-3/4 md:w-1/2 rounded-lg shadow-md mx-auto'/>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-10'>
          {/* Blog Post 1 */}
          <div className='md:w-1/3'>
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>Top 10 Must-Read Books of 2024</h3>
              <p className='text-gray-600 text-sm mb-1'>By John Doe | May 15, 2024</p>
              <p className='text-gray-700 mb-2'> finding the perfect bookstore is akin to discovering a hidden gem. 
              I stumbled upon Book Heaven quite serendipitously, drawn in by its inviting storefront and promises of a diverse selection of books.</p>
              <a href='' className='text-blue-600 hover:text-blue-700'>Read more</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className='md:w-1/3'>
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>The Benefits of Reading Every Day</h3>
              <p className='text-gray-600 text-sm mb-1'>By Jane Smith | April 28, 2024</p>
              <p className='text-gray-700 mb-2'> Unlike some impersonal mega-stores, the employees here were passionate book lovers,
              Their genuine enthusiasm for literature was contagious, and I found myself spending hours lost in conversation with fellow book enthusiasts.</p>
              <a href='' className='text-blue-600 hover:text-blue-700'>Read more</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className='md:w-1/3'>
            <div className='p-6 bg-white rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-2'>Exploring Different Book Genres</h3>
              <p className='text-gray-600 text-sm mb-1'>By Emily Johnson | March 10, 2024</p>
              <p className='text-gray-700 mb-2'>From the moment I stepped foot into Book Heaven, I knew I had found my literary sanctuary. 
              As an avid reader with a penchant for exploring new genres, this bookstore exceeded all my expectations and left me craving for more.</p>
              <a href='' className='text-blue-600 hover:text-blue-700'>Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
