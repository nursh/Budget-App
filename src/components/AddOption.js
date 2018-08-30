import React, { Component } from 'react';

export default class AddOption extends Component {

  state = {
    error: '',
  }

  handleAddOption = (evt) => {
    evt.preventDefault();
    const { handleAddOption } = this.props;
    const option = evt.target.elements.option.value.trim();
    const error = handleAddOption(option);

    if (!error) evt.target.elements.option.value = '';
    this.setState(() => ({
      error,
    }))
  }

  render() {
    return (
      <div>
        { this.state.error && <p className="add-option__error">{this.state.error}</p> }
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" placeholder="Add option" name="option"/>
          <button className="button">Add option</button>
        </form>
      </div>
    )
  }
}
