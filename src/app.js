const { Component } = React;
const { render } = ReactDOM;

class IndecisionApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your hands in the life of a computer</h2>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends Component {
  render() {
    return (
      <div>
        <p>Options component here</p>
        <Option />
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return (
      <div>
        Option goes here
      </div>
    );
  }
}

class AddOption extends Component {
  render() {
    return (
      <div>
        <p>AddOption Component here</p>
      </div>
    )
  }
}


render(<IndecisionApp />, document.getElementById('app'));