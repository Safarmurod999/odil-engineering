import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import main from "../../../assets/images/products/conveyer-cornered/image.png";
import view_1 from "../../../assets/images/products/conveyer-cornered/4k/view-1.png";
import view_2 from "../../../assets/images/products/conveyer-cornered/4k/view-2.png";

import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesData } from "store/selectors/categories";
import { fetchCategoriesDetail } from "store/slices/categoriesSlice";
import { selectProductsData } from "store/selectors/products";
import { fetchProductsDetail } from "store/slices/productsSlice";
import { useParams } from 'react-router';
import { BASE_URL } from '../../../data/const';
const Main = () => {
    const { t } = useTranslation();
    const { product_id } = useParams();
    const dispatch = useDispatch();
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'uz');
    const { productData, loading } = useSelector(selectProductsData);
    console.log(productData);

    useEffect(() => {
        dispatch(fetchProductsDetail(product_id));
    }, [dispatch, product_id])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <section className="product">
            <div className="product__title title">
                <span>{productData["name_" + lang]}</span>
            </div>
            <div className="container">
                <div className="product__main">
                    <div className="product__images">
                        {
                            productData?.images?.length > 0 ? <>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    spaceBetween={15}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Thumbs, EffectFade, Navigation]}
                                    effect="fade"
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    className="product__swiper"
                                >
                                    {
                                        productData?.images.map(el => {
                                            return <SwiperSlide key={el?.id}>
                                                <div className="product__swiper-slide">
                                                    <img src={`${BASE_URL}/${el?.src}`} alt='image' />
                                                </div>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={'auto'}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="product__thumbs"
                                >
                                    {
                                        productData?.images.map(el => {
                                            return <SwiperSlide key={el?.id} className='product__thumbs-slide'>
                                                <img src={`${BASE_URL}/${el?.src}`} alt='thumb image' />
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </> : <div className="product__alternative">
                                <img src={productData?.image} />
                            </div>
                        }
                    </div>
                    <div className="product__description">
                        <div className="product__description-title">
                            <span>{t('description')}</span>
                        </div>
                        <div className="product__description-text">
                            <p>{productData["description_" + lang]}</p>
                        </div>
                    </div>
                    <div className="product__description">
                        <div className="product__description-title">
                            <span>{t('about')}</span>
                        </div>
                        <div className="product__description-text">
                            <p>
                                Мы производим полный спектр конвейерного оборудования и систем управления.
                                При этом мы осуществляем полный цикл производства, начиная от индивидуального
                                проектирования отдельного конвейера и заканчивая установкой и запуском
                                технологических линий конвейеров на объекте.
                                <br />
                                Наш многолетний опыт и знание конвейерной отрасли позволяют нам предложить
                                опробованные и проверенные стандартные элементы или индивидуальные решения с
                                полноценной системой управления и программным обеспечением, управлением проектом,
                                установкой и технической поддержкой под конкретные требования заказчика.
                                <br />
                                Модульная архитектура обеспечивает быстрое производство, простоту сборки и
                                монтажных работ. В случае необходимости возможно изменение конфигурации и
                                размеров конвейера, а также добавление дополнительных модулей с наименьшими затратами.
                                <br />
                                Завод компании «Конвейермаш» оснащен современным производственным оборудованием с ЧПУ.
                            </p>
                        </div>
                    </div>
                    <div className="product__description">
                        <div className="product__description-title">
                            <span>{t('service')}</span>
                        </div>
                        <div className="product__description-text services">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="96.438px" height="97.685px" viewBox="0 0 96.438 97.685" enableBackground="new 0 0 96.438 97.685" xmlSpace="preserve">
                                <g>
                                    <g>
                                        <path fill="none" stroke="#2846e6" strokeWidth="0.9728" d="M16.029,4.187C13.167,1.326,8.252,1.559,5.106,4.705L3.008,6.803
			                                    c-3.147,3.147-3.381,8.063-0.52,10.924l26.706,26.707l13.54-13.542L16.029,4.187z"></path>
                                    </g>
                                    <polygon fill="none" stroke="#2846e6" strokeWidth="0.9907" points="79.882,76.579 59.808,56.505 54.362,61.953 74.435,82.024 
                                            78.592,89.187 88.385,95.224 93.079,90.529 87.042,80.737 	"></polygon>
                                    <path fill="none" stroke="#2846e6" d="M82.62,30.222l-9.839-7.354l1.45-12.197l13.783-5.915c-8.206-6.31-20.019-5.584-27.378,2.041
                                            c-5.749,5.957-7.182,14.479-4.392,21.727L17.665,67.103c-4.297-0.308-8.692,1.218-11.918,4.56
                                            c-2.188,2.266-3.521,5.047-4.011,7.936l9.626-4.132l7.19,5.376l-1.06,8.91L7.421,94.074c5.997,4.612,14.626,4.081,20.004-1.489
                                            c3.645-3.777,4.907-8.964,3.852-13.729l38.064-38.064c7.202,2.238,15.368,0.436,20.961-5.361c2.996-3.104,4.822-6.906,5.49-10.862
                                            L82.62,30.222z"></path>

                                    <rect x="27.549" y="37.183" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.5786 37.6232)" fill="none" stroke="#2846e6" width="19.151" height="3.281"></rect>
                                    <g>
                                        <line fill="none" stroke="#2846e6" strokeWidth="0.9845" x1="9.048" y1="10.747" x2="32.864" y2="34.563"></line>
                                        <g>
                                            <line fill="none" stroke="#2846e6" strokeWidth="0.9845" x1="5.677" y1="14.119" x2="29.493" y2="37.935"></line>
                                            <line fill="none" stroke="#2846e6" strokeWidth="0.9845" x1="12.419" y1="7.375" x2="36.236" y2="31.191"></line>
                                        </g>
                                    </g>
                                    <g>
                                        <path fill="none" stroke="#2846e6" d="M62.952,35.837c1.167,1.167,1.167,3.076,0,4.243L31.369,71.664
			c-1.167,1.167-3.076,1.167-4.243,0l-1.415-1.414c-1.167-1.167-1.167-3.075,0-4.242l31.584-31.584c1.167-1.167,3.076-1.167,4.243,0
			L62.952,35.837z"></path>
                                    </g>

                                </g>
                            </svg>
                            <p>
                                Мы оказываем услуги по монтажу и обслуживанию конвейерного оборудования.
                                Наша сервисная служба обеспечит правильную установку конвейеров и их
                                периодическое техническое обслуживание, чтобы гарантировать долгую и
                                надежную работу оборудования.
                            </p>
                        </div>
                    </div>
                    <div className="product__order">
                        <div className="product__order-title">
                            <span>
                                {t('order')}
                            </span>
                        </div>
                        <div className="product__order-list">
                            <div className="product__order-item">
                                <div className="product__order-image">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="76.369px" height="88.184px" viewBox="0 0 76.369 88.184" enableBackground="new 0 0 76.369 88.184" xmlSpace="preserve">
                                        <g id="form">
                                            <rect x="25.014" y="27.075" fill="none" stroke="#000000" strokeWidth="1.0613" width="26.342" height="34.034"></rect>
                                            <rect x="28.277" y="32.67" fill="none" stroke="#000000" strokeWidth="1.0613" width="19.931" height="3.729"></rect>
                                            <rect x="28.277" y="39.081" fill="none" stroke="#000000" strokeWidth="1.0613" width="19.931" height="3.729"></rect>
                                            <rect x="28.277" y="45.374" fill="none" stroke="#000000" strokeWidth="1.0613" width="19.931" height="10.841"></rect>
                                        </g>
                                    </svg>
                                </div>
                                <div className="h6">
                                    {t('contact_form')}
                                </div>
                                <a href='/contacts'>
                                    {t('contact_managers')}
                                </a>
                            </div>
                            <div className='product__order-item'>
                                <div className="product__order-image">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="76.369px" height="88.184px" viewBox="0 0 76.369 88.184" enableBackground="new 0 0 76.369 88.184" xmlSpace="preserve">
                                        <g id="phoneicon">
                                            <path fill="none" stroke="#000000" strokeWidth="1.0613" d="M24.521,45.458l2.707-3.463v-1.483c0,0-0.553-1.366-1.6-3.723
                                        s-1.366-3.403-1.366-3.403l-0.873-0.437c0,0-2.24-0.114-2.763,0c-0.525,0.118-4.335,2.679-4.277,6.663
                                        c0.059,3.986,1.599,7.593,4.596,11.17c2.997,3.581,6.341,7.419,11.489,9.744c5.148,2.329,7.998,3.172,10.995,1.836
                                        c2.997-1.34,4.302-2.768,4.684-3.696C48.776,57.068,48.346,55,48.346,55s-1.775-1.046-3.812-2.095
                                        c-2.037-1.047-3.344-1.745-4.041-1.63c-0.7,0.118-1.778,1.92-2.271,2.417c-0.495,0.492-1.31,2.036-2.153,2.036
                                        c-0.843,0-3.926-1.514-6.543-3.955C26.907,49.327,24.116,46.619,24.521,45.458z"></path>
                                            <g>
                                                <path fill="none" stroke="#C2C2C2" strokeWidth="1.8711" d="M33.979,26.786c4.202-0.001,8.436,1.349,11.984,4.165
                                            c3.878,3.075,6.237,7.344,7.009,11.865"></path>
                                                <path fill="none" stroke="#000000" strokeWidth="1.0613" d="M58.522,41.867c-0.996-5.84-4.065-11.345-9.071-15.315
                                            c-4.581-3.634-10.046-5.389-15.472-5.387"></path>
                                                <path fill="none" stroke="#000000" strokeWidth="1.0613" d="M33.977,31.929c3.082-0.001,6.187,0.989,8.79,3.053
                                            c2.844,2.256,4.573,5.386,5.138,8.702"></path>
                                                <path fill="none" stroke="#000000" strokeWidth="1.0613" d="M52.972,42.817c-0.771-4.521-3.131-8.791-7.009-11.865
                                            c-3.548-2.815-7.782-4.167-11.984-4.165"></path>
                                            </g>
                                        </g>

                                    </svg>
                                </div>
                                <div className="h6">
                                    {t('call_us')}
                                </div>
                                <div>
                                    <a href="tel:8 495 150 55 27"> +99895 150 55 27</a> <br />
                                    <a href="tel:8 800 500-83-24"> +99890 500-83-24</a>
                                </div>
                            </div>
                            <div className="product__order-item">
                                <div className="product__order-image">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="76.369px" height="88.184px" viewBox="0 0 76.369 88.184" enableBackground="new 0 0 76.369 88.184" xmlSpace="preserve">
                                        <g id="mail">
                                            <rect x="19.423" y="31.2" fill="none" stroke="#000000" strokeWidth="1.0613" width="37.523" height="25.785"></rect>
                                            <polyline fill="none" stroke="#000000" strokeWidth="1.0613" points="19.423,31.2 38.184,44.094 56.944,31.2 	"></polyline>
                                        </g>
                                    </svg>
                                </div>
                                <div className="h6">
                                    {t('write_us')}
                                </div>
                                <a href="mailto:info@odil-engineering.uz">info@odil-engineering.uz</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__right">
                    <div className="product__media">
                        <div className="product__media-title">
                            <span>{t('media')}</span>
                        </div>
                        <div className="product__media-list">
                            {
                                productData?.media?.length > 0 ? productData?.media?.map(el => {
                                    return <div className="product__media-item" key={el?.id}>
                                        <iframe src={el?.link} title="video" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                    </div>
                                }) : <div className="product__media-video">
                                    <img src={productData?.image} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Main