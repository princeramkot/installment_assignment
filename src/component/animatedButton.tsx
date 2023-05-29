import React, { useState } from 'react';
import './Button.css'; // Import CSS file for styling

interface AnimatedButton{
    title: string;
}
const AnimatedButton: React.FC<AnimatedButton> = ({title}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showChildInstallment, setShowChildInstallment] = useState(false);

  const handleButtonClick = () => {
    setShowChildInstallment(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <button 
      onClick={handleButtonClick}
      className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      value={title}
     
    >
     {title}
    </button>
  );
};

export default AnimatedButton;
