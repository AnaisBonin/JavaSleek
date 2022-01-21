import arrow from '../../assets/icons/arrow-blue.png'
;
import './ArrowUp.css';

const ArrowUp = ({ isDisplayed, setIsDisplayed }) => {
  const handleClick = () => {
    setIsDisplayed(!isDisplayed);
  }

  return (
    <button type="button" className='arrow-button' onClick={handleClick}>
      <img src={arrow} className={isDisplayed ? 'arrow-up' : 'arrow-down'} />
    </button>
  )
};

export default ArrowUp;
