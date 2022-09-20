import React, { useState, useEffect } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/button/Button';
import Label from '../UI/label/Label';
import style from './FormStyle.module.css'
import Textarea from '../UI/textarea/Textarea';
import ErrorLine from '../errorLine/ErrorLine';
import { FormValidation } from '../../formValidation/FormValidation';
import DoneForm from '../doneForm/DoneForm';

export default function Form() {
    const [context, setContest] = useState(true)
    const [state, setState] = useState({
      name: '',
      surname: '',
      bornDate: '',
      phoneNumber: '',
      site: '',
      about: '',
      technologicalStack: '',
      projectDescription: '',
    })
    const [nameError, setNameError] = useState('')
    const [surnameError, setSurnameError] = useState('')
    const [bornDateError, setBornDateError] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [siteError, setSiteError] = useState('')
    const [aboutError, setAboutError] = useState('')
    const [technologicalStackError, setTechnologicalStackError] = useState('')
    const [projectDescriptionError, setProjectDescriptionError] = useState('')

    let validCaunter = [];

    useEffect(() => {
      document.addEventListener('keydown', isBackspace)
      return () => {
        document.removeEventListener('keydown', isBackspace)
      }
    })
  
  // SAVE AND CANSEL LOGIC
  function cansel(e) {
    e.preventDefault()
    validCaunter = [];
    cleaner()
  }  
  function cleaner() {
    setState({
      name: '',
      surname: '',
      bornDate: '',
      phoneNumber: '',
      site: '',
      about: '',
      technologicalStack: '',
      projectDescription: '',
    })
    setNameError('')
    setSurnameError('')
    setBornDateError('')
    setPhoneNumberError('')
    setSiteError('')
    setAboutError('')
    setTechnologicalStackError('')
    setProjectDescriptionError('')
  }

  function save(e) {
    e.preventDefault();
    validCaunter = [];
    isValidName()
    isValidSurname();
    isValidDate();
    isValidPhone();
    isValidSite();
    isValidAbout();
    isValidTechnologicalStack();
    isValidProjectDescription();
    if(!validCaunter.includes('0')) {
      backToForm()
    }
  }
  function backToForm() {
    setContest(!context)
  } 
  //-----------------------------------------------

  // VALIDATION METHODS 
  function isValidName () {
    setNameError('')
    setState({...state, name: FormValidation.getNameSurnameWithoutSpace(state.name)});
    if(FormValidation.isEpmty(state.name)) {
      setNameError(FormValidation.messages.empty);
      validCaunter.push('0')
      console.log(validCaunter)
    } else if(FormValidation.isUpperCaseNameAndSurname(state.name)) {
      setNameError(FormValidation.messages.UpperName);
      validCaunter.push('0')
      console.log(validCaunter)
    }
    validCaunter.push('1')
  }
  function isValidSurname () {
    setSurnameError('')
    setState({...state, surname: FormValidation.getNameSurnameWithoutSpace(state.surname)});
    if(FormValidation.isEpmty(state.surname)) {
      setSurnameError(FormValidation.messages.empty);
      validCaunter.push('0')
    } else if(FormValidation.isUpperCaseNameAndSurname(state.surname)) {
      setSurnameError(FormValidation.messages.UpperSurame);
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidDate() {
    setBornDateError('');
    if(FormValidation.isEpmty(state.bornDate)) {
      setBornDateError(FormValidation.messages.empty);
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidPhone() {
    setPhoneNumberError('');
    if(FormValidation.isEpmty(state.phoneNumber)){
      setPhoneNumberError(FormValidation.messages.empty);
      validCaunter.push('0')
    } else if (state.phoneNumber.length < 12) {
      setPhoneNumberError(FormValidation.messages.wrongTypePhone);
      validCaunter.push('0')
    } else if (FormValidation.isValidPhonNumber(state.phoneNumber)) {
      setPhoneNumberError(FormValidation.messages.wrongNumber);
      validCaunter.push('0')
    } 
    validCaunter.push('1')
  }
  function isValidSite() {
    setSiteError('');
    if(FormValidation.isEpmty(state.site)){
      setSiteError(FormValidation.messages.empty)
      validCaunter.push('0')
    } else if(!FormValidation.isSite(state.site)) {
      setSiteError(FormValidation.messages.url)
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidAbout() {
    setAboutError('');
    if(FormValidation.isEpmty(state.about)){
      setAboutError(FormValidation.messages.empty)
      validCaunter.push('0')
    }
    if(state.about.length > 600) {
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidTechnologicalStack() {
    setTechnologicalStackError('');
    if(FormValidation.isEpmty(state.technologicalStack)){
      setTechnologicalStackError(FormValidation.messages.empty)
      validCaunter.push('0')
    }
    if(state.technologicalStack.length > 600) {
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidProjectDescription() {
    setProjectDescriptionError('');
    if(FormValidation.isEpmty(state.projectDescription)){
      setProjectDescriptionError(FormValidation.messages.empty)
      validCaunter.push('0')
    }
    if(state.projectDescription.length > 600) {
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  //-----------------------------------------------------------

  // COUNTER 'ABOUT', 'STACK' AND 'DESCRIPTIONS'
  function caunter(string) {
      return (<span style={{color: 'blue'}}>{`${string.length} / 600`}</span>)
  }
  function message(state, string) {
    if(state.length < 601) {
      return caunter(state)
    } else {
      if(string === 'about') {return <span style={{color: 'red'}}>{`${state.length} / 600 - ${FormValidation.messages.limit}`}</span>}
      if(string === 'stack') {return <span style={{color: 'red'}}>{`${state.length} / 600 - ${FormValidation.messages.limit}`}</span>}
      if(string === 'discription') {return <span style={{color: 'red'}}>{`${state.length} / 600 - ${FormValidation.messages.limit}`}</span>}
    }
  }
  //---------------------------------------------------------------

  // PHONE NUMBER MASK
  function phoneMask() {
    if((state.phoneNumber.length === 1)) {
      setState({...state, phoneNumber: `${state.phoneNumber[0]}-`})
    }
    if((state.phoneNumber.length === 6)) {
      setState({...state, phoneNumber: `${state.phoneNumber.slice(0, 6)}-`})
    }
    if((state.phoneNumber.length === 9)) {
      setState({...state, phoneNumber: `${state.phoneNumber.slice(0, 9)}-`})
    }
  }
  function isBackspace(e) {
    if(e.key !== 'Backspace') {
      phoneMask()
    }
  }
  //-------------------------------------------------------

    return (
      <>
        {context
          ? (<form className={style.Form}>
              <h1 className={style.title} >Создание анкеты</h1>
              <div className={style.secondPartOfForm}>
                <div>
                  <Label for={'name'}>Имя*</Label>
                  <Input 
                    type='text' 
                    name='name'
                    placeholder='Name' 
                    value={state.name}
                    onChange={(e) => {setState({...state, name: e.target.value}); setNameError('')}} 
                  />
                  <ErrorLine>{nameError}</ErrorLine>
                </div>
                <div>
                  <Label for='surname' >Фамилия*</Label>
                  <Input 
                    type='text' 
                    name='surname' 
                    placeholder='Surname'
                    value={state.surname}
                    onChange={(e) => {setState({...state, surname: e.target.value}); setSurnameError('')}} 
                  />
                  <ErrorLine>{surnameError}</ErrorLine>
                </div>
                <div>
                  <Label for='bornDate'>Дата рождения*</Label>
                  <Input 
                    type='date'
                    name='bornDate'
                    placeholder='Born date' 
                    value={state.bornDate}
                    onChange={(e) => {setState({...state, bornDate: e.target.value}); setBornDateError('')}} 
                  />
                  <ErrorLine>{bornDateError}</ErrorLine>
                </div>
                <div>
                  <Label for='phoneNumber' >Телефон*</Label>
                  <Input 
                    type='tel' 
                    name='phoneNumber' 
                    placeholder='7-7777-77-77'
                    maxLength="12"
                    value={state.phoneNumber}
                    onChange={(e) => {setState({...state, phoneNumber: e.target.value}); setPhoneNumberError('')}} 
                  />
                  <ErrorLine>{phoneNumberError}</ErrorLine>
                </div>
              </div>
              <hr/>
              <div className={style.secondPartOfForm}>
                <div>
                  <Label for='site' >Сайт*</Label>
                  <Input 
                    type='text' 
                    name='site' 
                    placeholder='https://'
                    value={state.site}
                    onChange={(e) => {setState({...state, site: e.target.value}); setSiteError('')}}  
                  />
                  <ErrorLine>{siteError}</ErrorLine>
                </div>
                <div>
                  <Label>О себе*</Label>
                  <Textarea 
                    placeholder='About you'
                    value={state.about} 
                    onChange={(e) => {setState({...state, about: e.target.value}); setAboutError('')}}
                  ></Textarea>
                  <ErrorLine>
                    {aboutError 
                      ? FormValidation.messages.empty 
                      : message(state.about, 'about')
                    }
                  </ErrorLine>
                </div>
                <div>
                  <Label>Стек технологий*</Label>
                  <Textarea 
                    placeholder='Technological stack'
                    value={state.technologicalStack}
                    onChange={(e) => {setState({...state, technologicalStack: e.target.value}); setTechnologicalStackError('')}}
                  ></Textarea>
                  <ErrorLine>
                    {technologicalStackError 
                      ? FormValidation.messages.empty 
                      : message(state.technologicalStack, 'stack')
                    }
                  </ErrorLine>
                </div>    
                <div>
                  <Label>Описание последнего проекта*</Label>
                  <Textarea 
                    placeholder='Clarifiting last project'
                    value={state.projectDescription}
                    onChange={(e) => {setState({...state, projectDescription: e.target.value}); setProjectDescriptionError('')}}
                  ></Textarea>
                  <ErrorLine>
                    {projectDescriptionError 
                      ? FormValidation.messages.empty 
                      : message(state.projectDescription, 'discription')
                    }
                  </ErrorLine>
                </div>      
              </div>
              <div className='buttonsContainer'>
                {/* Chose buttons backgroundColor. It should be primary, danger, warning or success */}
                <Button method={cansel} backgroundColor={'danger'} >Отмена</Button>
                <Button method={save} backgroundColor={'success'} >Сохранить</Button>
              </div>
            </form>)
          : <DoneForm state={{...state}} methodBack={backToForm} cleaner={cleaner} />
        }
      </>
    )
}