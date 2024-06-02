import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Tooltip.css';

const Tooltip = ({ children, text }) => {
  const tooltipElement = (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );

  return ReactDOM.createPortal(tooltipElement, document.body);
};

export default Tooltip;
