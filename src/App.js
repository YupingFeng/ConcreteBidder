import React, { Component } from "react";
import {
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Login from "./Component/Login";
import ElementSpecification from "./Component/ElementSpecification";
import DetailedCalculation from "./Component/DetailedCalculation";
import Project from "./Component/Project";
import Newprojectform from "./Component/Newprojectform";
import Addelement from "./Component/Addelement";
import NewArticles from "./Component/NewArticles";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      filteredproject:[],
      elements: [] ,   
      elementItems:[],
    }          
   
   this.updateProjectSort =this.updateProjectSort.bind(this);
   this.refreshElements = this.refreshElements.bind(this);
   this.refreshProjects = this.refreshProjects.bind(this);
   this.refreshElementsItem = this.refreshElementsItem.bind(this);
   this.filterStatus=this.filterStatus.bind(this);
   this.searchElementid=this.searchElementid.bind(this);
  }
   
  componentDidMount() {
    axios
    .get("http://concretebidderapi.azurewebsites.net/projects").then((response) => {
      this.setState({ projects: response.data });
      this.setState({ filteredproject: response.data });
      console.log(response.data);
    })
      .catch(error => {
        console.error(error);
      });
    this.refreshProjects();
    this.refreshElements();
    this.refreshElementsItem();
  }

filterStatus(target){
  var projectdata = this.state.projects
  console.log(target)  
  if(target.className == 'form-control')
  {
    if (target.value==="All"){
      this.setState({filteredproject:projectdata});
    }
    else{
      var newdata=projectdata.filter(function(projectdata){
        return projectdata.Status===target.value;
      })
      this.setState({filteredproject:newdata});
    }
  }
  else {
    var namedata=projectdata.filter(function(projectdata){
      // console.log(projectdata.ProjectName, target.value, projectdata.ProjectName.includes(target.value))
      return projectdata.FactoryName.includes(target.value)
    })
    this.setState({filteredproject:namedata});
  }
}

searchElementid(x){
  var elementdata = this.state.elements
  var indexdata=elementdata.filter(function(elementdata){
    var elementid = elementdata.ElementsID.toString()
    return elementid.includes(x.value)
  })
  console.log(indexdata)
  this.setState({elements:indexdata});
  
}

 updateProjectSort(sorting){
   if (sorting==="Cheapest"){
    this.filteredprojct = this.state.filteredproject.sort(function(a,b){
      return a.Price-b.Price;})
   }
   if (sorting==="Expensive") {
    this.projects = this.state.filteredproject.sort(function(a,b){
      return b.Price-a.Price;})
     console.log(this.state.projects);    
   } 
   if (sorting==="Newest") {
    this.projects = this.state.filteredproject.sort(function(a,b){
      return b.CreatedDate>a.CreatedDate;})
     console.log(this.state.projects);    
   } 
   if (sorting==="Oldest") {
    this.projects = this.state.projects.sort(function(a,b){
      return a.CreatedDate>b.CreatedDate;})
     console.log(this.state.projects);    
   } 
 }
 
 refreshProjects()
 {
   axios
   .get("http://concretebidderapi.azurewebsites.net/projects")
   .then(response => {
     this.setState({ projects: response.data });
     console.log(response.data);
   })
   .catch(error => {
     console.error(error);
   });
 }

  refreshElements()
  {
    axios
    .get("http://concretebidderapi.azurewebsites.net/elements")
    .then(response => {
      this.setState({ elements: response.data });
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  refreshElementsItem(){
   axios
    .get("http://concretebidderapi.azurewebsites.net/elementItems")
    .then(response => {
    this.setState({ elementItems: response.data });
    console.log(response.data);
    })
    .catch(error => {
    console.error(error);
    });
}

componentWillUnmount(){
  App(this.state)
}

  render() {
    return (
      <Router>
        <div className="row">
          <Route exact path="/" component={Login} />
          <Route
            path="/project"
            render={props => (
              <Project projects={this.state.projects} 
                       filteredproject={this.state.filteredproject}
                       updateProjectSort={this.updateProjectSort} 
                       filterStatus={this.filterStatus}
                                {...props} />  )}
          />
          <Route
            path="/elementspecification/:projectId"
            render={props =>(            
              <ElementSpecification elements={this.state.elements} 
                                    projects={this.state.projects}
                                    refreshProjects={this.refreshProjects}
                                    refreshElements={this.refreshElements}
                                    searchElementid={this.searchElementid} 
                                    {...props} />  )}
          />
          <Route path="/newprojectform" component={Newprojectform} />
          <Route path="/NewArticles" component={NewArticles} />
          <Route
            path="/detailedCalculation/:elementsId"
            render={props =>(         
              <DetailedCalculation elementItems={this.state.elementItems}
                                   elements={this.state.elements} 
                                   projects={this.state.projects}                                        
                                   refreshElementsItem={this.refreshElementsItem} 
                                   {...props} /> )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
