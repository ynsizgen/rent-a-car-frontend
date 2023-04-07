import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Categories() {
    return (
        <div>
            <Navbar className="navbar-categories" bg="light" expand="lg">
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/cars">Kiralık Araba</Nav.Link>
                        <Nav.Link href="/economyCars">Ekonomik Kiralık Araba</Nav.Link>
                        <Nav.Link href="/confortCars">Konfor Kiralık Araba</Nav.Link>
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
