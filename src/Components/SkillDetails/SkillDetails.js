import React from 'react';
import Particles from 'react-particles-js';
import './SkillDetails.css';
import particlesConfig from '../Config/particlesConfig';

const SkillDetails = ({ skill }) => {
    return (
        <>
            <div className="details-bg">
                <Particles params={particlesConfig}></Particles>
            </div>
            <div className="container">
                <div className="row p-5 details-content">
                    <div className="col-md-4 col-12">
                        <h3 className="fw-bold text-uppercase fs-2 mb-3">{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                    <div className="col-md-6 offset-md-2 col-12">
                        <div className="row p-5">
                            <div className="col-6">
                                <a href={skill.url1}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={skill.avatar1} alt="df" className="img-thumbnail w-50 h-50" />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href={skill.url2}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={skill.avatar2} alt="pic" className="img-thumbnail w-50 h-50" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillDetails;