import React from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectClientsData } from "store/selectors/clients";
import { fetchClients } from "store/slices/clientsSlice";
import { BASE_URL } from "../../../data/const";
import { SkeletonLogos } from '../../../components/ui/Skeletons/Skeleton';

const Partners = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const clients = useSelector(selectClientsData);

    useEffect(() => {
        dispatch(fetchClients({}));
    }, [dispatch])
    return (
        <section className="clients">
            <div className="container" data-aos="fade-up">
                <div className="clients__title title">
                    <span>
                        {t('clients')}
                    </span>
                </div>
                <p className='clients__text' data-aos="fade-up">
                    {t('clients_text')}
                </p>
                <ul className='clients__list'>
                    {
                        !clients.loading && clients?.clientsList?.data.length ?
                            clients?.clientsList?.data.map((client) => {
                                return (
                                    <li key={client.id} className='clients__item' data-aos="fade-up">
                                        <img src={`${BASE_URL}/${client.image}`} alt={client.name ||"client image"} />
                                    </li>
                                )
                            }) : clients.loading ? <SkeletonLogos/> : "No data"
                    }

                </ul>
            </div>
        </section>)
}

export default Partners