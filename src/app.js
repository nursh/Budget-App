const { Component } = React;
const { render } = ReactDOM;

class IndecisionApp extends Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your hands in the life of a computer';
    const options = ['uno', 'dos', 'tres'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends Component {

  handleRemoveAll() {
    alert('Removing all options!!!');
  }

  render() {
    const { options } = this.props;
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
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