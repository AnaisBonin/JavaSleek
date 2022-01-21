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
          <div className="step-video">{video}</div>
        </div>
      )}
    </div>
  );
};

export default Step;
