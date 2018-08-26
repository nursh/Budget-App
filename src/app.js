const { Component } = React;
const { render } = ReactDOM;

class IndecisionApp extends Component {
  state = {
    options: [],
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handlePick = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    alert(option);
  }

  handleAddOption = option => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return `${option} already exists`;
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your hands in the life of a computer';
    const { options } = this.state;
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  const { hasOptions, handlePick } = this.props;
  return (
    <div>
      <button 
        onClick={handlePick}
        disabled={!hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = () => {
  const { options, handleDeleteOptions } = this.props;
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
      { options.map(option => <Option key={option} option={option}/>) }
    </div>
  );
}


const Option = () => {
  const { option } = this.props;
  return (
    <div>
      <p>{option}</p>
    </div>
  );
}

class AddOption extends Component {

  state = {
    error: '',
  }

  handleAddOption = (evt) => {
    evt.preventDefault();
    const { handleAddOption } = this.props;
    const option = evt.target.elements.option.value.trim();
    const error = handleAddOption(option);
    evt.target.elements.option.value = '';
    this.setState(() => ({
      error,
    }))
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" placeholder="Add option" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}


render(<IndecisionApp />, document.getElementById('app'));