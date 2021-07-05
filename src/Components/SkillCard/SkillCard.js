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
                    {skill.title === "mongo" ? <Icon icon={skill.icon} color="green" width="4em" height="4em" /> :
                        <FontAwesomeIcon className="skill-icon" icon={skill.icon}
                            color={skill.color} size="4x"></FontAwesomeIcon>}
                    <h6 className="pt-3 text-uppercase">{skill.title}</h6>
                </div>
            </div>
        </>
    );
};

export default Skillcard;