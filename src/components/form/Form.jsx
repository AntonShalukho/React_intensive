import { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/button/Button';
import Label from '../UI/label/Label';
import style from './FormStyle.module.css'
import Textarea from '../UI/textarea/Textarea';

class Form extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      surname: '',
      bornDate: '',
      phoneNumber: '',
      site: '',
      about: '',
      technologicalStack: '',
      projectDescription: '',
    }
  }
  
  cansel(e) {
    e.preventDefault()
  }

  save(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form className={style.Form}>
        <h1 className={style.title} >Создание анкеты</h1>
        <div className={style.firstPartOfForm}>
          <div>
            <div className={style.q}>
              <Label for='name'>Имя</Label>
              <Input 
                type='text' 
                name='name'
                placeholder='Name' 
                onChange={(e) => this.setState({name: e.target.value})} 
              />
            </div>
            <Label for='bornDate'>Дата рождения</Label>
            <Input 
              type='date'
              name='bornDate'
              placeholder='Born date' 
              onChange={(e) => this.setState({bornDate: e.target.value})} 
            />
          </div>
          <div>
              <Label for='surname' >Фамилия</Label>
              <Input 
                type={'text'} 
                name='surname' 
                placeholder='Surname'
                onChange={(e) => this.setState({surname: e.target.value})}  
              />
              <Label for='phoneNumber' >Телефон</Label>
              <Input 
                type={'tel'} 
                name='phoneNumber' 
                placeholder='Phone number'
                onChange={(e) => this.setState({phoneNumber: e.target.value})}  
              />
          </div>
        </div>
        <hr/>
        <div className={style.secondPartOfForm}>
          <div className={style.e}>
            <Label for='site' >Сайт</Label>
            <Input 
              type='text' 
              name='site' 
              placeholder='Your site'
              onChange={(e) => this.setState({site: e.target.value})}  
            />
          </div>
          <div className={style.e}>
            <Label>О себе</Label>
            <Textarea 
              placeholder='About you'
              onChange={(e) => this.setState({about: e.target.value})} 
            ></Textarea>
          </div>
          <div className={style.e}>
            <Label>Стек технологий</Label>
            <Textarea 
              placeholder='You'
              onChange={(e) => this.setState({technologicalStack: e.target.value})} 
            ></Textarea>
          </div>    
          <div className={style.e}>
            <Label>Описание последнего проекта</Label>
            <Textarea 
              placeholder='Clarifiting last project'
              onChange={(e) => this.setState({projectDescription: e.target.value})} 
            ></Textarea>
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
