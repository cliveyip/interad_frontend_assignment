import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';


class App extends Component {
  constructor(...args){
    super(...args);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div className = "container">
        <div className = "row logo">
          <img src="build/interad_logo.png" width="15%"></img>
        </div>
        <div className = "row card">
          <img src="build/Sample_CreditCard.png" width="40%" className="center-block"></img>
          <h3 className="text-center card-img-text">What can the <b>Interad card</b> do for you?</h3>
        </div>
        <div className = "row contest">
          <h4>
            Simply complete the form below to enter the CashBack Contest for a chance to win 1 of 10 trips worth $10,000
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
                <ControlLabel>Interad Cashback credit card number</ControlLabel>
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
              <div className="col-sm-3 col-md-3 col-xs-3 credit-card-input">
                <FormControl type="text" className="input-block-level" placeholder="XXXX" autoComplete="off" maxLength="4" pattern="\d{4}" required />
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
                <ControlLabel>Daytime Phone Number</ControlLabel>
                <FormControl type="tel" placeholder="Phone Number" />
                <HelpBlock>Help text with validation state.</HelpBlock>
              </div>
            </div>
          </div>

          <div className = "row why-deserve-money">
            <ControlLabel>Why do you deserve this money?</ControlLabel>
            <FormControl componentClass="textarea" rows="5"  />
          </div>
          <hr />

          <div className = "row business-card">
            <Checkbox onClick= { ()=> this.setState({ open: !this.state.open })}>
              I am registering an Interad Business Card
            </Checkbox>
            <Panel collapsible expanded={this.state.open}>
              Business Name as it appears on the credit Card
              <p>
                I certify that I am the owner of the business
                under which the business Interad Platinum
                card that I've entered (into this Contest) has
                been issued.
              </p>

            </Panel>
          </div>
          <hr />

          <div className = "row i-have-read">
            <Checkbox bsStyle="danger">
              I have read and agree to the <a>Offical Contest Rules and Regulations</a>
              <br/>
              No purchase necessary. Contest starts Apr 1, 2013 and ends May 31, 2013.
            </Checkbox>
            <div className="pull-right">
              <Button type="submit" bsStyle="danger">
                Submit Entry
              </Button>
            </div>
          </div>
          <hr />


        </div>

      </div>
    );
  }
}
export default App;
