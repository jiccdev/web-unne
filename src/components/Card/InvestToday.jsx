import React from 'react'
import styles from '../../styles/components/NewProperty.module.css';

const InvestToday = ({title}) => {
  return (
    <div className={`${styles.card} hover:shadow-2xl`}>
        <div className={`${styles.blob} bg-[#f0f0f0]`}></div>
        <h2 className={`${styles.titles} text-xl py-4 font-semibold`} >{title}</h2>
        <span className={styles.img} >
        </span>
    </div>
  )
}

export default InvestToday
