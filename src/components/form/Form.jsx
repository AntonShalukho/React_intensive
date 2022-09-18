import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/button/Button';
import Label from '../UI/label/Label';
import style from './FormStyle.module.css'
import Textarea from '../UI/textarea/Textarea';
import ErrorLine from '../errorLine/ErrorLine';
import { FormValidation } from '../../formValidation/formValidation';

class Form extends React.Component {
  constructor() {
    super()
    this.phoneNumber = React.createRef()
    this.state = {
      name: '',
      surname: '',
      bornDate: '',
      phoneNumber: '',
      site: '',
      about: '',
      technologicalStack: '',
      projectDescription: '',
      nameError: '',
      surnameError: '',
      bornDateError: '',
      phoneNumberError: '',
      siteError:'',
      aboutError: '',
      technologicalStackError: '',
      projectDescriptionError: '',
    }
  }
  
  cansel = (e) => {
    e.preventDefault()
    this.setState({
      name: '',
      surname: '',
      bornDate: '',
      phoneNumber: '',
      site: '',
      about: '',
      technologicalStack: '',
      projectDescription: '',
      nameError: '',
      surnameError: '',
      bornDateError: '',
      phoneNumberError: '',
      siteError:'',
      aboutError: '',
      technologicalStackError: '',
      projectDescriptionError: '',
    })
  }

  save = (e) => {
    e.preventDefault()
    this.isValidName();
    this.isValidSurname();
    this.isValidDate();
    this.isValidPhone();
    this.isValidSite();
    this.isValidAbout();
    this.isValidTechnologicalStack();
    this.isValidProjectDescription();
  }

  isValidName = () => {
    this.setState({nameError: ''})
    if(FormValidation.isEpmty(this.state.name)) {
      this.setState({nameError:  FormValidation.messages.empty});
    } else if(FormValidation.isUpperCaseNameAndSurname(this.state.name)) {
      this.setState({nameError: FormValidation.messages.UpperCase});
    }
  }
  isValidSurname = () => {
    this.setState({surnameError: ''})
    if(FormValidation.isEpmty(this.state.surname)) {
      this.setState({surnameError: FormValidation.messages.empty});
    } else if(FormValidation.isUpperCaseNameAndSurname(this.state.surname)) {
      this.setState({surnameError: FormValidation.messages.UpperCase});
    }
  }
  isValidDate = () => {
    this.setState({bornDateError: ''});
    if(FormValidation.isEpmty(this.state.bornDate)) {
      this.setState({bornDateError: FormValidation.messages.empty});
    }
  }
  isValidPhone = () => {
    this.setState({phoneNumberError: ''});
    if(FormValidation.isEpmty(this.state.phoneNumber)){
      this.setState({phoneNumberError: FormValidation.messages.empty})
    }
  }
  isValidSite = () => {
    this.setState({siteError: ''});
    if(FormValidation.isEpmty(this.state.site)){
      this.setState({siteError: FormValidation.messages.empty})
    } else if(!FormValidation.isSite(this.state.site)) {
      this.setState({siteError: FormValidation.messages.url})
    }
  }
  isValidAbout = () => {
    this.setState({aboutError: ''});
    if(FormValidation.isEpmty(this.state.about)){
      this.setState({aboutError: FormValidation.messages.empty})
    }
  }
  isValidTechnologicalStack = () => {
    this.setState({technologicalStackError: ''});
    if(FormValidation.isEpmty(this.state.technologicalStack)){
      this.setState({technologicalStackError: FormValidation.messages.empty})
    }
  }
  isValidProjectDescription = () => {
    this.setState({projectDescriptionError: ''});
    if(FormValidation.isEpmty(this.state.projectDescription)){
      this.setState({projectDescriptionError: FormValidation.messages.empty})
    }
  }

  caunter = (string) => {
      return (<span style={{color: 'blue'}}>{`${string.length} / 600`}</span>)
  }
  message = (state, string) => {
    if(state.length < 6) {
      return this.caunter(state)
    } else {
      if(string === 'about') {return FormValidation.messages.limit}
      if(string === 'stack') {return FormValidation.messages.limit}
      if(string === 'discription') {return FormValidation.messages.limit}
    }
  }

