import React from 'react'

const CircleSteps = ({stepData,ColorNumberBG,ColorTextBG}) => {


    
    return (
        <div key={stepData.id} className={`h-14 w-80 ${ColorTextBG} flex items-center rounded-full hover:scale-105 hover:shadow-xl hover:cursor-pointer transition-all md:absolute ${stepData.position} transition-all ease-in`}>
            <span className={`${ColorNumberBG} text-white h-full pt-1 rounded-full w-1/6 text-center text-4xl font-semibold`}> {stepData.id}</span>
            <p className={`pl-4 text-white text-sm`}>{stepData.text}</p>
        </div>
    )
}

export default CircleSteps
