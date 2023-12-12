import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>
        <Link to='/'>
          <span className='span-mother'>
            <span>C</span>
            <span>a</span>
            <span>r</span>
            <span>d</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>a</span>
            <span>t</span>
            <span>c</span>
            <span>h</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </span>
          <span className='span-mother2'>
            <span>C</span>
            <span>a</span>
            <span>r</span>
            <span>d</span>
            <span>&nbsp;</span>
            <span>M</span>
            <span>a</span>
            <span>t</span>
            <span>c</span>
            <span>h</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </span>
        </Link>
      </h1>
    </header>
  )
};

export default Header;