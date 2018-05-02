import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './projectform.css';
import { Button,Grid, Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import axios from 'axios';

class Newprojectform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProjectName: '',
      Price: '',
      FactoryName: '',
      CustomerName: '',
      Location: '',
      Status: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

onSubmit = (e) => {
e.preventDefault();
alert("Project Successfuly Created");
window.location="/Project"
const { ProjectName,Price,FactoryName,CustomerName,Location,Status } = this.state;
axios.post('http://concretebidderapi.azurewebsites.net/projects', {
ProjectName,Price,FactoryName,CustomerName,Location,Status
})
.then(response => {})
.catch(e => {
console.log(e)
alert("Project Successfuly Created");
})
}
render() {
return (
<Grid className="form-body">
<h1>New Project</h1>
<hr/>
<Form horizontal className="newprojectform">


<FormGroup>
<Col sm="2">
<ControlLabel>Projectname</ControlLabel>
</Col>
<Col sm="10">
<input 
className="newprojectform"
value={this.state.ProjectName}
onChange={this.onChange.bind(this)}
type="string"
name="ProjectName" />
</Col>
</FormGroup>

<FormGroup>
<Col sm="2">
<ControlLabel>Price</ControlLabel>
</Col>
<Col sm="10">
<input
className="newprojectform"
value={this.state.Price}
onChange={this.onChange.bind(this)}
type="string"
name="Price" />
</Col>
</FormGroup>

<FormGroup>
<Col sm="2">
<ControlLabel>FactoryName</ControlLabel>
</Col>
<Col sm="10">
<input
className="newprojectform"
value={this.state.FactoryName}
onChange={this.onChange.bind(this)}
type="string"
name="FactoryName" />
</Col>
</FormGroup>

<FormGroup>
<Col sm="2" >
<ControlLabel>Status</ControlLabel>
</Col>
<Col sm="10">
<select
className="newprojectform"
value={this.state.Status}
onChange={this.onChange.bind(this)}
type="string"
name="Status" >
<option value="New">Select</option>
<option value="New">New</option>
<option value="Ongoing">Ongoing</option>
<option value="Finished">Finished</option>
</select>
</Col>
</FormGroup>

<FormGroup>
<Col sm="2">
<ControlLabel>Customername</ControlLabel>
</Col>
<Col sm="10">
<input
className="newprojectform"
value={this.state.CustomerName}
onChange={this.onChange.bind(this)}
type="string"
name="CustomerName" />
</Col>
</FormGroup>

<FormGroup>
<Col sm="2">
<ControlLabel>Location</ControlLabel>
</Col>
<Col sm="10">
<input
className="newprojectform"
value={this.state.Location}
onChange={this.onChange.bind(this)}
type="string"
name="Location" />
</Col>
</FormGroup>
</Form>
<Link to={"/Project"}><Button onClick={this.toggleModal} className="btn btn-md" type="link-cancel">Cancel</Button></Link>
<button onClick={this.onSubmit} className="btn btn-default btn-md" type="submit">Submit</button>

</Grid>
)
}
}


export default Newprojectform;