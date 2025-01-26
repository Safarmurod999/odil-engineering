import React from 'react'
import { clientsArray } from '../../../data/const'

const Partners = () => {
    return (
        <section className="clients">
            <div className="container" data-aos="fade-up">
                <div className="clients__title title">
                    Наши клиенты
                </div>
                <p className='clients__text' data-aos="fade-up">
                    Нашей компанией реализовано более двух тысяч различных проектов для
                    различных заказчиков  — больших и маленьких. Мы работаем над любыми
                    заказами с одинаковым усердием. <br />
                    На этой странице вы можете
                    увидеть логотипы некоторых наших клиентов.
                </p>
                <ul className='clients__list'>
                    {
                        clientsArray.map((client) => {
                            return (
                                <li key={client.id} className='clients__item' data-aos="fade-up">
                                    <img src={client.image} alt={client.title} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>)
}

export default Partners