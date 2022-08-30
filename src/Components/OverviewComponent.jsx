import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

const OverviewComponent = () => {
    return(
        <div className='bg-fuchsia-800 p-4 rounded m-2'>
        <span className='flex justify-between '>
          <p className='font-bold'>Page Views</p>
          <i className='text-xl'><FaFacebookSquare /></i>
        </span>
        <span className='flex justify-between mt-3'>
          <p className=' text-3xl font-bold'>87</p>
          <span className='flex justify-center items-center text-sm'><i><BiUpArrow /></i>3%</span>
          
        </span>
      </div>
    )
}

export default OverviewComponent;