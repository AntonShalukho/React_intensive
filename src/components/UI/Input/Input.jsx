import React, { Component } from 'react'
import styles from './inputStyle.module.css'

export default class extends Component {
    
  constructor(props){
    super(props)
  }  

  render() {
    return (
        <input 
            {...this.props}
            className={styles.input} 
        />
    )
  }
}
