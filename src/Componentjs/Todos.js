
import React, { Component } from 'react'
import Todositem from './Todositem'


class Todos extends Component {
//   deleteProject(id)
//    {
//     this.props.onDelete(id);
//    }

  render()
   {
      console.log(this.props.todos);
      let TodosItem;
      if(this.props.todos)
        {
            TodosItem= this.props.todos.map(todo =>{
          return <Todositem todo ={todo}/>
          });
        }
      return (
         <div className="Todos">
         <h3>Recent Project</h3>
         {TodosItem}
         </div>
        )
    }
}



export default Todos;
