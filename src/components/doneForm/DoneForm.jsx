import React from "react";
import Button from "../UI/button/Button";
import style from './DoneForm.module.css';

export default function DoneForm({...props}) {
    const methodBack = () => {
        props.methodBack();
        props.cleaner()
    }
    const titles = ['Born date:', 'Phone number:', 'Site:', 'About you:', 'Technology stack:', 'Projects description:']
    const [name, surname] = props.state

    function BlockDoneForm({...props}) {
        return (
            <div className={style.block}> 
                <div className={style.itemTitle} >{props.title}</div>
                <div className={style.textInBox}>{props.state}</div>
            </div>
        )
    }

    return (
        <div className={style.doneForm}>
            <div className={style.title} >{`${name} ${surname}`}</div>
            <div className={style.secondPartOfForm}>
                {props.state.slice(2).map((el, index) => <BlockDoneForm key={titles[index]} state={el} title={titles[index]} />)}
            </div>
            <div className='buttonsContainer'>
            {/* Chose buttons backgroundColor. It should be primary, danger, warning or success */}
            <Button method={methodBack} backgroundColor={'primary'} >Back to form</Button>
          </div>
        </div>
    )
}