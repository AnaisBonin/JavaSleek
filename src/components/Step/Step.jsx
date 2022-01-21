import './Step.css';

import ArrowUp from '../ArrowUp/ArrowUp';
import { useState } from 'react';

const Step = ({ title, description, order, video }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="step-container">
      <div className="step-head">
        <div className="step-number">
          <p>{order}</p>
        </div>
        <div className="step-title">
          <h3>{title}</h3>
        </div>
        <ArrowUp isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
      </div>
      {isDisplayed && (
        <div className="step-details">
          <p>
            {description}
          </p>
          <div className="step-video">
          <iframe width="560" height="315" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            {video}
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
