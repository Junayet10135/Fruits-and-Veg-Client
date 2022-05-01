import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='navBar sticky-top'>
            <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Fruits And Veg
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>HOME</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user?
                                    <NavLink onClick={handleSignOut}  className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>SignOut</NavLink>
                                    :
                                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/login'>LOGIN</NavLink>
                            }
                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;