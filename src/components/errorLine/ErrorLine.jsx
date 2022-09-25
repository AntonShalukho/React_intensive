import React from "react";
import style from './ErrorLine.module.css'

export default function ErrorLine({children}) {

        return (
            <div className={style.error} >
                {children}
            </div>
        )
}