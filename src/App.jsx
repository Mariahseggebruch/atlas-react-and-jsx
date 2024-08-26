import React from 'react';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Header />
      <Section title="What is React?">
        React is a JavaScript library for building user interfaces. It is a component-based framework that allows you to create reusable UI components and manage the state of your application efficiently. React is known for its performance, flexibility, and large community support.
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Component-based architecture for reusability and maintainability</li>
          <li>Virtual DOM for efficient updates and performance</li>
          <li>Declarative syntax for intuitive development</li>
          <li>Large and active community with abundant resources and support</li>
          <li>Ability to build both web and mobile applications with React Native</li>
        </ul>
      </Section>
    </div>
  );
}

export default App;
