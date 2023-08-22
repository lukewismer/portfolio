import React from 'react';
import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const programmer_icon = require('../../assets/rb_programmer.png');




const Home = () => {
    return (
      <div className="wrapper">
          <Navbar />
          <div className="home">
            <div className="content-container">
                <div className="title-container">
                    <div className="title">
                        <div className="subheader">
                            Hi my name is,
                        </div>
                        <div className="header">
                            Luke Wismer
                        </div>
                        <div className="post-header-job">
                            Software Engineer
                        </div>
                        <div className="post-header-education">
                            3rd Year Computing Science, Specialization in Software Practice
                        </div>
                    </div>
                    <div className="picture">
                        <img src={programmer_icon}></img>
                    </div>
                </div>
                <hr />
                <div className="card-container">
                    <div className="cards-title">
                        Skills
                    </div>
                    <div className="cards">
                        <Card
                        title="Web Development"
                        description="React, NodeJS, Java Spring, Firebase, AWS, Express, HTML/CSS"
                        borderColor="#00FFFF"
                        />
                        <Card
                        title="API Development"
                        description="C#, Azure, .NET, Python, Java, Postman, Cloud Functions"
                        borderColor="#00FFFF"
                        />
                        <Card
                        title="Data Science"
                        description="Python, R, Pandas, Tensorflow, SciKit Learn, Deep Learning"
                        borderColor="#00FFFF"
                        />
                        <Card
                        title="And Much More"
                        description="Unit Testing, Sage Intacct, C, Sports Analytics, UML, Git"
                        borderColor="#00FFFF"
                        />
                    </div>
                
                </div>
                <div className="about-container">
                    <div className="about-title">
                        About Me
                    </div>
                    <div className="about-section">
                        I am a passionate and driven person. My whole childhood revolved around sports where I played Hockey at the provincial level along with Basketball, and Soccer.
                        Eventually, as my youth sports careers came to an end I became immersed in my newfound passion of programming. My first project developing an NHL sports analytics website 
                        helped advance both my passion and skills. Throughout my coursework and work experience I have developped many different skills across different areas of computer science.
                        I am continuously building side projects to follow my interests in life and apply my expertise in programming to these areas. This can be highlited by my fantasy Hockey
                        deep learning AI model that I built to help my friends and I predict which fantasy hockey players to select. I am very fortunate to have many mentors along the road. Initially, my Uncle who is a software engineer helped guide my journey into the landscape. Additionally, my
                        boss of 12 months (spread across 2 co-op terms) has been incredibly supportive and helpful. My fantasy interests are working with sports analytics and developing deep-learning AI prediction models, specifically working with Hockey or Football.

                    </div>
                </div>
                <Footer />
            </div>
          </div>
      </div>
    );
  };
  

export default Home;
