import React, { Component } from "react";
import { Form,Button,Group } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class Passprops extends Component {
  render() {
    return (
      <div>
        <h1>Hello : {this.props.name}</h1>
      </div>
    );
  }
}
export default class TestState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "fuck all ya",
      aka: "p9d",
      inputList: [
        { name: "Watch", price: 10000000 },
        { name: "Dimon Ring", price: 300000 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>
          Item: {this.state.inputList[0].name} 
          Price: {this.state.inputList[0].price}
        </h1>
        <h1>
          Item: {this.state.inputList[1].name} 
          Price: {this.state.inputList[1].price}
        </h1>
        <hr />
        <Passprops name={this.state.name} />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
 <Form>
<Form.Group controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
Submit
</Button>
</Form>
            </div>
          </div>
        </div>   
      </div>
    );
  }
}
