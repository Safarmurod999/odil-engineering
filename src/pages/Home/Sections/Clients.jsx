import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BASE_URL } from "../../../data/const";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectClientsData } from "store/selectors/clients";
import { fetchClients } from "store/slices/clientsSlice";

const Clients = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'uz');
  const clients = useSelector(selectClientsData);
  console.log(clients);

  useEffect(() => {
    dispatch(fetchClients({}));
  }, [dispatch])
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
            !clients.loading && clients?.clientsList?.data.length ?
              clients?.clientsList?.data.map(client =>
                <SwiperSlide key={client.id} className='clients__slide' title={client.name}
                >
                  <div className="clients__item">
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