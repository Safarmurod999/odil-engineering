import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { clientsArray } from "../../../data/const";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="h3">
          Клиенты
        </div>

        <Swiper modules={[Navigation]}
          className={'clients__wrapper'}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
        >
          {
            clientsArray.map(client =>
              <SwiperSlide key={client.id} className='clients__slide' title={client.title}>
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