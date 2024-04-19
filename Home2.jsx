import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import heroImage from "../assets/heroImage.jpg"
import profile from "../assets/profile photo.jpeg"

const Home2 = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-blue-950 to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col h-full items-center justify-center px-1 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white font-bold">
            I'm a full stack developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas veniam expedita aperiam veritatis reprehenderit unde porro impedit quos magnam vero nesciunt obcaecati, tempore similique repellat laudantium ab eligendi doloribus maxime facilis, saepe non nisi sequi, qui quo. Adipisci nobis eveniet sapiente dicta officiis, iure maxime impedit corporis sit tenetur veniam!
            from-[#622774] to-[#C53364]  bg-gradient-to-r from-black to-slate-950
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#622774] to-[#C53364] hover:from-cyan-900 to-blue-950 cursor-pointer">
              Resume 
              <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
              
            </button>
          </div>
        </div>
        <div>
          <img src={profile} alt="pic" className="rounded-2xl mx-auto w-2/3 md:w-full " />
        </div>
      </div>
    </div>
  )
}

export default Home2