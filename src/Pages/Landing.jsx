import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <Container className='mt-5 d-flex  justify-content-center align-items-center'>
                <Row className='mt-4 w-100'>
                    <Col md={6}>
                        <h3>Welcome To <span className='text-danger'>Media Player</span></h3>

                        <p className='mt-4' style={{ fontSize: '18px', textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe sequi incidunt vero, sapiente, sunt, ad totam deleniti atque voluptas suscipit. Numquam velit dolor modi quam totam? Quos, sapiente laudantiu Commodi fugit accusantium nulla consequuntur accusamus quam rerum maiores quas, cumque corporis eligendi! Voluptatem expediconsequuntur quis pariatur, minus ducimus accusantium dolorem esse libero totam molestias pro reiciendis beatae quae! Et sequi, iure blanditiis molestias illum adipisci eos perspiciatis voluptates rem animi quia corrupti facere, autem eligendi quod odio vitae inventore tenetur! Numquam officia, ipsam iusto quos assumenda quasi. Quia</p>

                        <Link to={'/Home'}><button className='btn btn-danger mt-4'>Get Started</button></Link>
                    </Col>
                    <Col md={6} className='justify-content-center d-flex'>
                        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-55' />
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5 d-flex justify-content-center align-items-center'>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10} className='d-flex align-items-center justify-content-center flex-column p-5'>
                        <h4 className='mt-5'>Features</h4>
                        <Row className='mt-5'>
                            <Col md={4}>
                                <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0'>
                                    <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/22221956/file/original-fb5873b0f35445bcb7d3b5bcfa5bc18c.gif" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0'>
                                    <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/22221956/file/original-fb5873b0f35445bcb7d3b5bcfa5bc18c.gif" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0'>
                                    <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/22221956/file/original-fb5873b0f35445bcb7d3b5bcfa5bc18c.gif" height={'300px'} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>

            <Container className='mt-5 p-5 border border-secondary rounded'>
                <Row>
                    <Col md={6}>
                        <h1 className='text-danger'>Simple Fast And Everything</h1>
                        <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, incidunt laudantium quaerat maxime consequuntur unde odio.</p>
                        <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, incidunt laudantium quaerat maxime consequuntur unde odio.</p>
                        <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, incidunt laudantium quaerat maxime consequuntur unde odio.</p>
                    </Col>
                    <Col md={6}>
                        <iframe width="100%" height="420" src="https://www.youtube.com/embed/PGqltBCo6cU" title="L2E Empuraan Trailer (Malayalam) | Mohanlal | Prithviraj Sukumaran | Murali Gopy | March 27 Release" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Landing