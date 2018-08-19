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

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
