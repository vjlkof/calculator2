import { useState } from "react";
import { buttonValues } from "./constants/constants";

import "./App.css";
import CommonButton from "./components/CommonButton";

function App() {
  const [screenInput, setScreenInput] = useState("");
  const [screenAux, setScreenAux] = useState("");
  const [operator, setOperator] = useState("");

  function onHandlerChange() {}

  function checkOperator(input) {
    const currentOperator = operator ? operator : input;
    switch (currentOperator) {
      case "+":
        setScreenAux((prev) =>
          !screenAux ? screenInput : Number(prev) + Number(screenInput)
        );
        break;
      case "-":
        setScreenAux((prev) =>
          !screenAux ? screenInput : Number(prev) - Number(screenInput)
        );
        break;
      case "*":
        setScreenAux((prev) =>
          !screenAux ? screenInput : Number(prev) * Number(screenInput)
        );
        break;
      case "/":
        setScreenAux((prev) =>
          !screenAux ? screenInput : Number(prev) / Number(screenInput)
        );
        break;
      default:
        break;
    }
  }

  function onHandlerClick(input) {
    switch (input) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        setScreenInput((prev) => prev + input);
        break;
      case ".":
        setScreenInput((prev) => {
          if (prev.slice(-1) === ".") {
            return prev;
          }
          if (prev.slice(-1) === "") {
            return "0.";
          }
          return prev + input;
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        checkOperator(input);
        setOperator(input);
        setScreenInput("");
        break;
      case "=":
        if (!operator) {
          return;
        }
        checkOperator(input);

        setScreenAux((prev) => {
          setScreenInput(prev);
          return "";
        });
        setOperator("");
        break;
      case "<--":
        setScreenInput((prev) => prev.slice(0, prev.length - 1));
        break;
      case "AC":
        setScreenInput("");
        setScreenAux("");
        setOperator("");
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="screen">
        <input
          type="default"
          value={screenInput}
          disabled
          onChange={onHandlerChange}
        ></input>
        <div className="second-screen">
          <p>{operator}</p>
          <p>{screenAux}</p>
        </div>
      </div>
      <div className="buttonContainer">
        {buttonValues.map((buttonvalue) => (
          <CommonButton onHandlerClick={onHandlerClick}>
            {buttonvalue}
          </CommonButton>
        ))}
      </div>
    </div>
  );
}

export default App;
