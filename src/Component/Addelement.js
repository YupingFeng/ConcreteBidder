import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { Button,Form,FormControl,FormGroup,Col,ReactDOM,OverlayTrigger,ControlLabel} from 'react-bootstrap';
import axios from 'axios';

class Addelement extends Component {
constructor(props) {
super(props);
this.state = {
    
    ProductType: '',
    Number: '',
    Littera:'',
    Width: '',
    Height: '',
    Length: '',
    Area: '',
    Weight: '',
    ProductGroup:'' ,
    Anmarking:'',
    Img: '',
    ProjectID:''  
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
ProductType,    
Number, 
Littera,
Width,  
Height,
Length, 
Area,   
Weight, 
ProductGroup,   
Anmarking,  
Img,    
ProjectID } = this.state;
axios.post('http://concretebidderapi.azurewebsites.net/elements', {
ProductType,    
Number, 
Littera,
Width,  
Height,
Length, 
Area,   
Weight, 
ProductGroup,   
Anmarking,  
Img,    
ProjectID
})
.then(response => {})
.catch(e => {
console.log(e)
})
}
render() {
return (

<div>
<h1>New Element</h1>
<hr/>
<br/>
ProductType
<input
value={this.state.ProductType}
onChange={this.onChange.bind(this)}
type="string"
name="ProductType" />
<br/>
Number
<input
value={this.state.Number}
onChange={this.onChange.bind(this)}
type="int"
name="Number" />
<br/>
Littera
<input
value={this.state.Littera}
onChange={this.onChange.bind(this)}
type="int"
name="Littera" />
<br/>
Width
<input
value={this.state.Width}
onChange={this.onChange.bind(this)}
type="int"
name="Width" />
<br/>
Height
<input
value={this.state.Height}
onChange={this.onChange.bind(this)}
type="int"
name="Height" />
<br/>
Length
<input
value={this.state.Length}
onChange={this.onChange.bind(this)}
type="int"
name="Length" />
<br/>
Area
<input
value={this.state.Area}
onChange={this.onChange.bind(this)}
type="int"
name="Area" />
<br/>
Weight
<input
value={this.state.Weight}
onChange={this.onChange.bind(this)}
type="int"
name="Weight" />
<br/>
ProductGroup
<input
value={this.state.ProductGroup}
onChange={this.onChange.bind(this)}
type="int"
name="ProductGroup" />
<br/>
Anmarking
<input
value={this.state.Anmarking}
onChange={this.onChange.bind(this)}
type="string"
name="Anmarking" />
<br/>
Img
<input
value={this.state.Img}
onChange={this.onChange.bind(this)}
type="string"
name="Img" />
<br/>
ProjectID
<input
value={this.state.ProjectID}
onChange={this.onChange.bind(this)}
type="int"
name="ProjectID" />
<br/>
<Link to={"/ElementSpecification"}><Button onClick={this.toggleModal} className="btn btn-lg" type="link-cancel">Cancel</Button></Link>
<Button onClick={this.onSubmit} className="btn btn-primary btn-lg" type="submit">Submit</Button>
</div>

)
}
}


export default Addelement;