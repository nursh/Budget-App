const { Component } = React;

class VisibilityToggle extends Component {
  state = {
    visible: false,
  }

  handleShowDetails = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.handleShowDetails}> { visible ? 'Hide details' : 'Show details'}</button>
        { visible && <p>Here are some juicy details!!!</p>}
      </div>
    );
  }
}


const root = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, root);



