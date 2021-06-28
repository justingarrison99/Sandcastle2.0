import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from '../components/Hero';
import Table from 'react-bootstrap/Table'

function GigPage(props) {

    return (
        <Container fluid >
            <Hero  title={props.title} subTitle={props.subTitle} />
            <Row className="py-5">
                <Col className="py-5">
                    <Table striped border hover>
                        <thead>
                            <tr className="hero-text text-center">
                                <th>
                                    Event Name
                                </th>
                                <th>
                                    Date
                                </th>
                                <th>
                                    Location
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hero-text text-center">
                                <td>
                                    Frogmore Jam
                                </td>
                                <td>
                                    08-26-2021
                                </td>
                                <td>
                                    Bowen's Island
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
export default GigPage;