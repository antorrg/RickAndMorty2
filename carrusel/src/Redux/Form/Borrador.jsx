// App.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('home');

  const renderComponent = () => {
    switch (currentComponent) {
      case 'blog':
        return <Blog />;
      case 'post':
        return <Post />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar onNavButtonClick={(component) => setCurrentComponent(component)} />
      {renderComponent()}
    </div>
  );
};

export default App;
// Navbar.js

import React from 'react';

const Navbar = ({ onNavButtonClick }) => {
  return (
    <div>
      <button onClick={() => onNavButtonClick('home')}>Home</button>
      <button onClick={() => onNavButtonClick('blog')}>Blog</button>
      <button onClick={() => onNavButtonClick('post')}>Post</button>
    </div>
  );
};

export default Navbar;
