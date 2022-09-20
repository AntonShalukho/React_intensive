import React from "react";
import Button from "../UI/button/Button";
import style from './DoneForm.module.css';

export default function DoneForm({...props}) {
    const methodBack = () => {
        props.methodBack();
        props.cleaner()
    }
    console.log(props)

        return (
            <div className={style.doneForm}>
                <div className={style.title} >{`${props.state.name} ${props.state.surname}`}</div>
                <div className={style.secondPartOfForm}>
                    <div className={style.block}> 
                        <div className={style.itemTitle} >Born date:</div>
                        <div>{props.state.bornDate}</div>
                    </div>
                    <div className={style.block}> 
                        <div className={style.itemTitle} >Phone number:</div>
                        <div>{props.state.phoneNumber}</div>
                    </div>
                    <div className={style.block}> 
                        <div className={style.itemTitle} >Site:</div>
                        <div>{props.state.site}</div>
                    </div>
                    <div className={style.block}> 
                        <div className={style.itemTitle} >About you:</div>
                        <div className={style.textInBox}>{props.state.about}</div>
                    </div>
                    <div className={style.block}> 
                        <div className={style.itemTitle} >Еechnology stack:</div>
                        <div className={style.textInBox}>{props.state.technologicalStack}</div>
                    </div>
                    <div className={style.block}> 
                        <div className={style.itemTitle} >Projects description:</div>
                        <div className={style.textInBox}>{props.state.projectDescription}</div>
                    </div>
                </div>
                <div className='buttonsContainer'>
                {/* Chose buttons backgroundColor. It should be primary, danger, warning or success */}
                <Button method={methodBack} backgroundColor={'primary'} >Back to form</Button>
              </div>
            </div>
        )
}