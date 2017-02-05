import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "row">
          <Button bsStyle="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
