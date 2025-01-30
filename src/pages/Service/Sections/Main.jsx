import React from 'react'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation()
    return (
        <section className="service">
            <div className="container">
                <div className="title">
                    <span>
                        {t('service')}
                    </span>
                </div>
                <div className="h5" data-aos="zoom-out">{t('why_service')}</div>
                <p data-aos="zoom-out">
                    {t('service_text_1')}
                </p>
                <br />
                <p data-aos="zoom-out">
                    {t('service_text_2')}
                </p>
                <br />
                <p data-aos="zoom-out">
                    {t('service_text_3')}
                </p>
                <div className='service__list'>
                    <div data-aos="fade-right">
                        <div className="h5">
                            {t('service_list_1')}
                        </div>
                        <ul>
                            <li>
                                {t('service_item_1')}
                            </li>
                            <li>
                                {t('service_item_2')}
                            </li>
                            <li>
                                {t('service_item_3')}
                            </li>
                            <li>
                                {t('service_item_4')}
                            </li>
                        </ul>
                    </div>
                    <div data-aos="fade-left">
                        <div className="h5">
                            {t('service_list_2')}
                        </div>
                        <ul>
                            <li>
                                {t('service_item_5')}
                            </li>
                            <li>
                                {t('service_item_6')}
                            </li>
                            <li>
                                {t('service_item_7')}
                            </li>
                            <li>
                                {t('service_item_8')}
                            </li>
                        </ul>
                    </div>
                </div>
                <p>
                    {t('service_last')}
                </p>
            </div>
        </section>)
}

export default Main