  phoneMask = () => {
    if((this.state.phoneNumber.length === 1)) {
      this.setState({phoneNumber: `${this.state.phoneNumber[0]}-`})
      this.phoneNumber.current.ref.current.value = `${this.state.phoneNumber[0]}-}`
    }
    if((this.state.phoneNumber.length === 6)) {
      this.setState({phoneNumber: `${this.state.phoneNumber.slice(0, 6)}-`})
      this.phoneNumber.current.ref.current.value = `${this.state.phoneNumber.slice(0, 6)}-`
    }
    if((this.state.phoneNumber.length === 9)) {
      this.setState({phoneNumber: `${this.state.phoneNumber.slice(0, 9)}-`})
      this.phoneNumber.current.ref.current.value = `${this.state.phoneNumber.slice(0, 9)}-`
    }
  }
  isBackspace = (e) => {
    if(e.key !== 'Backspace') {
      this.phoneMask()
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.isBackspace)
    
  }
  componentDidUpdate() {
    document.addEventListener('keydown', this.isBackspace)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.isBackspace)
  }

  render() {

    return (
      <form className={style.Form}>
        <h1 className={style.title} >Создание анкеты</h1>
        <div className={style.secondPartOfForm}>
          <div>
            <Label for='name'>Имя</Label>
            <Input 
              type='text' 
              name='name'
              placeholder='Name' 
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value})} 
            />
            <ErrorLine>{this.state.nameError}</ErrorLine>
          </div>
          <div>
            <Label for='surname' >Фамилия</Label>
            <Input 
              type={'text'} 
              name='surname' 
              placeholder='Surname'
              value={this.state.surname}
              onChange={(e) => this.setState({surname: e.target.value})} 
            />
            <ErrorLine>{this.state.surnameError}</ErrorLine>
          </div>
          <div>
            <Label for='bornDate'>Дата рождения</Label>
            <Input 
              type='date'
              name='bornDate'
              placeholder='Born date' 
              value={this.state.bornDate}
              onChange={(e) => this.setState({bornDate: e.target.value})} 
            />
            <ErrorLine>{this.state.bornDateError}</ErrorLine>
          </div>
          <div>
            <Label for='phoneNumber' >Телефон</Label>
            <Input 
              type='tel' 
              name='phoneNumber' 
              placeholder='7-7777-77-77'
              maxLength="12"
              ref={this.phoneNumber}
              value={this.state.phoneNumber}
              onChange={(e) => this.setState({phoneNumber: e.target.value})} 
            />
            <ErrorLine>{this.state.phoneNumberError}</ErrorLine>
          </div>
        </div>
        <hr/>
        <div className={style.secondPartOfForm}>
          <div>
            <Label for='site' >Сайт</Label>
            <Input 
              type='text' 
              name='site' 
              placeholder='Your site'
              value={this.state.site}
              onChange={(e) => this.setState({site: e.target.value})}  
            />
            <ErrorLine>{this.state.siteError}</ErrorLine>
          </div>
          <div>
            <Label>О себе</Label>
            <Textarea 
              placeholder='About you'
              value={this.state.about}
              onChange={(e) => this.setState({about: e.target.value, aboutError: false})} 
            ></Textarea>
            <ErrorLine>
              {this.state.aboutError 
                ? FormValidation.messages.empty 
                : this.message(this.state.about, 'about')
              }
            </ErrorLine>
          </div>
          <div>
            <Label>Стек технологий</Label>
            <Textarea 
              placeholder='Technological stack'
              value={this.state.technologicalStack}
              onChange={(e) => this.setState({technologicalStack: e.target.value, technologicalStackError: false})} 
            ></Textarea>
            <ErrorLine>
              {this.state.technologicalStackError 
                ? FormValidation.messages.empty 
                : this.message(this.state.technologicalStack, 'stack')
              }
            </ErrorLine>
          </div>    
          <div>
            <Label>Описание последнего проекта</Label>
            <Textarea 
              placeholder='Clarifiting last project'
              value={this.state.projectDescription}
              onChange={(e) => this.setState({projectDescription: e.target.value, projectDescriptionError: false})}
            ></Textarea>
            <ErrorLine>
              {this.state.projectDescriptionError 
                ? FormValidation.messages.empty 
                : this.message(this.state.projectDescription, 'discription')
              }
            </ErrorLine>
          </div>      
        </div>
        <div className='buttonsContainer'>
          {/* Chose buttons backgroundColor. It should be primary, danger, warning or success */}
          <Button method={this.cansel} backgroundColor={'danger'} >Отмена</Button>
          <Button method={this.save} backgroundColor={'success'} >Сохранить</Button>
        </div>
      </form>
    )
  }
}

export default Form;
