import React from "react";
import ReactDOM from "react-dom/client"; // Note: /client
import "./styles.css"; // Import the CSS file

const img = "https://picsum.photos/200";
const name = "Kamrul Islam";
const currentDate = new Date();
console.log(currentDate.toString());
const yr = currentDate.getFullYear();
console.log(yr);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="hpp" contentEditable="true">
      Hello world from {name}
    </h1>
    <p>Your lucky Number is {Math.floor(Math.random() * 10)}</p>
    <h2 style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
      expression(that returns any value) kaj kore only.Statement like if else
      eshob kaj kore na
    </h2>
    <br />
    <p>Learning react 22-05-25</p>

    <img
      className="imag"
      alt="photoRandom"
      src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
    />
    <br />

    <img src={img} />

    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
    </ul>
    <p>copyright {yr}</p>
  </div>
);
// var h1 = document.createElement("h1");
// h1.innerHTML = "helo world from me";
// document.getElementById("root").appendChild(h1);
