const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
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
    <p>Age: {user.age}</p>
    {getLocation(user)}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);