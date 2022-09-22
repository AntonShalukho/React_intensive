import React, { Component } from 'react';
import style from './LabelStyle.module.css'

export default class Label extends Component {
  
  render() {
    return (
      <label className={style.label} htmlFor={this.props.for} >
        {this.props.children}
      </label>
    )
  }
}
