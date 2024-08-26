import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import OpenLink from './components/OpenLink';
import CopyLink from './components/CopyLink';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';

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
      <Section title="Helpful Resources">
        <HelpfulResource
          label="Official React Documentation"
          link="https://reactjs.org/"
        />
        <HelpfulResource
          label="React Tutorial on Scrimba"
          link="https://scrimba.com/learn/react"
        />
        <HelpfulResource
          label="React Hooks Tutorial on MDN"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"
        />
        <AboutMe/>
      </Section>
    </div>
  );
}

export default App;
