import React, { useEffect, useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

const OverviewComponent = ({icons, theme,  themeBG, themeCardBG, themeText}) => {
   

    return (
        <div className={` p-4 rounded m-2 ${themeCardBG}`}>
            <span className='flex justify-between '>
                <p className={`font-bold opacity-50 ${themeText}`}>Page Views</p>
                <i className='text-xl'>{icons}</i>
            </span>
            <span className='flex justify-between mt-3'>
                <p className={`text-3xl font-bold ${themeText}`}>87</p>
                <span className='flex justify-center items-center text-sm text-green-500'><i><BiUpArrow /></i>3%</span>

            </span>
        </div>
    )
}

export default OverviewComponent;