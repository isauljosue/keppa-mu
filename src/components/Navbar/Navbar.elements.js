import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
background: ${({scrolledDown}) => (scrolledDown ? '#fff' : 'rgba(168, 161, 255,0)')};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
transition: all 0.2s ease-in-out;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;

export const NavLogo = styled(Link)`
color: ${({scrolledDown}) => (scrolledDown ? '#000' : '#fff')};
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({scrolledDown}) => (scrolledDown ? '#444' : 'rgba(255,255,255,0.75)')};
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh; 
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.4s ease;
    background: #fff;
}
`;

export const NavItem = styled.li`
height: 80px;

@media screen and (max-width: 960px) {
    width:100%;

    &:hover {
        border:none;
    }
}
`;

export const NavLink = styled(Link)`
color: ${({scrolledDown}) => (scrolledDown ? '#8000ff' : 'rgba(255,255,255,1)')};
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
font-weight: 600;

&:hover {
    color: ${({scrolledDown}) => (scrolledDown ? '#a953ff' : 'rgba(255,255,255,0.75)')};
}

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #000;


    &:hover {
        color: #8000ff;
    }

}`;

export const SearchInput = styled.input`
padding: 11px 0px 11px 10px;
font-size: 17px;
outline: none;
border: none;
border-radius: 0 18px 18px 0;
width:320px;
float: left;
background: ${({scrolledDown}) => (scrolledDown ? 'rgba(240,240,240,1)' : 'rgba(255,255,255,0.2)')};
transition: all 0.2s ease-in-out;
color: ${({scrolledDown}) => (scrolledDown ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,1)')};


&::-webkit-search-cancel-button,
&::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

&::placeholder {
    color: ${({scrolledDown}) => (scrolledDown ? '#75827f' : 'rgba(255,255,255,0.75)')};
}

@media screen and (max-width: 1280px) {
    width:10px;
    display:none;
}
`;