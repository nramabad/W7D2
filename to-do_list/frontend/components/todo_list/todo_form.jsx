import React from 'react';
import {merge} from 'lodash';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '',
    body: '',
    done: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }
  
  handleChange(type) {
    // debugger;
    return event => this.setState({[type]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.title);
    event.preventDefault();
    const todo = {id: this.uniqueId()};
    merge(todo, this.state);
    this.props.receiveTodo(todo);
  }
  

  render () {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.title} onChange={this.handleChange('title')} />
        </label>
        <label>
          Body:
          <textarea value={this.state.body} onChange={this.handleChange('body')} />
        </label>
        <input type="submit" value="Create Todo!" />
      </form>
        
      </div>
    );
  }
}

export default TodoForm;