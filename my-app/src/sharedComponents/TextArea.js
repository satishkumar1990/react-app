import React, { Component } from 'react';
import { FormControl, Col } from 'react-bootstrap';

export default class TextArea extends Component {
    render() {
        const { props } = this;
        return (
            <Col sm={10} >
                <FormControl value={props.selectedValues} componentClass={props.type} onChange={props.selectedArea} />
            </Col>
        )
    }
}