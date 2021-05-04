import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        Copyright &copy; Muhamad Farid Ridho Rambe
                        <br></br>
                        Contact me on: &ensp;
                        <br></br>
                        <Col>
                            <a href="https://www.linkedin.com/in/muhamad-farid-ridho-rambe/" target="blank"><i className="fab fa-linkedin"></i></a> &ensp;
                            <a href="https://www.facebook.com/farid.r.rambe/" target="blank"><i class="fab fa-facebook-f"></i></a> &ensp;
                            <a href="https://www.twitter.com/fuxrid/" target="blank"><i class="fab fa-twitter"></i></a>
                        </Col>  
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
