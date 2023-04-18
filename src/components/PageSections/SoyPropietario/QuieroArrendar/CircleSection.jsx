import React, { useState } from 'react'
import CircleSteps from './CircleSteps';
import SimpleButton from '@/components/Button/SimpleButton';

const CircleSection = ({ ubicationData, ColorBorder, ColorBg, ColorNumberBG, ColorTextBG, ColorText }) => {


    return (
        <div className='grid gap-14 grid-cols-1 xl:grid-cols-2 xl:gap-0'>
            <div className='xl:ml-20 2xl:ml-32 pb-5'>
                <div className=' xl:max-w-md'>
                    <h2 className='my-10 text-center text-4xl md:text-5xl font-bold'>¿Como funciona?</h2>
                    <div>
                        <SimpleButton></SimpleButton>
                    </div>
                </div>
            </div>

            <div className='max-md:h-max transition-all ease-in '>
                <div className='flex  md:max-lg:justify-start justify-center xl:justify-start md:max-lg:pl-5 transition-all ease-in'>
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
                        {ubicationData.length > 0 ? ubicationData.map((e) => <CircleSteps stepData={e} key={e.id} ColorNumberBG={ColorNumberBG} ColorTextBG={ColorTextBG} ColorText={ColorText} />) : null}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CircleSection
