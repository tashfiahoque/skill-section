import React, { useEffect, useState } from 'react';
import skills from './fakeData1';
import SkillCard from '../SkillCard/SkillCard';
import SkillDetails from '../SkillDetails/SkillDetails';
import './Skill.css'

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
            <section id="skill" className="m-5 d-flex justify-content-center">
                <div className="container p-5">
                    <div className="row text-center skill-header">
                        <h3 className="skill-title">Moving skill</h3>
                        <h4 className="text-uppercase skill-description">How it works</h4>
                        <div className="row mt-5 skill-details">
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
            {
                filteredSkillByIcon.map(skill => <SkillDetails skill={skill} key={skill.id} />)
            }
        </>
    );
};

export default Skill;