import React from 'react'
import { projectsArray } from '../../../data/const'
import { Link, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next';

const Main = () => {
    const navigate = useNavigate();
    const { t } = useTranslation()
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
                        projectsArray.map((item) => (
                            <li className='projects__item' key={item.id} data-aos="fade-up"
                            //  onClick={() => navigate(`/projects/${item.id}`)}
                            >
                                <div className='projects__video'>
                                    <iframe width="560" height="315"
                                        src={item.video}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                                <div className="projects__content">
                                    <div className="h6">
                                        {item.title}
                                    </div>
                                    <p>
                                        {item.description}
                                    </p>
                                    <Link to={`/projects/${item.id}`} className="projects__link">
                                        Подробнее
                                    </Link>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>)
}

export default Main