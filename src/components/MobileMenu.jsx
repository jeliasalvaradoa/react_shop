import React from 'react';
import '@styles/MobileMenu.scss';


const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/clothes">Clothes</a>
        </li>
        <li>
          <a href="/electronics">Electronics</a>
        </li>
        <li>
          <a href="/furnitures">Furnitures</a>
        </li>
        <li>
          <a href="/toys">Toys</a>
        </li>
        <li>
          <a href="/others">Others</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>


  )
}

export default MobileMenu;