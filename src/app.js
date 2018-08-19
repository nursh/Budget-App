const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const option = evt.target.elements.option.value;
  if (option) {
    app.options.push(option);
    evt.target.elements.option.value = '';
    renderTemplate();
  }
};

const clearAllOptions = () => {
  app.options = [];
  renderTemplate();
}

const appRoot = document.getElementById('app');
const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p> }
      <p>{ app.options.length > 0 ? 'Here are your options:': 'No options' }</p>
      <p>{app.options.length}</p>
      <button onClick={clearAllOptions}>clear options</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}


renderTemplate();
