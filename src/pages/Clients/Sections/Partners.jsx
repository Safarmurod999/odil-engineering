import React from 'react'
import { clientsArray } from '../../../data/const'
import { useTranslation } from 'react-i18next'

const Partners = () => {
    const { t } = useTranslation()
    return (
        <section className="clients">
            <div className="container" data-aos="fade-up">
                <div className="clients__title title">
                    <span>
                        {t('clients')}
                    </span>
                </div>
                <p className='clients__text' data-aos="fade-up">
                    {t('clients_text')}
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