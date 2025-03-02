import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BASE_URL } from "../../../data/const";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectClientsData } from "store/selectors/clients";
import { fetchClients } from "store/slices/clientsSlice";

const Clients = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const clients = useSelector(selectClientsData);

  useEffect(() => {
    dispatch(fetchClients({}));
  }, [dispatch])
  return (
    <section className="home__clients">
      <div className="container">
        <div className="h3 title">
          <span>
            {t('clients')}
          </span>
        </div>
        <Swiper modules={[Navigation]}
          className={'home__clients__wrapper'}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation
        >
          {
            !clients.loading && clients?.clientsList?.data.length ?
              clients?.clientsList?.data.map(client =>
                <SwiperSlide key={client.id} className='home__clients__slide' title={client.name}
                >
                  <div className="home__clients__item">
                    <img src={`${BASE_URL}/${client.image}`} alt={client.name} />
                  </div>
                </SwiperSlide>
              ) : clients.loading ? <div>Loading... </div> : ""
          }
        </Swiper>
      </div>
    </section>)
}

export default Clients