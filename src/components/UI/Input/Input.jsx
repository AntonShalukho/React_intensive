import React from 'react'
import styles from './InputStyle.module.css'

export default function Input({...props}) {

    return (
        <input 
            {...props}
            className={styles.input} 
        />
    )
}
