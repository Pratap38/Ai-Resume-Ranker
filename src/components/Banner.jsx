import React from 'react'

const Banner = () => {
  return (
    <div>
      <div>
        <div className='m-9 p-8'>
            <img src="/images/hero2.png" className='mt-6 h-[700px] rounded-2xl w-auto    relative left-0'  alt="" />
            <div className="absolute top-0 right-0 h-[80%] w-1/4  rounded-2xl bg-gradient-to-l from-white/30 to-white/0"></div>
        </div>
        <div>
          <button className='relative -top-[270px] left-[700px] text-white shadow-2xl shadow-black font-sans font-semibold bg-blue-500 p-4 rounded-4xl text-6xl '><a href="">RANK YOUR RESUME NOW </a></button>
        </div>
      </div>
    </div>
  )
}

export default Banner
