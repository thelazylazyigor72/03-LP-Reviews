import React, { useState } from 'react';
import people from './data';
//import the icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  //set the state value
  const [index,setIndex] = useState(0)
  //destructurization 
  const {name,job,image,text} = people[index]
  //helper function
  const checkNumber = num => {
    if (num > people.length - 1) {
      return 0
    } 
    if (num < 0) {
      return people.length - 1
    }
    return num
  }
  //event handler
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  //event handler
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  //event handler
  const randomPerson = () => {
    let newIndex = Math.floor(Math.random() * people.length)
    if (newIndex === index) {
      newIndex = index + 1
    }
    setIndex(checkNumber(newIndex))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
          Surprise Me
        </button>
    </article>
  );
};

export default Review;
