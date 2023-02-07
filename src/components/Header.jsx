import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {

        setToggle(!toggle);

    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={() => { 
                setToggleMobileMenu(!toggleMobileMenu)
                toggleOrders && setToggleOrders(!toggleOrders)
                }}/>
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="./">All</a>
                    </li>
                    <li>
                        <a href="./clothes">Clothes</a>
                    </li>
                    <li>
                        <a href="./electronics">Electronics</a>
                    </li>
                    <li>
                        <a href="./furnitures">Furnitures</a>
                    </li>
                    <li>
                        <a href="./toys">Toys</a>
                    </li>
                    <li>
                        <a href="./others">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>josealvarado@example.com</li>
                    <li className="navbar-shopping-cart" onClick={() => {
                        setToggleOrders(!toggleOrders)
                        toggleMobileMenu && setToggleMobileMenu(!toggleMobileMenu)

                    }}>
                        <img src= {shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
            {toggleMobileMenu && <MobileMenu />}
            
        </nav>
    );

}
export default Header;