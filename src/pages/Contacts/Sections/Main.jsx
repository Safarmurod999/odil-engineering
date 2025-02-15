import React from 'react'
import { useTranslation } from 'react-i18next'
const Main = () => {
    const { t } = useTranslation()
    return (
        <section className="contacts">
            <div className="h3 title">
                <span>
                    {t('contacts_title')}
                </span>
            </div>
            <div className="container">
                <div className='contacts__main'>
                    <p className='contacts__text'>
                        {t('contacts_text')}
                    </p>
                    <form className="contacts__form" data-aos="zoom-in">
                        <input type="text" className='contacts__input' placeholder={t('your_name')} />
                        <div className="contacts__row">
                            <input type="email" className='contacts__input' placeholder={t('your_email')} />
                            <input type="tel" className='contacts__input' placeholder={t('your_phone')} />
                        </div>
                        <textarea className='contacts__textarea' placeholder={t('your_message')}></textarea>
                        <button type='submit' className='contacts__btn'>{t('send')}</button>
                    </form>
                </div>
                <div className='contacts__right'>
                    <div className='contacts__data'>

                        <div>
                            <span className="contacts__data-title">
                                {t('our_phone')}
                            </span>
                            <br />
                            <a href="tel:+998951505527">+998 95 150 55 27 (Ташкент)</a>
                            <br />
                            <a href="tel:+998905008324">+998 90 500-83-24 (бесплатно)</a>
                        </div>
                        <div>
                            <span className="contacts__data-title">
                                {t('our_email')}
                            </span>
                            <a href="mailto:info@odil-engineering.uz">info@odil-engineering.uz
                            </a>
                        </div>
                        <div>
                            <span className="contacts__data-title">
                                {t('address')}
                            </span>
                            <p>{t('our_address')}</p>
                        </div>
                        <div>
                            <span className="contacts__data-title">
                                {t('company')}
                            </span>
                            <p>Odil Engineering LLC</p>
                        </div>
                    </div>
                    <div className='contacts__map'>
                        <iframe
                            src="https://yandex.uz/map-widget/v1/?display-text=odil%20engineering&from=api-maps&ll=69.178291%2C41.272867&mode=search&oid=27873495022&ol=biz&origin=jsapi_2_1_79&sll=69.178291%2C41.272867&sspn=0.031972%2C0.015023&text=odil%20engineering&z=15"
                            width="560"
                            height="400"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>)
}

export default Main