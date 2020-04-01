console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "Your decision today will affect your future",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  render();
};

const removeAll = () => {
  app.options = [];

  render();
};

var appRoot = document.getElementById("app");

const numbers = ["100", "203", "111"];

const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      {numbers.map(num => {
        return <p key={num}>Number: {num}</p>;
      })}
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
