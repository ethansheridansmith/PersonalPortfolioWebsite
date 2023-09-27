import React from 'react';
import Typed from 'react-typed';
import '../styles/Home.css';

function Home() {
    const name = "Ethan Sheridan-Smith";
    const incorrectName = "Ethan Sheridn";

    return (
        <div className="home-container">
            <div className='title-container'>
                <h1 className="home-title">
                    <Typed 
                        strings={[
                            incorrectName,
                            "Ethan ",
                            name
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1000}
                        loop={false}  // stop the typing from looping
                    />
                </h1>
            </div>
            <div className='body-container'>
                <p className='home-text-about'>
                    Welcome to <span className="emphasis">my digital realm</span>. This portfolio unveils my journey in <span className="emphasis">Programming</span> and Design. Navigate to see my <span className="emphasis">Projects</span>, delve into my <span className="emphasis">Education</span>, or discover my professional <span className="emphasis">Experience</span>. If you wish to collaborate or chat, please <span className="emphasis-link">reach out</span>.
                </p>
            </div>
            <div className="image-container">
                <img src="..\image\IMG_2918 Copy.JPG" alt="Ethan Sheridan-Smith" className="profile-image" />
                <div className="overlapping-text">Ethan Sheridan-Smith</div>
            </div>
            <div>
              <p>
                
              </p>
            </div>
        </div>
    );
}

export default Home;
