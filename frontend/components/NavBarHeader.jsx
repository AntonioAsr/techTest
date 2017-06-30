import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class NavBarHeader extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#"><img src="./app/images/miDrive.svg" alt="miDrive"/></a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem eventKey={1} href="Lessons">Lessons</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                </Nav>
            </Navbar>
        )
    }

}

ReactDOM.render(<NavBarHeader className="navBar"/>, document.getElementById("Navbar"));

export default NavBarHeader;


