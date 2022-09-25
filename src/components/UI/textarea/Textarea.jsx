import React from 'react';
import style from './TextareaStyle.module.css'

export default function Textarea({...props}) {
  
    return (
      <textarea 
        {...props} 
        className={style.textarea}  
        cols="50" rows="7"
      ></textarea>
    )
}
