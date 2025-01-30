import React from 'react'
import { Link } from 'react-router'
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation()
    return (
        <section className="contact">
            <div className="container">
                <div data-aos="fade-right">
                    <p>
                        {t('projecting')}
                    </p>
                    <div className='h4'>
                        {t('projecting_text')}
                    </div>
                </div>
                <Link to="/contacts" className='h3' data-aos="fade-left">
                    {t('projecting_link')} <FaArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Contact