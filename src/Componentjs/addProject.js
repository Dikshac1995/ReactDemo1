
import React, {Component } from 'react'
import uuid from 'uuid';
const categories=['webdesign','webDevelopment','mobileApp']

class AddProject extends Component {
 constructor(){
     super();
     this.state ={
         newProject:{}
     }
 }

 handleSubmit(e){
     
     if(this.refs.title.value === '')
     {
        alert("title can not be empty");
     }
     else{
         this.setState({newProject:{
             id:uuid.v4(),
             title:this.refs.title.value,
             category:this.refs.category.value
        }} ,function(){
            // console.log(this.state);
            this.props.addProject(this.state.newProject);
        });
     }
     e.preventDefault();   
 }
  render() {
      console.log(categories,'check')
    const categoryoption = categories.map(category =>{
    return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
         <h3>AddProject</h3>
         <form onSubmit={this.handleSubmit.bind(this)}>
             <div>
                 <label>Title</label><br />
                 <input type ="text" ref="title"/><br/>
             </div>
             <div>
                 <label>category</label><br/>
                 <select ref="category">
                      {categoryoption}
                 </select>
             </div><br />
             <input type = "submit" value="submit"></input><br />
         </form>
      </div>
    )
  }
}

export default AddProject;

