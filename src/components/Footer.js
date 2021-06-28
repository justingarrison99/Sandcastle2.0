import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import github from '../assets/images/github.png'
function Footer() {
    return (
        <footer className="mt-5">
            <Container fluid>
                <Row className="border-top justify-content-between p-0 hero-text">
                    <Col className="p-0" md={3} sm={12}>
                        Sandcastle
                    </Col>
                    <Col className="p-0 d-flex justify-content-end hero-text" md={3}>
                        Developed by Justin Garrison__
                        <a href="https://github.com/justingarrison99" target="_blank" rel="noreferrer">
                            <Image className="github-image" src={github} rounded />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;