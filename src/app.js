const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['Un', 'Deux', 'Trois'],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    { app.subtitle && <p>{app.subtitle}</p> }
    <p>{ app.options.length > 0 ? 'Here are your options:': 'No options' }</p>
    <ol>
      <li>First item</li>
      <li>Second item</li>
    </ol>
  </div>
);

let count = 0;

const addOne = () => {
  count += 1;
  renderCounterApp();
}

const minusOne = () => {
  count -= 1;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>Add 1</button>
      <button onClick={minusOne}>Minus 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}



const appRoot = document.getElementById('app');
renderCounterApp();
