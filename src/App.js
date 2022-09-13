import './App.css';
import { Component } from 'react';
import Input from './UI/Input/Input';
import Button from './UI/button/Button';

class App extends Component {
  state = {

  }
  
  cansel(e) {
    e.preventDefault()
  }

  save(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form className='App'>
        <div className='title' >Создание анкеты</div>
        <Input type={'text'} label={'Имя'} />
        <Input type={'text'} label={'Фамилия'} />
        <Input type={'text'} label={'Дата рождения'} />
        <Input type={'text'} label={'Телефон'} />
        <Input type={'text'} label={'Сайт'} />
        <Input type={'text'} label={'О себе'} />
        <Input type={'text'} label={'Стек технологий'} />
        <Input type={'text'} label={'Описание последнего проекта'} />
        <div className='buttonsContainer'>
          <Button method={this.cansel} text={'Отмена'} />
          <Button method={this.save} text={'Сохранить'} />
        </div>
      </form>
    )
  }
}

export default App;

// А ниже такие поля как «Имя», «Фамилия»,  «Дата рождения»,

// «Телефон», «Сайт»,  «О себе», «Стек технологий», «Описание последнего проекта»
  
// .   В конце должен быть блок с кнопками «Отмена» и «Сохранить».