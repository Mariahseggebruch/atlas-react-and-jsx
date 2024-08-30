import React from 'react';
import profilePicture from '../assets/your-profile-picture.jpg'

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={profilePicture} alt='headshot' />
      <p>
        Hi, I'm Mariah Jo. I'm a full-stack student in my 5th trimester. I'm passionate about working with Python, Javascript, and React. After graduation, I hope to pursue a career in Project Management or Tech Sales. In my free time, I enjoy seeing live music across the country, camping or hiking, and playing with my soon to be 1 year old corgi, King Arthur.
      </p>
    </div>
  );
};

export default AboutMe;
