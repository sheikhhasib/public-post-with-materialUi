import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className="bg-dark px-5">
                <Link to="/">
                    <Navbar.Brand href="#home" className="text-light">All Posts</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="text-light">
                        Signed in as: <a href="#login" className="text-light">Hasib Sheikh</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;