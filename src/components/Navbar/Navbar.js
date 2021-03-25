import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink, SpecialNavButton, Marka} from './Navbar.elements';
import MarkadoLogoComplete from '../../assets/images/keppa-logo.svg';
import MarkadoLogoCompleteWhite from '../../assets/images/keppa-logo-w.svg';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
   
    const [scrolledDown, setNavbar] = useState(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', changeBackground);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ size: 22 }}>
            <Nav scrolledDown={scrolledDown}>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={scrolledDown ? MarkadoLogoComplete : MarkadoLogoCompleteWhite} alt="logo" />
                    </NavLogo>
                    <MobileIcon onClick={handleClick} scrolledDown={scrolledDown}>
                        {click ? <RiCloseLine /> : <RiMenuFill />}
                    </MobileIcon>
                    
                    <NavMenu onClick={handleClick} click={click}>

                        <NavItem>
                            <NavLink scrolledDown={scrolledDown} to='/'>About</NavLink>
                        </NavItem>
                    
                        <NavItem>
                            <NavLink scrolledDown={scrolledDown} to='/'>Products</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink scrolledDown={scrolledDown} to='/'>Docs</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
