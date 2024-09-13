import React from 'react';

const ChatsForYou: React.FC = () => {
  return (
    <div className='bg-gray-50 p-8 flex justify-between items-center'>
      {/* Left Section with Text */}
      <div className='max-w-lg'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Chats for your distributed teams
        </h1>
        <p className='text-gray-600 mb-6'>
          Team combines the immediacy of real-time chat with an email threading
          model. With Team, you can catch up on important conversations while
          ignoring irrelevant ones.
        </p>
        <a href='#' className='text-blue-500 hover:text-blue-600 font-medium'>
          Learn more →
        </a>
      </div>

      {/* Right Section with Image */}
      <div className='ml-8'>
        <img
          src='/pp.jpg' // Path gambar diperbarui
          alt='Chats UI'
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
};

export default ChatsForYou;
