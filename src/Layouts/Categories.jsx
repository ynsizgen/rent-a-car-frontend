import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
export default function Categories() {
    return (
        <div>
            <Navbar className="navbar-categories" bg="light" expand="lg">
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/cars' >Kiralık Araba</Nav.Link>
                        <Nav.Link as={NavLink} to="/economyCars">Ekonomik Kiralık Araba</Nav.Link>
                        <Nav.Link as={NavLink} to="/confortCars">Konfor Kiralık Araba</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}
