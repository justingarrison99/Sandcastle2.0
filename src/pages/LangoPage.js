import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

import Hero from '../components/Hero';

import lango from '../assets/images/lango.png'
import tracklist from '../assets/images/tracklist.jpg';
import apple from '../assets/images/apple.png';
import spotify from '../assets/images/spotify.png';
import youtube from '../assets/images/youtube.png';
import soundcloud from '../assets/images/soundcloud.png';

function LangoPage(props) {
    return (
        <Container fluid>
            <Hero title={props.title} subTitle={props.subTitle} />
            <Row>
                <Carousel className="py-auto caro-pad">
                    <Carousel.Item>
                        <Image
                            className="d-block caro-image"
                            src={lango}
                            fluid
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block caro-image"
                            src={tracklist}
                            fluid
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 className="hero-text text-center">Stream</h1>
                <Row className="text-center">
                    <Col>
                    <a href="https://music.apple.com/us/album/lango-single/1545324646" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={apple} rounded />
                    </a>
                    </Col>
                    <Col>
                    <a href="https://open.spotify.com/album/3beXD3QpDiF30nF4Cu6DPO?si=-X35AQlTTGuuizPhEKvl8w&dl_branch=1&nd=1" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={spotify} rounded />
                    </a>
                    </Col>
                    <Col>
                    <a href="https://www.youtube.com/watch?v=khRSpgXqiNE&list=UUErup9Pvw6GFX6QAsMjrKYw" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={youtube} rounded />
                    </a>
                    </Col>
                    <Col>
                    <a href="https://soundcloud.com/sandcastlebandofficial/sets/lango" target="_blank" rel="noreferrer">
                        <Image className="stream-image" src={soundcloud} rounded />
                    </a>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
}
export default LangoPage;