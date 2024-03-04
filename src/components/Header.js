import React from 'react';
import "./css/header.css";
import { Outlet, Link, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header({ onLogout, toggleTheme  }){
    const location = useLocation();
    const cart = useSelector((state) => state.product.cart);

    return(
        <>
        <nav className="navbar navbar-expand-lg" style={{borderBottom:"1px solid #D6D5D5"}}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-amazon" style={{color:"black"}} viewBox="0 0 16 16">
                        <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z"/>
                        <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623"/>
                    </svg>
                    <h1>Exclusive</h1>
                </Link>
                <div className="collapse navbar-collapse d-flex d-none d-lg-block" id="navbarSupportedContent" style={{ justifyContent: "center" }}>
                    <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 d-lg-flex">
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
                    </ul>
                </div>
                <div class="form-check form-switch">
                    <input class="form-check-input theme-toggle-btn" type="checkbox" role="switch"  onClick={toggleTheme}/>
                </div>
                <div class="offcanvas offcanvas-start d-block d-lg-none" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasExampleLabel">Items</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr/>
                <div class="offcanvas-body d-block d-lg-none">
                <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 ">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link  ${location.pathname === '/' ? 'active' : 'text-dark'}`} aria-current="page">Home</Link>
                        </li>
                        <hr/>
                        <li className='nav-item'>
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : 'text-dark'}`}>About</Link>
                        </li>
                        <hr/>
                        <li className='nav-item'>
                            <Link to="/contact" className={`nav-link  ${location.pathname === '/contact' ? 'active' : 'text-dark'}`} >Contact</Link>
                        </li>
                        <hr/>
                        <li className='nav-item'>
                            <Link to="/login" className={`nav-link  ${location.pathname === '/blog' ? 'active' : 'text-dark'}`}>Signup</Link>
                        </li>
                        <hr/>
                    </ul>
                </div>
                </div>
                <div className='profileIconCont' tabIndex="0">
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" tabIndex="0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi text-dark profileIcon" viewBox="0 0 16 16">
                             <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        </button>
                        <ul class="dropdown-menu dropdownMenu">
                            <li className=''><a class="dropdown-item"><button className=' border-0' onClick={onLogout}>Logout</button></a></li>
                        </ul>
                    </div>
                </div>
                <Link to="/wishlist" className='float-right cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart text-dark me-4" viewBox="0 0 16 16">
                       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </Link>
                <Link to="/cart"> <div className='CartCountstyle'><span>{cart.length}</span></div></Link>
                <Link to="/cart" className='float-right cursor-pointer cartIcon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart3 headerCartIcon" style={{color:"black"}} viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation" tabIndex="0">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Header;