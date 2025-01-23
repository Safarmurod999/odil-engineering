import React from 'react'

const Forms = () => {
  return (
    <section className="forms">
      <div className="container">
        <form className="forms__form">
          <h2 className="forms__title">Остались вопросы?</h2>
          <div className="forms__row">
            <input type="text" className='forms__input' placeholder='Как Вас зовут?' />
            <input type="email" className='forms__input' placeholder='Ваша почта' />
            <input type="tel" className='forms__input' placeholder='Ваш телефон' />
          </div>
          <textarea className='forms__textarea' placeholder='Ваше сообщение'></textarea>
          <button type='submit' className='forms__btn'>Отправить</button>
        </form>
      </div>
    </section>)
}

export default Forms