import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonialsArray } from '../../../data/const'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
    const { t } = useTranslation()
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials__title title">
                    <span>
                        {t('feedbacks')}
                    </span>
                </div>
                <Swiper modules={[Navigation]}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        450: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                    className="testimonials__slider">
                    {
                        testimonialsArray.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div key={item.id} className="testimonials__item">
                                        <div className="testimonials__item-content">
                                            <div className="testimonials__item-author h6">
                                                <span>{item.name} , {item.position}</span>
                                                <span>{item.company}</span>
                                            </div>
                                            <p className='h6'>{item.text}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        })
                    }
                </Swiper>
            </div>
        </section>)
}

export default Testimonials