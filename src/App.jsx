import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';

class App extends Component {
  constructor(...args){
    super(...args);
    this.state = {
      panel_open: false,
      phone_input_value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.phone_input_value.length;
    if (length > 0) return null;
    else return 'error';
  }

  handleChange(e) {
    this.setState({ phone_input_value: e.target.value });
  }

  render() {
    return (
      <div className = "container">
        <div className = "row logo">
          <img src="build/interad_logo.png" width="15%"></img>
        </div>
        <div className = "row card">
          <img src="build/Sample_CreditCard.png" width="40%" className="center-block"></img>
          <h3 className="text-center card-img-text">What can the <b>Interad<sup>&reg;</sup> card</b>  do for you?</h3>
        </div>
        <div className = "row contest">
          <h4>
            Simply complete the form below to enter the CashBack<sup>&reg;</sup> Contest for a chance to win 1 of 10 trips worth $10,000
          </h4>
        </div>
        <div className = "row form">
          <div className="col-sm-6">
            <div className = "row">
              <ControlLabel>
                <span> Your Name </span>
                <span><i>as it appears on the credit card</i></span>
              </ControlLabel>
              <FormControl type="text" placeholder="Name" />
            </div>
            <div className = "row">
              <div className = "row">
                <ControlLabel>Interad Cashback<sup>&reg;</sup> credit card number</ControlLabel>
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" required />
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" required />
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" required />
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" required />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className = "row">
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" placeholder="Email" />
            </div>
            <div className = "row">
              <div className = "row">
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>*Daytime Phone Number</ControlLabel>
                  <FormControl
                    type="tel"
                    placeholder="Phone Number"
                    value={this.state.phone_input_value}
                    onChange={this.handleChange}
                  />
                  <HelpBlock>
                    <img src="build/error_icn.png" width="15px"></img>
                    {' '}
                    Missing information
                  </HelpBlock>
                </FormGroup>
              </div>

            </div>
          </div>

          <div className = "row why-deserve-money">
            <ControlLabel>Why do you deserve this money?</ControlLabel>
            <FormControl componentClass="textarea" rows="5"  />
          </div>
          <hr />

          <div className = "row business-card">
            <Checkbox onClick= { ()=> this.setState({ panel_open: !this.state.panel_open })}>
              I am registering an Interad<sup>&reg;</sup> Business Card
            </Checkbox>
            <Panel collapsible expanded={this.state.panel_open}>
              <div className="row">
                <div className="col-md-6">
                  <ControlLabel>
                    <span> Business Name </span>
                    <span><i>as it appears on the credit card</i></span>
                  </ControlLabel>
                  <FormControl type="text" placeholder="Name" />
                </div>
              </div>
              <br />
              <p>
                I certify that I am the owner of the business
                under which the business Interad Platinum
                card that I've entered (into this Contest) has
                been issued.
              </p>
              <p className="grey-text">
                Note: If an Interad Platinum card is selected as a
                potential winner, the business owner must provide
                identification satisfactory to the Sponsor confirming
                the business ownership.  The prize will be awarded in
                the name of the business and the business owner(s)
                will determine who will participate in the prize.
              </p>

            </Panel>
          </div>
          <hr />

          <div className = "row i-have-read">
            <Checkbox>
              <p>
                I have read and agree to the <a id="official-contest">Offical Contest Rules and Regulations</a>
              </p>
              <p className="grey-text">
                No purchase necessary. Contest starts Apr 1, 2013 and ends May 31, 2013.
              </p>
            </Checkbox>
            <div className="pull-right">
              <Button type="submit" bsStyle="danger">
                Submit Entry
              </Button>
            </div>
          </div>
          <hr />

          <div className = "row footer">
            <p>Interad Website, &copy; 1994-2003</p>
            <p>
              <a>Privacy & Security</a> { '| ' }
              <a>Legal</a> { '| ' }
              <a>Accessibility</a>
            </p>
          </div>

        </div>

      </div>
    );
  }
}
export default App;
