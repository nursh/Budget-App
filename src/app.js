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

const user = {
  name: 'Lord Phantomhive',
  age: '1000',
  location: 'London, England',
};

const getLocation = ({ location }) => {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    { (user.age && user.age >= 18) && <p>Age: {user.age}</p> }
    {getLocation(user)}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);