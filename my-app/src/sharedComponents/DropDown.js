import React, { Component } from 'react';
import { FormControl, Col } from 'react-bootstrap';

export default class DropDown extends Component {
    render() {
        const { props } = this;
        return (
            <Col sm={10} >
                <FormControl componentClass={props.type} onChange={props.selectedState} >
                    {props.states.map((state, key) => {
                        return (
                            <option key={key} value={state}>{state}</option>
                        )
                    })}
                </FormControl>
            </Col>
        )
    }
}