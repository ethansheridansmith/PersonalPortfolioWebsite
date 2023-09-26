import React from 'react';
import Typed from 'react-typed';
import '../styles/Home.css';

function Home() {
  const name = "Ethan Sheridan-Smith";
  const incorrectName = "Ethan Sheridn-Smith";
  const whoops = ", Whoops!";

  return (
      <div className="home-container">
        <div className='title-container'>
          <h1 className="home-title">
              <Typed 
                  strings={[
                      incorrectName,
                      incorrectName + whoops,
                      "Ethan ",
                      name,
                      name,
                      name,
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  backDelay={1000}
                  loop
              />
          </h1>
        </div>
        <div className='body-container'>
          <p className='home-text-about'>
            Hello! Welcome to <span className="emphasis">my personal portfolio</span>. I crafted this space to showcase my <span className="emphasis">Projects</span>, <span className="emphasis">Education</span>, and <span className="emphasis">Experience</span>. Interested in getting in touch? Here's <span className="emphasis-link">how you can contact me</span>.
            <br /><br />
            Working on this portfolio sharpened my skills in <span className="emphasis">CSS</span>, <span className="emphasis">HTML</span>, and, most importantly, <span className="emphasis">JavaScript</span>. It's been a delightful and educational journey. Feel free to explore and enjoy!
          </p>
        </div>
      </div>
  );
}


export default Home;
