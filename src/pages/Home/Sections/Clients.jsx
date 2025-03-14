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
import { SkeletonCarousel } from '../../../components/ui/Skeletons/Skeleton';

const Clients = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const clients = useSelector(selectClientsData);

  useEffect(() => {
    dispatch(fetchClients({ page: 1, limit: 50 }));
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
          loop={true}
          navigation
        >
          {
            !clients.loading && clients?.clientsList?.data.length ?
              clients?.clientsList?.data.map(client => {
                if (client.is_active) {
                  return <SwiperSlide key={client.id} className='home__clients__slide' title={client.name}
                  >
                    <div className="home__clients__item">
                      <img src={`${BASE_URL}/${client.image}`} alt={client.name || "client image"} />
                    </div>
                  </SwiperSlide>
                }
              }
              ) : clients.loading ? <SkeletonCarousel /> : "No data"
          }
        </Swiper>
      </div>
    </section>)
}

export default Clients