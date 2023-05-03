import React, { useState } from 'react';

import { iconsList } from '../Icons';
import LinkFab from './LinkFab';

const Fab = () => {
    const { AiOutlinePlus, AiOutlineWhatsApp, AiFillPhone } = iconsList;

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const hoverEffect = `hover:scale-105`;
    const buttonAnimate = `animate-heart`;
    return (
        <div className='select-none'>
            <div
                className={`fixed bottom-8 right-8 rounded-full w-[60px] h-[60px] bg-[#F57914] drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all ${hoverEffect} ${buttonAnimate}`}
                onClick={handleClick}
            >
                <div className={`transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <AiOutlinePlus size="1.7rem" color="white" />
                </div>
            </div>
            <div className={`fixed  right-8 rounded-full w-[60px] z-10 flex flex-col-reverse items-center gap-3 transition-all duration-500 transform ${isOpen ? 'bottom-28' : '-bottom-36 opacity-0'}`}>
                
                <LinkFab
                    href='#'
                    IconComponent={AiOutlineWhatsApp}
                    iconColor='#F57914'
                    bgColor='bg-white'
                />
            </div>
        </div>
    );
};

export default Fab;
