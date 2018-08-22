const { Component } = React;
const { render } = ReactDOM;

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

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>

);
render(jsx, document.getElementById('app'));