import React, { Component } from 'react'
import styles from './inputStyle.module.css'

export default class extends Component {
  constructor(props){
    super()
    this.props = props
  }  

  render() {
    return (
      <div className={styles.inputContainer} >
        <label 
            htmlFor='input' 
            className={styles.label} 
        >
            {this.props.label} :
        </label>
        <input 
            type={this.props.type} 
            className={styles.input} 
            name='input' 
            placeholder={this.props.label} 
        />
      </div>
    )
  }
}
