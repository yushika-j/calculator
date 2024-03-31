
import './App.css';


function App() {
  
  const display = document.querySelector(".output");

  function appendToDisplay(input) {
    display.value += input;
  };
  
  function clearDisplay(){
    display.value = "";
  }

  function calculate(){
    try{
      display.value = eval(display.value);
    }
    catch(error){
      display.value = "Error";
      setTimeout(() => {
        clearDisplay();
      }, 2000); // Reset the calculator after 2 seconds
    }
  }

  function deleteNum(){
    display.value = display.value.slice(0, -1);
  }

  return (
    <div className="calculator-grid">
      <input className="output" readOnly></input>
      <button className="span-two" onClick={() => clearDisplay()}>AC</button>
      <button className="delete" onClick={() => deleteNum()}>DEL</button>
      <button onClick={() => appendToDisplay('/')}>/</button>
      <button onClick={() => appendToDisplay('7')}>7</button>
      <button onClick={() => appendToDisplay('8')}>8</button>
      <button onClick={() => appendToDisplay('9')}>9</button>
      <button onClick={() => appendToDisplay('*')}>x</button>
      <button onClick={() => appendToDisplay('4')}>4</button>
      <button onClick={() => appendToDisplay('5')}>5</button>
      <button onClick={() => appendToDisplay('6')}>6</button>
      <button onClick={() => appendToDisplay('+')}>+</button>
      <button onClick={() => appendToDisplay('1')}>1</button>
      <button onClick={() => appendToDisplay('2')}>2</button>
      <button onClick={() => appendToDisplay('3')}>3</button>
      <button onClick={() => appendToDisplay('-')}>-</button>
      <button onClick={() => appendToDisplay('.')}>.</button>
      <button onClick={() => appendToDisplay('0')}>0</button>
      <button className="span-two" onClick={() => calculate()}>=</button>
    </div>
  );
}

export default App;
