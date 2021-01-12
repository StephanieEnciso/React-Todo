import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formValue: ''
        }
    }

    handleChange = event => {
        this.setState({
            formValue: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddTask(this.state.formValue);
        this.setState({
            formValue: ''
        });
    }

   render() {
       return (
           <form onSubmit = {this.handleSubmit}>
               <input value = {this.state.formValue} type = 'text' name = 'item' onChange = {this.handleChange} />
               <button>Add Task</button>
           </form>
       )
   }
}

export default TodoForm;