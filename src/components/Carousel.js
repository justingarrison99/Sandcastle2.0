import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import lango from "../assets/images/lango.png"
import gigs from "../assets/images/Gig.jpg"
import socials from "../assets/images/sandyskull.png"

import Card from '../components/Card'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [
                {
                    id: 0,
                    title: "Lango",
                    subTitle: "Our first EP",
                    imgSrc: lango,
                    link: "/lango",
                    selected: false

                },
                {
                    id: 1,
                    title: "Gigs",
                    subTitle: "See when we're playing next",
                    imgSrc: gigs,
                    link: "/gigs",
                    selected: false

                },
                {
                    id: 2,
                    title: "Socials",
                    subTitle: "Follow us on Social Media!",
                    imgSrc: socials,
                    link: "/socials",
                    selected: false

                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return (
                <Col>
                    <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
                </Col>
            );
        })
    }

    render() {

        return (
            <Container fluid>
                <Row className="mx-5">
                    {this.makeItems(this.state.items)}
                </Row>

            </Container>
        );
    }
}
export default Carousel;