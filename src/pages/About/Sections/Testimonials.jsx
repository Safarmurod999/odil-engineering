import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTestimonialsData } from "store/selectors/testimonials";
import { fetchTestimonials } from "store/slices/testimonialsSlice";
const Testimonials = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'uz');
    const testimonials = useSelector(selectTestimonialsData);

    useEffect(() => {
        dispatch(fetchTestimonials({}));
    }, [dispatch])
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
                        !testimonials.loading && testimonials.testimonialsList.data ? testimonials.testimonialsList.data.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <div key={item.id} className="testimonials__item">
                                        <div className="testimonials__item-content">
                                            <div className="testimonials__item-author h6">
                                                <span>{item["name_" + lang]}</span>

                                            </div>
                                            <p className='h6'>{item["message_" + lang]}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )
                        }) : testimonials.loading ? <div>Loading... </div> : ""
                    }
                </Swiper>
            </div>
        </section>)
}

export default Testimonials