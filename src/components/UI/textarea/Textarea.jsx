import React, { Component } from 'react';
import style from './TextareaStyle.module.css'

export default class Textarea extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <textarea 
        {...this.props} 
        className={style.textarea}  
        cols="50" rows="7"
      ></textarea>
    )
  }
}
