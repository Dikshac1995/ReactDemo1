
import React, { Component } from 'react'
import ProjectItem from './ProjectItem'


class Project extends Component {
  deleteProject(id)
   {
    this.props.onDelete(id);
   }

  render()
   {
      console.log(this.props.projects);
      let projectitem;
      if(this.props.projects)
        {
          projectitem= this.props.projects.map(Project =>{
          return <ProjectItem onDelete={this.deleteProject.bind(this)} key={Project.title} Project ={Project}/>
          });
        }
      return (
         <div className="Project">
         <h3>Latest Project</h3>
         {projectitem}
         </div>
        )
    }
}



export default Project

