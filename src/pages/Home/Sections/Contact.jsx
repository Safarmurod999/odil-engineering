import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div data-aos="fade-right">
                    <p>
                        Проектирование конвейеров
                    </p>
                    <div className='h4'>
                        Мы профессионально разработаем проект конвейерной линии,
                        предложим наиболее подходящий вариант оборудования,
                        установим его  и обучим ваших сотрудников
                    </div>
                </div>
                <Link to="/contacts" className='h3' data-aos="fade-left">
                    Свяжитесь с нами сейчас <FaArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Contact