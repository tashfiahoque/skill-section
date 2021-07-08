import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import './SkillCard.css';



const Skillcard = ({ skill, toggleState, toggleTab, setDescriptionByIcon }) => {

    return (
        <>
            <div className="col-md-2 skill-card"
                onClick={() => {
                    toggleTab(skill.id)
                    setDescriptionByIcon({ title: skill.title })
                }}>
                <div className={toggleState === skill.id ? 'text-center skill-container p-4 special'
                    : 'text-center skill-container p-4'}>
                    {skill.title === "mongo" ? <Icon className="skill-icon" icon={skill.icon} color="green" width="3em" height="3em" /> :
                        <FontAwesomeIcon className="skill-icon" icon={skill.icon}
                            color={skill.color} size="3x"></FontAwesomeIcon>}
                    <h6 className="mt-4 text-uppercase">{skill.title}</h6>
                </div>
            </div>
        </>
    );
};

export default Skillcard;