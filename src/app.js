const { Component } = React;
const { render } = ReactDOM;

class IndecisionApp extends Component {
  state = {
    options: ['uno', 'dos', 'tres'],
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your hands in the life of a computer';
    const { options } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={options.length > 0} />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  }
}

class Action extends Component {

  handlePick() {
    alert('Handle pick button clicked!!!');
  }

  render() {
    const { hasOptions } = this.props;
    return (
      <div>
        <button 
          onClick={this.handlePick}
          disabled={!hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends Component {

  render() {
    const { options, handleDeleteOptions } = this.props;
    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove all</button>
        { options.map(option => <Option key={option} option={option}/>) }
      </div>
    );
  }
}

class Option extends Component {
  render() {
    const { option } = this.props;
    return (
      <div>
        <p>{option}</p>
      </div>
    );
  }
}

class AddOption extends Component {

  handleAddOption(evt) {
    evt.preventDefault();
    const option = evt.target.elements.option.value.trim();
    if (option) alert(option);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" placeholder="Add option" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}


render(<IndecisionApp />, document.getElementById('app'));