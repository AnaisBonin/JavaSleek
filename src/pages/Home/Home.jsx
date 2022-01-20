import React from 'react';
import './Home.css';
import painting from '../../assets/images/painting.jpg'
import Shelf from '../../assets/images/Shelf.jpg'
import WoodenFloor from '../../assets/images/WoodenFloor.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import carpentry from '../../assets/images/carpentry.jpg'
import garden from '../../assets/images/garden.jpg'
// import { Link } from "react-router-dom";

const Home = () => {
  return <main>
    <div className='recipes-all'>
      <h1>Choose your daily recipes</h1>
      <div className='daily-recipes'>
        <div className='recipes'>
          {/* <Link to=""> */}
            <img
              className='recipes-img'
              src={painting}
              alt='recipes-img'/>
            <p>Painting</p>
          {/* </Link> */}
        </div>
        <div className='recipes'>
          {/* <Link to=""> */}
            <img
              className='recipes-img'
              src={Shelf}
              alt='recipes-img'/>
            <p>Shelf</p>
          {/* </Link> */}
        </div>
        <div className='recipes'>
          {/* <Link to=""> */}
            <img
              className='recipes-img'
              src={WoodenFloor}
              alt='recipes-img'/>
            <p>Wooden Floor</p>
          {/* </Link> */}
        </div>
      </div>
      <h1>Choose your project</h1>
      <div className='productClass'>
        <div className='product'>
        {/* <Link to=""> */}
          <img
            className='product-img'
            src={kitchen}
            alt='kitchen'/>
          <p>Kitchen</p>
        {/* </Link> */}
        </div>
        <div className='product'>
        {/* <Link to=""> */}
          <img
            className='product-img'
            src={bathroom}
            alt='bathroom'/>
          <p>Bathroom</p>
        {/* </Link> */}
        </div>
        <div className='product'>
        {/* <Link to=""> */}
        <img
            className='product-img'
            src={carpentry}
            alt='carpentry'/>
          <p>Carpentry</p>
        {/* </Link> */}
        </div>
        <div className='product'>
        {/* <Link to=""> */}
        <img
            className='product-img'
            src={garden}
            alt='garden'/>
          <p>Garden</p>
        {/* </Link> */}   
        </div>             
        </div>
    </div>
  </main>;
};

export default Home;
