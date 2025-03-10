import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useLanguage } from 'utils/context';
import { useDispatch, useSelector } from "react-redux";
import { selectProjectData } from "store/selectors/project";
import { fetchProject } from "store/slices/projectSlice";
import { SkeletonCard } from '../../../components/ui/Skeletons/Skeleton';

const Main = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const { lang } = useLanguage();
    const projects = useSelector(selectProjectData);
    useEffect(() => {
        dispatch(fetchProject({}));
    }, [dispatch])
    return (
        <section className="projects">
            <div className="container">
                <h2 className="projects__title title">
                    <span>
                        {t('projects_title')}
                    </span>
                </h2>
                <p className='projects__text'>
                    {t('projects_text')}
                </p>
                <ul className="projects__list">
                    {
                        !projects.loading && projects?.projectList?.data.length ?
                            projects?.projectList?.data.map((item) => {
                                if (item.is_active) {
                                    return (
                                        <li className='projects__item' key={item.id} data-aos="fade-up"
                                        >
                                            <div className='projects__video'>
                                                <iframe width="560" height="315"
                                                    src={item?.link}
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen>
                                                </iframe>
                                            </div>
                                            <div className="projects__content">
                                                <div className="h6">
                                                    {item["title_" + lang]}
                                                </div>
                                                <p>
                                                    {item["description_" + lang]}
                                                </p>
                                                <Link aria-label='project-link' to={`/projects/${item.id}`} className="projects__link">
                                                    {t('more')}
                                                </Link>
                                            </div>
                                        </li>
                                    )
                                }
                            }) : projects.loading ? <SkeletonCard /> : "No data"
                    }

                </ul>
            </div>
        </section>)
}

export default Main