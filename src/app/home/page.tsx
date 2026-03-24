import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <div className=' flex flex-col-reverse items-center md:px-16 sm:flex-row px-14  gap-4 sm:gap-12 justify-evenly '>
       <div className='relative '>
         <h1 className='font-bold text-4xl sm:text-5xl max-w-[400px] sm:font-extrabold text-center sm:text-left mt-2'>Hi, I am a Web Developer</h1>
        <p className="relative font-light mt-3 pt-4 text-xl flex-wrap px-10 sm:border sm:shadow shadow-gray-500  max-w-[400px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[800px] text-center rounded-xl border-gray-500">
          I'm learning and practically implementing my knowledge in web development. I have a passion for creating beautiful and functional websites. I am always looking for new challenges and opportunities to grow as a developer. Currently, I love to work on web applications using technologies like HTML, Javasript, Css, React js, Next js, Tailwind Css and many more.
        </p>
       </div>

       <div className='relative  w-58 sm:w-64 md:w-72  lg:w-98 aspect-square rounded-full overflow-hidden'>
        <Image
          src="/myprofile.jpg"
          alt= "Profile Picture"
          fill
          className='object-cover rounded-full'
          />   
       </div>


      </div>

      {/* Portfolio button */}
      <button className='flex p-3 mt-6 rounded-xl text-3xl bg-amber-600 justify-self-center sm:justify-self-auto animate-bounce font-bold sm:ml-19'  onClick={() => {
         const portfolioSection = document.getElementById("portfolio");
         if (portfolioSection) {
         portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }}}>
        Portfolio
      </button>
    </div>
  )
}

export default Home