import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStairs } from '@fortawesome/free-solid-svg-icons';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';


const Cardshow = () => {
  return (
    <div>
     <div >
<h1 className="flex items-center justify-center text-7xl font-bold text-gray-800 font-poppins space-x-3">
  <FontAwesomeIcon icon={faStairs} className="text-indigo-500" />

  <span className="inline-flex space-x-1">
    {"What We Provide".split("").map((letter, index) => (
      <span
        key={index}
        className={`transform transition-transform duration-300 ${
          letter !== " " ? "hover:scale-125" : ""
        }`}
      >
        {letter}
      </span>
    ))}
  </span>
</h1>
<div className='p-5 relative '>
       <div className='mt-16 p-8 flex  gap-8 justify-evenly bg-gray-100'>
  {/* Card 1 */}
 <div className='flex flex-col items-center bg-orange-700 p-4 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_0_25px_#d946ef,0_0_45px_#ffffff,0_0_65px_#f59e0b,0_0_85px_#fb923c]'>
  <FontAwesomeIcon icon={faStairs} className="text-white  hidden p-3 relative left-[80px] -top-4 rounded-full bg-white" />
  <FontAwesomeIcon icon={faCompactDisc} className="text-white p- -mt-3 text-8xl rounded-full " />

  <div className='p-3 mt-5 text-center bg-amber-100 rounded-2xl '>
    <h2 className="text-lg font-bold">Our Work</h2>
    <p className='font-semibold text-black  shadow-2xl'>we are the best ranker <br /><span className='text-5xl text-orange-950'>80+</span></p>
  </div>
</div>


 <div className='flex flex-col items-center bg-orange-700 p-4 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_0_25px_#d946ef,0_0_45px_#ffffff,0_0_65px_#f59e0b,0_0_85px_#fb923c]'>
  <FontAwesomeIcon icon={faStairs} className="text-white  hidden p-3 relative left-[80px] -top-4 rounded-full bg-white" />
  <FontAwesomeIcon icon={faCompactDisc} className="text-black p- -mt-3 text-8xl rounded-full " />

  <div className='p-3 mt-5 text-center bg-amber-100 rounded-2xl '>
    <h2 className="text-lg font-bold">Our Work</h2>
    <p className='font-semibold text-black  shadow-2xl'>we are the best ranker <br /><span className='text-5xl text-orange-950'>80+</span></p>
  </div>
</div>
 <div className='flex flex-col items-center bg-orange-700 p-4 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_0_25px_#d946ef,0_0_45px_#ffffff,0_0_65px_#f59e0b,0_0_85px_#fb923c]'>
  <FontAwesomeIcon icon={faStairs} className="text-white  hidden p-3 relative left-[80px] -top-4 rounded-full bg-white" />
  <FontAwesomeIcon icon={faCompactDisc} className="text-black p- -mt-3 text-8xl rounded-full " />

  <div className='p-3 mt-5 text-center bg-amber-100 rounded-2xl '>
    <h2 className="text-lg font-bold">Our Work</h2>
    <p className='font-semibold text-black  shadow-2xl'>we are the best ranker <br /><span className='text-5xl text-orange-950'>80+</span></p>
  </div>
</div>

 <div className='flex flex-col items-center bg-orange-700 p-4 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_0_25px_#d946ef,0_0_45px_#ffffff,0_0_65px_#f59e0b,0_0_85px_#fb923c]'>
  <FontAwesomeIcon icon={faStairs} className="text-white  hidden p-3 relative left-[80px] -top-4 rounded-full bg-white" />
  <FontAwesomeIcon icon={faCompactDisc} className="text-white p- -mt-3 text-8xl rounded-full " />

  <div className='p-3 mt-5 text-center bg-amber-100 rounded-2xl '>
    <h2 className="text-lg font-bold">Our Work</h2>
    <p className='font-semibold text-black  shadow-2xl'>we are the best ranker <br /><span className='text-5xl text-orange-950'>80+</span></p>
  </div>
</div>
</div>

</div>

     </div>
     
      
    </div>
  )
}

export default Cardshow
