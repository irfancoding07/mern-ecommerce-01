import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full block md:hidden"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28">
       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center md:text-left max-w-xs sm:max-w-md lg:max-w-xl leading-tight"
        >Freshness You Can Trust, Savings You Will Love!</h1>



        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link to={"/products"} className="group flex items-center gap-2 px-6 sm:px-8 py-3 bg-primary hover:bg-primary-dull rounded text-white transition">
            Shop now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
          </Link>




          <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
            Explore deals
            <img className='  transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner














 