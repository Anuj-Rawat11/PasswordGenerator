// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="passapp">
        <h1>Password:</h1>
        <label>Select Length : </label>
        <input type="range" min="5" max="30" />
        <input id="num" type="checkbox" />
        <label htmlFor="num">Number</label>
        <input  id="char" type="checkbox" />
        <label htmlFor="char">Special characters</label>
      </div>
    </div>
  );
}

export default App;
