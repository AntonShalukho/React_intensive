import React, { Component } from 'react'
import styles from './InputStyle.module.css'

export default class Input extends Component {

  render() {
    return (
        <input 
            {...this.props}
            className={styles.input} 
        />
    )
  }
}
