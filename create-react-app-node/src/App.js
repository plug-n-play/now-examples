import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date.js');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Create React App + Node.js API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/zeit/now-examples/blob/master/create-react-app-node"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://nodejs.org/en/">Node.js</a>{' '}
        function. See{' '}
        <a href="/api/date.js">
          <code>api/date.js</code> for the Date API with Node.js
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;