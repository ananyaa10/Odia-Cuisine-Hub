import React, {useState}from 'react'
import {NavLink} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
// import Logo from '../../assets/Navbar/Home_Oasis Logo.png'
import './Navbar.css'
import ResNavbar from './Responsive_navbar';

const Navbar = () => {
  const [showMenu,setShowMenu]= useState(false);
  const RemoveShowMenu = ()=>{
    return setShowMenu(false);
  }

    return (
      <>
        <header className={`header ${window.location.pathname === '/recipes' ? 'fixed-top' : ''}`}>
          <nav>
            <div className='Logo'>
            <img class="ae-img" title="Odia Cuisine Hub" alt="Odia Cuisine Hub homepage" src="..\assets\logo.png"></img>

            </div>
            <ul className='Navlinks'>

              <li><NavLink exact activeClassName="active_nav_link" to="/">Home</NavLink></li>
              <li><NavLink exact activeClassName="active_nav_link" to="/menu">Menu</NavLink></li>
              <li><NavLink exact activeClassName="active_nav_link" to="/about">About</NavLink></li>
              
              <li><NavLink exact activeClassName="active_nav_link" to="/recipes">Recipes</NavLink></li>
            </ul>
            <GiHamburgerMenu className='Menu_btn' onClick={()=>{setShowMenu(!showMenu)}}/>

          </nav>
        </header>
        {
          showMenu && <ResNavbar RemoveShowMenu={RemoveShowMenu}/>
        }
        
        </>
    )
}

export default Navbar