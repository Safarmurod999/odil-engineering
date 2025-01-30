import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { clientsArray } from "../../../data/const";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation()
  return (
    <section className="clients">
      <div className="container">
        <div className="h3 title">
          <span>
            {t('clients')}
          </span>
        </div>
        <Swiper modules={[Navigation]}
          className={'clients__wrapper'}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
        >
          {
            clientsArray.map(client =>
              <SwiperSlide key={client.id} className='clients__slide' title={client.title}
              >
                <div className="clients__item">
                  <img src={client.image} alt={client.name} />
                </div>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </section>)
}

export default Clients