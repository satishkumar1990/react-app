import React, { Component } from 'react';
import { FormControl, Col } from 'react-bootstrap';

export default class TextField extends Component {
    render() {
        const { props } = this;
        return (
            <Col sm={10}>
                <FormControl type={props.type} placeholder={props.name} onChange={props.selectedName} />
            </Col>
        )
    }
}