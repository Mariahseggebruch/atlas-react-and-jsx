import React from 'react';

const Greeting = () => {
  const date = new Date();
  const hour = date.getHours();

  let imageSrc;
  let greetingText;

  if (hour >= 6 && hour < 12) {
    imageSrc = '/src/assets/day.svg';
    greetingText = 'Good Morning!';
  } else if (hour >= 12 && hour < 17) {
    imageSrc = '/src/assets/day.svg';
    greetingText = 'Good Afternoon!';
  } else if (hour >= 17 && hour < 21) {
    imageSrc = '/src/assets/evening.svg';
    greetingText = 'Good Evening!';
  } else {
    imageSrc = '/src/assets/night.svg';
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
