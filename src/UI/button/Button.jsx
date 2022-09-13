import React, { Component } from 'react'
import styles from './buttonStyle.module.css'

export default class Button extends Component {
    constructor(props){
        super()
        this.props = props
    }
  render() {
    return (
        <button 
            className={
                this.props.text === 'Отмена' 
                ? styles.buttonCansel
                : styles.buttonSave
            } 
            onClick={(e) => this.props.method(e)} 
        >
            {this.props.text}    
        </button>
    )
  }
} 
