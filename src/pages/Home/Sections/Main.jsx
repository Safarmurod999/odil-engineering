import React from 'react'
import intro from "../../../assets/videos/intro.mp4";
import { useTranslation } from 'react-i18next';
const Main = () => {
    const { t } = useTranslation();
    return (
        <section className='main' data-aos="fade-up">
            <div className="container">
                <video autoPlay={true} preload='auto' loop={true} muted={true} playsInline={true} className="main__video">
                    <source src={intro} type="video/mp4" />
                    Your browser does not support the video tag. Please upgrade to a modern browser.
                </video>

                <div className="main__content">
                    <h1>{t('main_title')}</h1>
                    <p>{t('main_text')}</p>
                </div>
            </div>
        </section>
    )
}

export default Main