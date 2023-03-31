import React from 'react'

const CircleSteps = ({stepData,ColorNumberBG,ColorTextBG,ColorText}) => {


    
    return (
        <div key={stepData.id} className={`${ColorTextBG} md:absolute ${stepData.position} w-14 h-14 rounded-full mr-[10px] object-cover cursor-pointer flex items-center overflow-hidden
        hover:w-[400px] hover:justify-start transition-all`}>
            <span className={`${ColorNumberBG} text-white h-full rounded-full w-14 min-w-[3.6rem] text-center text-4xl leading-[3.2rem] font-semibold`}> {stepData.id}</span>
            <p className={`pl-4 ${ColorText}`}>{stepData.text}</p>
        </div>
    )
}

export default CircleSteps
