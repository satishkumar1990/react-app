import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Button, Col } from 'react-bootstrap';
import DropDown from './sharedComponents/DropDown';
import TextField from './sharedComponents/TextField';
import TextArea from './sharedComponents/TextArea';

export default class Flexi extends Component {
  render() {
    const { config } = this.props;
    return (
      <div >
        <Form horizontal>

          {config && config.map((item, key) => {
            return (
              <FormGroup key={key} >
                <Col componentClass={ControlLabel} sm={2}>
                  {item.label}
                </Col>
                <RenderTemplates element={item} {...this.props} />
              </FormGroup>
            )
          })}

          <FormGroup >
            <Col smOffset={2} sm={10}>
              <Button onClick={this.props.onSubmit}>Submit</Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    );
  }
}

class RenderTemplates extends Component {
  render() {
    const { element } = this.props;
    return (
      <div>
        {(element.component === 'DropDown') ?
          <DropDown {...element} selectedState={this.props.selectState} />
          : (element.component === 'TextArea') ?
            <TextArea {...element} selectedArea={this.props.selectArea} />
            : <TextField {...element} selectedName={this.props.selectName} />
        }
      </div>
    )
  }
}