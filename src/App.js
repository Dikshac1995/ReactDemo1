
import React, { Component } from 'react'
import $ from 'jquery';
import Project from './Componentjs/Project';
import AddProject from './Componentjs/addProject';
import Todos from './Componentjs/Todos';
import uuid from 'uuid';
import "./App.scss";
class App extends Component 
{
  constructor()
   {
       super();
       this.state = {
       projects:[],
       todos:[]
      }  
    }

  getTodos(){
      $.ajax({url:'https://jsonplaceholder.typicode.com/todos',
              dataType:'json',
              cache:false,
              success:function(data){
                 this.setState({todos:data},function(){
                   console.log(this.state);
                 }) ; 
              }.bind(this),
              error:function(xhr,status,err){
               console.log(err);
              }
            });
  }
  getProjects(){
    this.setState({projects:[
      { 
        id : uuid.v4(),
        title:'Business Website',
        category:'webdesign'
      },
      {
        id : uuid.v4(),
        title:'Education Website',
        category:'webDevelopment'
      },
      {
        id : uuid.v4(),
        title:'social Website',
        category:'MobileDevelopment'
      }

      ]});

  }

  componentWillMount(){
      this.getProjects();
      this.getTodos();
  }

  componentDidMount(){
    this.getTodos();

  }

  handleAddProject(project){
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});

  }

  handleDeleteProject(id){
  
    let projects = this.state.projects;
    let index1 = projects.findIndex(Delete=>Delete.id === id)
    console.log("index is "+id);
    projects.splice(index1,1);
    this.setState({projects:projects});


  }

  render() {
    return (
      <div>
         <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Project projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
          <hr />
          <Todos todos={this.state.todos}/>
      </div>
    );
  }
  }

  // 


export default App;
