import React from 'react'
import intro from "../../../assets/videos/intro.mp4";
const Main = () => {
    return (
        <section className='main' data-aos="fade-up">
            <div className="container">
                <video autoPlay={true} preload='auto' loop={true} muted={true} playsInline={true} className="main__video">
                    <source src={intro} type="video/mp4" />
                    Your browser does not support the video tag. Please upgrade to a modern browser.
                </video>

                <div className="main__content">
                    <h1>ОБОРУДОВАНИЕ ДЛЯ АВТОМАТИЗАЦИИ СКЛАДА И ПРОИЗВОДСТВА</h1>
                    <p>Больше 20 лет мы проектируем и производим конвейерное оборудование. Гарантия 2 года и срок производства от 5 дней.</p>
                </div>
            </div>
        </section>
    )
}

export default Main