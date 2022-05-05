import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                                    <div>
                                    
                                        {/* <NavLink onClick={handleSignOut} className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>SIGNOUT</NavLink>
                                        <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>MANAGE ITEM</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>ADD ITEM</NavLink>
                                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>MY ITEMS</NavLink> */}
                                        
                                        <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                                            <NavDropdown.Item onClick={handleSignOut} to='/'>SIGN OUT</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/inventory'>MANAGE ITEM</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/addProduct'>ADD PRODUCT</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item to='/myItem'>MY ITEMS</NavDropdown.Item>
                                        </NavDropdown>
                                        
                                    </div>
                                    
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