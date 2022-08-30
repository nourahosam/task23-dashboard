import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const CardComponent = () => {
    return (<div className='card bg-slate-400'>
        <div className='flex justify-center items-center gap-1 mt-10'>
            <FaFacebookSquare />
            <p>@nathanf</p>
        </div>
        <div className='text-center mt-2'>
            <h3 className=' text-6xl font-bold'>1987</h3>
            <p className='font-medium uppercase tracking-[0.3rem]'>FOLLOWERS</p>
            <div className='flex justify-center items-center font-bold mt-3 mb-10'>
                <span>
                    < BiUpArrow />
                </span>
                <p>12 Today</p>
            </div>
        </div>
    </div>)
}

export default CardComponent;