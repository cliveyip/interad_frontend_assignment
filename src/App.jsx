import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row logo">
          <img src="build/interad_logo.png" height="42"></img>
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
          <div className="col-md-6">
            <div className = "row">
              <ControlLabel>Your Name <i>as it appears on the credit card</i></ControlLabel>
              <FormControl type="text" placeholder="Name" />
            </div>
            <div className = "row">
              <ControlLabel>Interad Cashback credit card number</ControlLabel>
              <div className="col-md-3 credit-card-input">
                <FormControl type="text" className="input-block-level" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
              <div className="col-md-3 credit-card-input">
                <FormControl type="text" className="input-block-level" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
              <div className="col-md-3 credit-card-input">
                <FormControl type="text" className="input-block-level" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
              <div className="col-md-3 credit-card-input">
                <FormControl type="text" className="input-block-level" autoComplete="off" maxLength="4" pattern="\d{4}" required />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className = "row">
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" placeholder="Email" />
            </div>
            <div className = "row">
              <ControlLabel>Daytime Phone Number</ControlLabel>
              <FormControl type="tel" placeholder="Phone Number" />
              <HelpBlock>Help text with validation state.</HelpBlock>
            </div>
          </div>
          <div className = "row why-deserve-money">
            <ControlLabel>Why do you deserve this money?</ControlLabel>
            <FormControl componentClass="textarea" rows="5"  />

          </div>

          <hr />
        </div>

      </div>
    );
  }
}
export default App;
