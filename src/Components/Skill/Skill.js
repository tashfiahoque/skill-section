import React, { useEffect, useState } from 'react';
import skills from './fakeData1';
import SkillCard from '../SkillCard/SkillCard';
import SkillDetails from '../SkillDetails/SkillDetails';
import './Skill.css';


const Skill = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [descriptionByIcon, setDescriptionByIcon] = useState({
        title: "html"
    });

    const [filteredSkillByIcon, setFilteredSkillByIcon] = useState([]);

    useEffect(() => {
        const filteredResult = skills.filter(skill => skill.title === descriptionByIcon.title);
        setFilteredSkillByIcon(filteredResult);
    }, [descriptionByIcon])

    return (
        <>
            <section id="skill" className="m-3 d-flex justify-content-center">
                <div className="container">
                    <div className="row skill-header p-5">
                        <ul className="mt-5 ms-5">
                            <li className="skill-title text-warning text-uppercase fs-2">
                                <h5>How do you know about my different skills?</h5>
                            </li>
                        </ul>
                        <div className="row justify-content-between">
                            <div className="col-4">
                                <h3 className="text-white skill-description ms-4 fs-3 fw-bold">Check Out My Skills</h3>
                            </div>
                            <div className="col-4 offset-4">
                                <a href="https://drive.google.com/file/d/1rsdjRvMcLzpI2dJen-YRSZIWsIKcVTRa/view?usp=sharing"
                                    target="_blank" rel="noopener noreferrer"><button className="btn btn-warning resume-btn">Contact me</button></a>
                                <div className="btn-arrow"></div>
                                <div className="long-arrow-right"></div>
                            </div>

                        </div>

                        <div className="row skill-details mt-2 p-5">
                            {
                                skills.map(skill => <SkillCard
                                    key={skill.id}
                                    skill={skill}
                                    toggleState={toggleState}
                                    toggleTab={toggleTab}
                                    setDescriptionByIcon={setDescriptionByIcon} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section id="skill-details">
                {
                    filteredSkillByIcon.map(skill => <SkillDetails skill={skill} key={skill.id} />)
                }
            </section>
        </>
    );
};

export default Skill;