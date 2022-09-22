import { Component } from "react";
import style from './ErrorLine.module.css'

export default class ErrorLine extends Component {

    render() {
        return (
            <div className={style.error} >{this.props.children}</div>
        )
    }
}