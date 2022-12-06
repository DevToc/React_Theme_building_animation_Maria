import React from 'react';
import { Container,Row,Stack,Col, Form, InputGroup, Button } from 'react-bootstrap';
 
import "./Subscribe.scss"

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <Container>
          <Row className='align-items-center'>
            <Col>
            <h3>
            SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p>
            A short sentence describing what someone will receive by subscribing


            </p>
            </Col>
            <Col>
              <Form>
                <InputGroup>
                <Form.Control placeholder='Enter your email address' type='email' className='emailaddress'>

                </Form.Control>
                <Button type='submit' className='btn-subscribe'>
                  Subscribe
                </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
      </Container>
    </section>
  );
}
 
 
export default Subscribe;