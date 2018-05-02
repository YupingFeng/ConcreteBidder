import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { Button,Form,FormControl,FormGroup,Col,ReactDOM,OverlayTrigger,ControlLabel} from 'react-bootstrap';
import axios from 'axios';

class NewArticles extends Component {
constructor(props) {
  super(props);
    this.state = {
    Description: '',
    Unit: '',
    Fields: '',
    Fare:'',
    Quantity: '',
    Amount: '',     
    Mytime: '',
    Salary:'',           
    TotalCost: '',
    ElementsID: ''  
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
const {
    Description,
    Unit,
    Fields,
    Fare,
    Quantity,
    Amount,     
    Mytime,
    Salary,           
    TotalCost,
    ElementsID  } = this.state;
axios.post('http://concretebidderapi.azurewebsites.net/elementItems', {
    Description,
    Unit,
    Fields,
    Fare,
    Quantity,
    Amount,     
    Mytime,
    Salary,           
    TotalCost,
    ElementsID
})
.then(response => {})
.catch(e => {
console.log(e)
})
} 
render() {
return (

<div>
<h1>New Articles</h1>
<hr/>
<br/>
Description
<input
value={this.state.Description}
onChange={this.onChange.bind(this)}
type="string"
name="Description" />
<br/>
Unit
<input
value={this.state.Unit}
onChange={this.onChange.bind(this)}
type="string"
name="Unit" />
<br/>
Fields
<input
value={this.state.Fields}
onChange={this.onChange.bind(this)}
type="string"
name="Fields" />
<br/>
Fare
<input
value={this.state.Fare}
onChange={this.onChange.bind(this)}
type="int"
name="Fare" />
<br/>
Quantity
<input
value={this.state.Quantity}
onChange={this.onChange.bind(this)}
type="int"
name="Quantity" />
<br/>
Amount
<input
value={this.state.Amount}
onChange={this.onChange.bind(this)}
type="int"
name="Amount" />
<br/>
Mytime
<input
value={this.state.Mytime}
onChange={this.onChange.bind(this)}
type="int"
name="Mytime" />
<br/>
Salary
<input
value={this.state.Salary}
onChange={this.onChange.bind(this)}
type="int"
name="Salary" />
<br/>
TotalCost
<input
value={this.state.TotalCost}
onChange={this.onChange.bind(this)}
type="int"
name="TotalCost" />
<br/>
ElementsID
<input
value={this.state.ElementsID}
onChange={this.onChange.bind(this)}
type="int"
name="ElementsID" />

<br/>
<Link to={"/DetailedCalculation"}><Button onClick={this.toggleModal} className="btn btn-lg" type="link-cancel">Cancel</Button></Link>
<Button onClick={this.onSubmit} className="btn btn-primary btn-lg" type="submit">Submit</Button>
</div>

)
}
}


export default NewArticles;