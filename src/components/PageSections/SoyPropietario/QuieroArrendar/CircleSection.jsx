import React, { useState } from 'react'
import CircleSteps from './CircleSteps';

const CircleSection = ({ ubicationData, ColorBorder, ColorBg, ColorNumberBG, ColorTextBG }) => {


    return (
        <div className='py-5'>
            <div className='max-md:h-max transition-all ease-in '>
                <div className='flex 2xl:justify-center lg:max-xl:justify-center max-md:justify-center lg:pl-5 xl:ml-0 md:py-10 py-5 transition-all ease-in'>
                    <div className={`lg:w-[27rem] lg:h-[27rem] 
                                sm:w-[30rem] md:h-[30rem]
                                flex justify-center items-center w-full h-auto flex-wrap gap-3
                            ${ColorBorder} md:border-dashed md:border-4 md:rounded-full  md:relative `}>

                        {/* Section Information Center */}
                        <div className={`w-72 h-72 ${ColorBorder} border-solid border-2 rounded-full flex justify-center items-center transition-all ease-in hover:scale-105 hover:cursor-pointer`}>
                            <div className={`w-60 h-60 ${ColorBg} rounded-full text-center flex justify-center items-center`}>
                                <h3 className='font-medium text-2xl text-white'>¿Como Funciona?</h3>
                            </div>
                        </div>

                        {/* Section Info Steps */}
                        {ubicationData.length > 0 ? ubicationData.map((e) => <CircleSteps stepData={e} key={e.id} ColorNumberBG={ColorNumberBG} ColorTextBG={ColorTextBG} />) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

            export default CircleSection
