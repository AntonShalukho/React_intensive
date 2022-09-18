import React, { Component } from 'react'
import styles from './inputStyle.module.css'

export default class Input extends Component {
  ref;
  
  constructor(props){
    super(props)
    this.ref = React.createRef()
  }  

  render() {
    return (
        <input 
            {...this.props}
            ref={this.ref}
            className={styles.input} 
        />
    )
  }
}
