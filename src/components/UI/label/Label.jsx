import React from 'react';
import style from './LabelStyle.module.css'

export default function Label({children, ...props}) {
  
    return (
      <label className={style.label} htmlFor={props.for} >
        {children}
      </label>
    )
}
