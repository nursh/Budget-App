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

const templateTwo = (
  <div>
    <h1>Nuradeen Sheikh</h1>
    <p>Age: 23</p>
    <p>Location: Ottawa, Canada</p>
  </div>
);
const app = document.getElementById('app');

ReactDOM.render(templateTwo, app);