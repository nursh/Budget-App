const template = (
  <div>
    <h1>Indecision App</h1>
    <p>Something Something</p>
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

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
const app = document.getElementById('app');

ReactDOM.render(templateTwo, app);