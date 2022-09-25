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
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [site, setSite] = useState('');
    const [about, setAbout] = useState('');
    const [technologicalStack, setTechnologicalStack] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [bornDateError, setBornDateError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [siteError, setSiteError] = useState('');
    const [aboutError, setAboutError] = useState('');
    const [technologicalStackError, setTechnologicalStackError] = useState('');
    const [projectDescriptionError, setProjectDescriptionError] = useState('');

    let validCaunter = [];

    useEffect(() => {
      document.addEventListener('keydown', isBackspace)
      return () => {
        document.removeEventListener('keydown', isBackspace)
      }
    })
  
  // SAVE AND CANSEL LOGIC
  function cansel(e) {
    e.preventDefault();
    validCaunter = [];
    cleaner();
  }  
  function cleaner() {
    setName('');
    setSurname('');
    setBornDate('');
    setPhoneNumber('');
    setSite('');
    setAbout('');
    setTechnologicalStack('');
    setProjectDescription('');
    setNameError('');
    setSurnameError('');
    setBornDateError('');
    setPhoneNumberError('');
    setSiteError('');
    setAboutError('');
    setTechnologicalStackError('');
    setProjectDescriptionError('');
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
      backToForm();
    }
  }
  function backToForm() {
    setContest(!context);
  } 
  //-----------------------------------------------

  // VALIDATION METHODS 
  function isValidName () {
    setNameError('');
    setName(FormValidation.getStringWithoutSpace(name));
    if(FormValidation.isEpmty(name, true)) {
      setName('')
      setNameError(FormValidation.messages.empty);
      validCaunter.push('0')
    } else if(FormValidation.isUpperCaseNameAndSurname(name)) {
      setNameError(FormValidation.messages.UpperName);
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidSurname () {
    setSurnameError('');
    setSurname(FormValidation.getStringWithoutSpace(surname));
    if(FormValidation.isEpmty(surname, true)) {
      setSurnameError(FormValidation.messages.empty);
      validCaunter.push('0')
    } else if(FormValidation.isUpperCaseNameAndSurname(surname)) {
      setSurnameError(FormValidation.messages.UpperSurame);
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidDate() {
    setBornDateError('');
    if(FormValidation.isEpmty(bornDate)) {
      setBornDateError(FormValidation.messages.empty);
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidPhone() {
    setPhoneNumberError('');
    if(FormValidation.isEpmty(phoneNumber)){
      setPhoneNumberError(FormValidation.messages.empty);
      validCaunter.push('0')
    } else if (phoneNumber.length < 12) {
      setPhoneNumberError(FormValidation.messages.wrongTypePhone);
      validCaunter.push('0')
    } else if (FormValidation.isValidPhonNumber(phoneNumber)) {
      setPhoneNumberError(FormValidation.messages.wrongNumber);
      validCaunter.push('0')
    } 
    validCaunter.push('1')
  }
  function isValidSite() {
    setSiteError('');
    setSite(FormValidation.getStringWithoutSpace(site));
    if(FormValidation.isEpmty(site)){
      setSiteError(FormValidation.messages.empty)
      validCaunter.push('0')
    } else if(!FormValidation.isRightFirstPartOfSite(site)) {
      setSiteError(FormValidation.messages.url)
      validCaunter.push('0')
    } else if(FormValidation.isSite(site) < 9) {
      setSiteError(FormValidation.messages.url)
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidAbout() {
    setAboutError('');
    if(FormValidation.isEpmty(about)){
      setAboutError(FormValidation.messages.empty)
      validCaunter.push('0')
    }
    if(about.length > 600) {
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidTechnologicalStack() {
    setTechnologicalStackError('');
    if(FormValidation.isEpmty(technologicalStack)){
      setTechnologicalStackError(FormValidation.messages.empty)
      validCaunter.push('0')
    }
    if(technologicalStack.length > 600) {
      validCaunter.push('0')
    }
    validCaunter.push('1')
  }
  function isValidProjectDescription() {
    setProjectDescriptionError('');
    if(FormValidation.isEpmty(projectDescription)){
      setProjectDescriptionError(FormValidation.messages.empty)
      validCaunter.push('0')
    }
    if(projectDescription.length > 600) {
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
    if((phoneNumber.length === 1)) {setPhoneNumber(`${phoneNumber[0]}-`)}
    if((phoneNumber.length === 6)) {setPhoneNumber(`${phoneNumber.slice(0, 6)}-`)}
    if((phoneNumber.length === 9)) {setPhoneNumber(`${phoneNumber.slice(0, 9)}-`)}
  }
  function isBackspace(e) {
    if(e.key !== 'Backspace') { phoneMask() }
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
                    value={name}
                    onChange={(e) => {setName(e.target.value); setNameError('')}} 
                  />
                  <ErrorLine>{nameError}</ErrorLine>
                </div>
                <div>
                  <Label for='surname' >Фамилия*</Label>
                  <Input 
                    type='text' 
                    name='surname' 
                    placeholder='Surname'
                    value={surname}
                    onChange={(e) => {setSurname(e.target.value); setSurnameError('')}} 
                  />
                  <ErrorLine>{surnameError}</ErrorLine>
                </div>
                <div>
                  <Label for='bornDate'>Дата рождения*</Label>
                  <Input 
                    type='date'
                    name='bornDate'
                    placeholder='Born date' 
                    value={bornDate}
                    onChange={(e) => {setBornDate(e.target.value); setBornDateError('')}} 
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
                    value={phoneNumber}
                    onChange={(e) => {setPhoneNumber(e.target.value); setPhoneNumberError('')}} 
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
                    value={site}
                    onChange={(e) => {setSite(e.target.value); setSiteError('')}}  
                  />
                  <ErrorLine>{siteError}</ErrorLine>
                </div>
                <div>
                  <Label>О себе*</Label>
                  <Textarea 
                    placeholder='About you'
                    value={about} 
                    onChange={(e) => {setAbout(e.target.value); setAboutError('')}}
                  ></Textarea>
                  <ErrorLine>
                    {aboutError 
                      ? FormValidation.messages.empty 
                      : message(about, 'about')
                    }
                  </ErrorLine>
                </div>
                <div>
                  <Label>Стек технологий*</Label>
                  <Textarea 
                    placeholder='Technological stack'
                    value={technologicalStack}
                    onChange={(e) => {setTechnologicalStack(e.target.value); setTechnologicalStackError('')}}
                  ></Textarea>
                  <ErrorLine>
                    {technologicalStackError 
                      ? FormValidation.messages.empty 
                      : message(technologicalStack, 'stack')
                    }
                  </ErrorLine>
                </div>    
                <div>
                  <Label>Описание последнего проекта*</Label>
                  <Textarea 
                    placeholder='Clarifiting last project'
                    value={projectDescription}
                    onChange={(e) => {setProjectDescription(e.target.value); setProjectDescriptionError('')}}
                  ></Textarea>
                  <ErrorLine>
                    {projectDescriptionError 
                      ? FormValidation.messages.empty 
                      : message(projectDescription, 'discription')
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
          : <DoneForm state={[name, surname, bornDate, phoneNumber, site, about, technologicalStack, projectDescription]} methodBack={backToForm} cleaner={cleaner} />
        }
      </>
    )
}