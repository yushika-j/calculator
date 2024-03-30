
import './App.css';

function App() {
  return (
    <div className="calculator-grid">
      <h1>Calculator</h1>
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <div className="numbers">
        <button className="AC">AC</button>
        <button className="division">/</button>
      </div>
    </div>
  );
}

export default App;
