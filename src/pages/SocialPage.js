import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import Image from 'react-bootstrap/Image';


import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import tiktok from '../assets/images/tiktok.png';


function SocialPage(props) {
    return (
        <Container fluid >
            <Hero title={props.title} subTitle={props.subTitle} />
            <Row className="social-pad text-center">
                <Col>
                    <a href="https://www.instagram.com/sandcastlebandofficial/" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={instagram} rounded />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.facebook.com/SandcastleBandOfficial/" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={facebook} rounded />
                    </a>
                </Col>
                <Col>
                    <a href="https://www.tiktok.com/@sandcastlebandofficial" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={tiktok} rounded />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
export default SocialPage;