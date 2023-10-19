import React from 'react';
import './ThoughtText.css'; 

const ThoughtText = ({ text }) => {
  return (
    <div className="thought-bubble">
      <p>{text}</p>
    </div>
  );
};

export default ThoughtText;
