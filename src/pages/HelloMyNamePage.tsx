import { useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [isGreetOk, setIsGreetOk] = useState(false);
  const nameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const greetBtnOnclick = () => {
    if (name == "") {
      setResult("Please input your name!");
      setIsGreetOk(false);
    } else {
      setResult(`Hello: ${name}`);
      setIsGreetOk(true);
    }
  };
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnclick}>
        {" "}
        Greet Me
      </button>
      {/* Result Text */}
      <p className={isGreetOk ? "" : "text-danger"}>{result}</p>
    </div>
  );
}
