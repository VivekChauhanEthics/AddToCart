import React from 'react';
import "./css/header.css";
import { Outlet, Link, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoImg from './images/header/LogoImage.png';

function Header({ onLogout, toggleTheme  }){
    const location = useLocation();
    const cart = useSelector((state) => state.product.cart);

    return(
        <>
        <nav className="navbar navbar-expand-lg" style={{borderBottom:"1px solid #D6D5D5"}}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={LogoImg} alt='' className='img-fluid Logo'/>
                    <h1>Exclusive</h1>
                </Link>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h3 className="offcanvas-title" id="offcanvasExampleLabel">Items</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body" style={{ justifyContent: "center" }}>
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 ">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link  ${location.pathname === '/' ? 'active' : 'text-dark HeaderNavItem'}`} aria-current="page">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : 'text-dark HeaderNavItem'}`}>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/contact" className={`nav-link  ${location.pathname === '/contact' ? 'active' : 'text-dark HeaderNavItem'}`} >Contact</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/signup" className={`nav-link  ${location.pathname === '/signup' ? 'active' : 'text-dark HeaderNavItem'}`}>Signup</Link>
                            </li>
                            <hr/>
                        </ul>
                    </div>
                </div>
                <div className="form-check form-switch d-none d-xl-block">
                    <input className="form-check-input theme-toggle-btn" type="checkbox" role="switch"  onClick={toggleTheme}/>
                </div>
                <div className='headerIconsCont'>
                    <div className='profileIconCont' tabIndex="0">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" tabIndex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi text-dark profileIcon" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                            </button>
                            <ul className="dropdown-menu dropdownMenu">
                                <li className=''><a className="dropdown-item"><button className=' border-0' onClick={onLogout}>Logout</button></a></li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/wishlist" className='float-right cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-heart text-dark wishlistIcon" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    </Link>
                    <Link to="/cart" className='float-right cursor-pointer CartCountstyleCont'>
                        <Link to="/cart"> <div className='CartCountstyle'><span>{cart.length}</span></div></Link>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-cart3 headerCartIcon" style={{color:"black"}} viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle" tabIndex="0">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Header;