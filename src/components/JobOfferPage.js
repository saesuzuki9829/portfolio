import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'

const JobOfferPage = () => {
    return(
        <Container>
      <Form>
        <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
      </Form>
    </Container>
    )
}

export default JobOfferPage
