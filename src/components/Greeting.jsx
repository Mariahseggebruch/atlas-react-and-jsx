import React from 'react';
import dayTimeImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightTimeImage from '../assets/night.svg';

const Greeting = () => {
  const date = new Date();
  const hour = date.getHours();

  let imageSrc;
  let greetingText;

  if (hour >= 6 && hour < 12) {
    <img src={dayTimeImage} alt="day" />
    greetingText = 'Good Morning!';
  } else if (hour >= 12 && hour < 17) {
    <img src={dayTimeImage} alt="day" />
    greetingText = 'Good Afternoon!';
  } else if (hour >= 17 && hour < 21) {
    <img src={eveningImage} alt="evening" />
    greetingText = 'Good Evening!';
  } else {
    <img src={nightTimeImage} alt="night" />
    greetingText = 'Good Night!';
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt="Greeting image" />
      {greetingText}
    </h1>
  );
};

export default Greeting;
