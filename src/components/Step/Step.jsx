import './Step.css';

import ArrowUp from '../ArrowUp/ArrowUp';

const Step = () => {
  return (
  <div className="step-container">
    <div className='step-number'>
      <p>1</p>
    </div>
    <div className="step-title">
      <h3>Lessiver les murs</h3>
    </div>
    <ArrowUp />
  </div>
  )
};

export default Step;
