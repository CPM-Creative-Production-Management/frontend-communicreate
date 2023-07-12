import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Button, Dropdown} from "semantic-ui-react";
import {SiAntdesign} from "react-icons/si";


function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>

                <Navbar.Brand className='ms-4'><SiAntdesign size='1.5em' className='me-2'/>Creative Production Management</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >

                    </Nav>


                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Dropdown pointing
                              text='Anup Bhowmik'
                              icon='user circle'
                              floating
                              labeled
                              button
                              className='icon'
                    >
                        <Dropdown.Menu>

                            <center>
                            <Dropdown.Item className='m-3' text='Azitech Soft'/>
                            </center>


                            <Dropdown.Divider/>
                            <Dropdown.Item icon='user circle' text='Your Account' onClick={() => {
                                // navigate("profile/")
                            }
                            }/>
                            <Dropdown.Item icon='tag'  text='Leads'/>

                            <Dropdown.Divider/>
                            <Dropdown.Item icon='log out' color='red' text='Logout'/>
                        </Dropdown.Menu>
                    </Dropdown>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;