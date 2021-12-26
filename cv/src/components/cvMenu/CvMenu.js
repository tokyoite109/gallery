import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';


const CvMenu = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container style={{display:'flex', justifyContent:'center'}}>
                <Nav>
                    <Nav.Link href="/">Education / Work Experience</Nav.Link>{"   "}
                    <Nav.Link href="/Projects">Projects</Nav.Link>{"   "}
                    <Nav.Link href="/Stack">Stack</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default CvMenu