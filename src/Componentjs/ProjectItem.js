
import React, { Component } from 'react'

class ProjectItem extends Component {

  deleteProject(id)
  {
    
     console.log(this.props,id);
     
    this.props.onDelete(id);

      
  }
  render() {
    // console.log(this.props);
     return (
      <li className="project">
       <strong>{this.props.Project.title}</strong>:{this.props.Project.category}
       <button  onClick = {this.deleteProject.bind(this, this.props.Project.id)}>Delete</button>
      </li>
    );
  }
}

export default ProjectItem ;

