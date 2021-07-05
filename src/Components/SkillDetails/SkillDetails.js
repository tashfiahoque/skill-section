import React from 'react';
import './SkillDetails.css';

const SkillDetails = ({ skill }) => {
    return (
        <section id="skill-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>{skill.description}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <a href={skill.url1}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={skill.avatar1} alt="df" className="w-50 h-50" />
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href={skill.url2}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={skill.avatar2} alt="pic" className="w-50 h-50" />
                                </a>
                            </div>
                            <div className="col-md-4"></div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
};

export default SkillDetails;