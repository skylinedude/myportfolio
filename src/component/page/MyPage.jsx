import React from 'react';
import './myStyle.css'
import Typed from 'typed.js';
import image1 from '../assets/bg-img.png'
import image2 from '../assets/project-1.png'
import resume from '../assets/resume.pdf'

export const MyPage = () => {

    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['React developer', 'Web developer', 'backend developer'],
            typeSpeed: 50,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <>
            <header>
                <nav>
                    <div className="left">Manoj's Portfolio</div>
                    <div className="right">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#portfolio">Projects</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                <section className="firstSection" id="home">
                    <div className="leftSection">
                        Hi, My name is <span className="myName">Manoj</span>
                        <div>I'm a passionate</div>
                        <div>full stack developer</div>
                        <span ref={el}></span>
                        <div className="buttons">
                            <a href={resume} className="btn">Download Resume</a>
                            <a href="https://github.com/skylinedude" className="btn">Visit GitHub</a>
                        </div>
                    </div>
                    <div className="rightSection">
                        <img src={image1} alt="Background" />
                    </div>
                </section>
                <hr className="hr1" />
                <section className="secondSection">
                    <h1 id="skills">Skills</h1>
                    <div className="box-container">
                        <div className="box">
                            <h2>Web Technologies</h2>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h2>Backend Technologies</h2>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Java</li>
                                <li>Spring Boot</li>
                                <li>Python</li>
                                <li>Django</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h2>Database Technologies</h2>
                            <ul>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="box-hr" />

                    <div className="myPortfolio">
                        <h1 id="portfolio">My Portfolio</h1>
                        </div>
                    <div className="p-box-container">
                    <div className="p-box">
                            <h2>Skyline Utils</h2>
                            <img src={image2} alt="Skyline Utils" />
                            <p>Skyline Utils(text utils) app is a versatile tool designed to perform a variety of text
                                processing and manipulation tasks.</p>
                        </div>
                        {/* <div className="p-box">
                            <h2>Skyline Utils</h2>
                            <img src={image2} alt="Skyline Utils" />
                            <p>Skyline Utils(text utils) app is a versatile tool designed to perform a variety of text
                                processing and manipulation tasks.</p>
                        </div> */}
                       
                    </div>
                    
                </section>
            </main>
            <footer>
                <div className="flex-footer">
                    <div className="footer-rights">
                        Copyright &#169; <a href="https://skylinedude.github.io/manoj-portfolio/">Manoj's Portfolio</a> | All rights reserved |
                    </div>
                </div>
            </footer>
        </>
    );
};
