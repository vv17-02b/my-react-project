import React from "react";
// import "./Skills.scss"; // ✅ активуй SCSS якщо потрібно

const Skills = () => (
    <section className="skills">
        <div className="container">
            <div className="skills__left">
                <h2>Навички</h2>
                <ul className="skill-list">
                    <li>HTML</li>
                    <li>CSS / SCSS</li>
                    <li>JavaScript</li>
                    <li>Gulp</li>
                    <li>React</li>
                    <li>Figma</li>
                </ul>
            </div>
            <div className="skills__right">
                <h2>Загальні роботи</h2>
                <div className="skills__images">
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                        <img
                            key={index}
                            src={`${process.env.PUBLIC_URL}/assets/pictures/${num}.jpg`}
                            alt={`Image ${num}`}
                            style={{ "--i": index }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Skills;
