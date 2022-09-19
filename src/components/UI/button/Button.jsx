import React, { Component } from 'react'
import style from './buttonStyle.module.css'

export default class Button extends Component {
    constructor(props){
        super(props)
    }
  render() {

    return (
        <button 
            className={`${style.button} ${style[this.props.backgroundColor]}`} 
            onClick={(e) => this.props.method(e)} 
        >
            {this.props.children}    
        </button>
    )
  }
} 
