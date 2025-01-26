import React from 'react'
import { useParams } from 'react-router';
import { projectsArray } from "../../data/const";
const ProjectInner = () => {
    const { id } = useParams();
    const data = projectsArray.find(item => item.id == id);
    return (
        <section className="projects__inner">
            <div className="container">
                <div className='projects__inner-item'>
                    <div className="h3">
                        {
                            data.title
                        }
                    </div>
                    <div className='projects__inner-video'>
                        <iframe width="560" height="315"
                            src={data.video}
                            title="Odil Engineering"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="projects__inner-content">
                        <p>
                            {
                                data.description
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>)
}

export default ProjectInner