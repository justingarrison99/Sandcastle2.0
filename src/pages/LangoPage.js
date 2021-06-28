import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import lango from '../assets/images/lango.png'
import tracklist from '../assets/images/tracklist.jpg';

import apple from '../assets/images/apple.png';
import spotify from '../assets/images/spotify.png';
import youtube from '../assets/images/youtube.png';
import soundcloud from '../assets/images/soundcloud.png';

function LangoPage() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={lango}
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={tracklist}
                                fluid
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <Row>
                        <h1 className="hero-text text-center">Stream</h1>
                        <Col className="py-5 offset-2">
                            <a href="https://www.instagram.com/sandcastlebandofficial/" target="_blank">
                                <Image className="stream-image" src={apple} rounded />
                            </a>
                            <a href="https://www.facebook.com/SandcastleBandOfficial/" target="_blank">
                                <Image className="stream-image" src={spotify} rounded />
                            </a>
                            <a href="https://www.tiktok.com/@sandcastlebandofficial" target="_blank">
                                <Image className="stream-image" src={youtube} rounded />
                            </a>
                            <a href="https://www.tiktok.com/@sandcastlebandofficial" target="_blank">
                                <Image className="stream-image" src={soundcloud} rounded />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default LangoPage;