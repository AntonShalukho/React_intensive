import React from 'react'
import style from './ButtonStyle.module.css'

export default function Button({children, ...props}) {

  
    return (
        <button 
            className={`${style.button} ${style[props.backgroundColor]}`} 
            onClick={(e) => props.method(e)} 
        >
            {children}    
        </button>
    )
  
  
} 
