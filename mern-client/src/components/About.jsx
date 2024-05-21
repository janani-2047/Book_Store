import React from 'react';
import AboutImg from "../assets/images.jpeg"
import HisImg from "../assets/history.jpeg"
import TeamImg from "../assets/team.jpeg"

const About = () => {
  return (
    <div className='px-4 lg:px-24 bg-gray-100 text-gray-800 flex flex-col items-center'>
      <div className='flex w-full flex-col items-center gap-12 py-20'>
        {/* Main Title */}
        <div className="bg-gray-300 px-6 py-4 rounded-lg">
          <h2 className='text-5xl font-bold leading-snug text-center'>
            About <span className='text-blue-600'>Book Heaven</span>
          </h2>
        </div>
        
        {/* Introduction */}
        <div className="bg-gray-200 px-6 py-4 rounded-lg">
          <p className='w-full text-lg text-center'>
            Welcome to Book Heaven, your ultimate destination for a diverse selection of books. Whether you are looking for the latest bestsellers, timeless classics, or niche genres, we have something for every reader.
             Our mission is to promote the joy of reading by providing a vast array of books and excellent customer service.Immerse yourself in a world of endless possibilities, where every page holds the promise of adventure, enlightenment, and sheer joy.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-10 bg-gray-200 rounded-lg p-6'>
          <div className='md:w-1/2'>
            <h3 className='text-3xl font-bold text-blue-600 mb-4'>Our Mission</h3>
            <p className='text-base'>
              At Book Heaven, our mission is to make books accessible and enjoyable for everyone. We believe in the power of reading to transform lives and foster a lifelong love of learning. Our curated selection is designed to inspire and delight readers of all ages and interests.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img src={AboutImg} alt='Our Mission' className='w-3/4 md:w-1/2 rounded-lg shadow-md mx-auto'/>
          </div>
        </div>

        {/* Our History Section */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-10 bg-gray-200 rounded-lg p-6'>
          <div className='md:w-1/2'>
            <img src={HisImg} alt='Our History' className='w-3/4 md:w-1/2 rounded-lg shadow-md mx-auto'/>
          </div>
          <div className='md:w-1/2'>
            <h3 className='text-3xl font-bold text-blue-600 mb-4'>Our History</h3>
            <p className='text-base'>
              Founded in 2021, Book Heaven started as a small neighborhood bookstore with a vision to bring the community together through a shared love of books. Over the years, we have grown into a beloved destination for book lovers, known for our carefully curated selection, welcoming atmosphere, and passionate staff.
            </p>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className='flex justify-center gap-8'>
  <div className='md:w-1/2'>
    <h3 className='text-3xl text-center font-bold text-blue-600 mb-4'>Our Team</h3>
    <div className='bg-white p-6 rounded-lg shadow-md w-64 text-center'>
      <img src={TeamImg} alt='Team' className='w-32 h-32 rounded-full mx-auto mb-4'/>
      <h4 className='text-xl font-bold'>Our Dedicated Team</h4>
      <p className='text-blue-600 mb-4'>Passionate about books and dedicated to providing exceptional service.Together, we are building a vibrant literary community</p>
    </div>
    {/* Add more team members as needed */}
  </div>
  <div className='md:w-1/2'>
    <h3 className='text-3xl text-center font-bold text-blue-600 mb-4'>Our Partnerships</h3>
    <div className='bg-white p-6 rounded-lg shadow-md w-64 text-center'>
      <img src={TeamImg} alt='Team' className='w-32 h-32 rounded-full mx-auto mb-4'/>
      <h4 className='text-xl font-bold'>Our Partnerships</h4>
      <p className='text-blue-600 mb-4'>Our team works collaboratively to ensure every customer has an exceptional experience at Book Haven. </p>
    </div>
    {/* Add more team members as needed */}
  </div>
  <div className='md:w-1/2'>
    <h3 className='text-3xl text-center font-bold text-blue-600 mb-4'>Our Collaboration</h3>
    <div className='bg-white p-6 rounded-lg shadow-md w-64 text-center'>
      <img src={TeamImg} alt='Team' className='w-32 h-32 rounded-full mx-auto mb-4'/>
      <h4 className='text-xl font-bold'>Our Services</h4>
      <p className='text-blue-600 mb-4'>we also collaborate with authors, publishers, and community organizations to host events, literacy, and support local initiatives.</p>
    </div>
    {/* Add more team members as needed */}
  </div>
</div>

        </div>
      </div>
    
      
  );
};

export default About;
