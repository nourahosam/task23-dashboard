import React, {useState, useEffect} from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const CardComponent = ({icons, colorProp,font, before, themeBG, themeCardBG, themeText}) => {
    const Colors = {
        before: 'before:'+colorProp,
    }

    return (<div className={`card ${before} ${themeCardBG}`} >
        {console.log(themeBG)}
        <div className='flex justify-center items-center gap-1 mt-10'>
            <p>{icons}</p>
            <p className={`${themeText} opacity-50`}>@nathanf</p>
        </div>
        <div className={`text-center mt-2 `}>
            <h3 className={`bg-bg- text-6xl font-bold ${themeText}`}>1987</h3>
            <p className={`font-medium uppercase tracking-[0.3rem] ${themeText} opacity-50`}>FOLLOWERS</p>
            <div className='flex justify-center items-center font-bold mt-3 mb-10 text-green-500'>
                <span >
                    < BiUpArrow style={{color: 'green'}}/>
                </span>
                <p className='text-green-500'>12 Today</p>
            </div>
        </div>
    </div>)
}

export default CardComponent;