import './Step.css';

import ArrowUp from '../ArrowUp/ArrowUp';
import { useState } from 'react';

const Step = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <div className="step-container">
      <div className="step-head">
        <div className="step-number">
          <p>1</p>
        </div>
        <div className="step-title">
          <h3>Lessiver les murs</h3>
        </div>
        <ArrowUp isDisplayed={isDisplayed} setIsDisplayed={setIsDisplayed} />
      </div>
      {isDisplayed && (
        <div className="step-details">
          <p>
            Text that explains what to do Text that explains what to do Text
            that explains what to do Text that explains what to do Text that
            explains what to do
          </p>
          <div className="step-video">video</div>
        </div>
      )}
    </div>
  );
};

export default Step;
