let hideDetails = true;

const onShowDetails = () => {
  hideDetails = !hideDetails;
  visibleComponent();
}

const root = document.getElementById('app');
const visibleComponent = () => {
  const visible = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={onShowDetails}> { hideDetails ? 'Show details' : 'Hide details'}</button>
      { !hideDetails && <p>Here are some juicy details!!!</p>}
    </div>
  );

  ReactDOM.render(visible, root);
}

visibleComponent();


