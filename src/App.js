import React from 'react';
import photo from './assests/photo.jpeg'; 

const ProfileSection = () => {
  return (
    <div className='h-screen bg-black'>
    <section className="container flex justify-center items-center h-screen">  max-w-sm bg-slate-800 rounded-lg">
      <article className="text-center mt-2 ">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={photo}
          alt="User Image"
        />
        <h2 className="mt-4 text-xl font-bold text-pink-900">
          srimusali vyshnavi
        </h2>
        <p className="mt-2 text-green-500">Nellore, Andhra Predesh</p>
        <p className="mt-2 text-white">
          "Front-end developer."
        </p>

        <div className="mt-6 space-y-2">
          <button
            className="w-full bg-orange-200 text-white py-2 rounded-md hover:bg-gray-700"
          >
            GitHub
          </button>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400"
          >
            Frontend Mentor
          </button>
          <button
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-600"
          >
            LinkedIn
          </button>
          <button

            className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-300"
          >
            Twitter
          </button>
          <button
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-400"
          >
            Instagram
          </button>
        </div>
      </article>
    </section>
    </div>
  );
};

export default ProfileSection;
