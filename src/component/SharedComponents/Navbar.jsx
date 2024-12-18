import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
    background: transparent; /* Fully transparent */
    color: var(--text-color, black);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    /* Add a shadow and background on scroll */
    ${(props) =>
        props.isScrolled &&
        `
        background: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `}

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const Brand = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

    a {
        color: var(--text-color, black);
        text-decoration: none;
    }
`;

const LinksContainer = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 768px) {
        display: ${(props) => (props.isOpen ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        padding-top: 1rem;
        background: rgba(255, 255, 255, 0.95); /* White for mobile dropdown */
        position: absolute;
        top: 4rem;
        left: 0;
        padding-bottom: 1rem;
    }
`;

const LinkItem = styled.li`
    a {
        color: var(--text-color, black);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s, transform 0.3s, text-decoration 0.3s;

        &:hover {
            color: var(--hover-color, #f59e0b); /* Tailwind yellow-500 */
            text-decoration: underline; /* Simple hover effect */
            text-decoration-thickness: 2px;
        }
    }
`;

const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: var(--text-color, black);
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavBarContainer isScrolled={isScrolled}>
            <Brand>
                <Link to="/">Blem Productions</Link>
            </Brand>
            <HamburgerButton onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </HamburgerButton>
            <LinksContainer isOpen={isOpen}>
                <LinkItem><Link to="/">Home</Link></LinkItem>
                <LinkItem><Link to="/About">About</Link></LinkItem>
                <LinkItem><Link to="/Gallery">Gallery</Link></LinkItem>
                <LinkItem><Link to="/Contact">Contact</Link></LinkItem>
            </LinksContainer>
        </NavBarContainer>
    );
}

export default NavBar;
