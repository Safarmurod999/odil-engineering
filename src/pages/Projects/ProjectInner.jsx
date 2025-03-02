import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjectData } from "store/selectors/project";
import { fetchProjectDetail } from "store/slices/projectSlice";
import { useLanguage } from 'utils/context';

const ProjectInner = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { lang } = useLanguage();
    const { projectData, loading } = useSelector(selectProjectData);

    useEffect(() => {
        dispatch(fetchProjectDetail(id));
    }, [dispatch, id])
    return (
        <section className="projects__inner">
            <div className="container">
                {
                    !loading && projectData ? <div className='projects__inner-item'>
                        <div className="h3">
                            {
                                projectData["title_" + lang]
                            }
                        </div>
                        <div className='projects__inner-video'>
                            <iframe width="560" height="315"
                                src={projectData?.link}
                                title="Odil Engineering"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="projects__inner-content">
                            <p>
                                {
                                    projectData["description_" + lang]
                                }
                            </p>
                        </div>
                    </div> : <div>Loading...</div>
                }
            </div>
        </section>)
}

export default ProjectInner