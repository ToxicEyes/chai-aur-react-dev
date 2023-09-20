/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

export default function App() {
  let [permission, setPermission] = useState(false);
  let [data, setData] = useState({});
  let [question, setQuestion] = useState("");
  let [incorrectAns, setIncorrectAns] = useState([]);
  let [correctAns, setCorrectAns] = useState("");
  let options = [...incorrectAns, correctAns];
  const Items = options.map((value) => <li>{value}</li>);
  const [field, setField] = useState("");
  const submitedAns = [];

  function checkAns() {
    let ans = document.getElementById("answer").value;
    if (ans === correctAns) {
      alert("True Answer");
      document.getElementById("answer").value = "";
    } else {
      alert(`Wrong Answer, Correct Option is :${correctAns}`);
      document.getElementById("answer").value = "";
    }
  }

  useEffect(() => {
    fetch(`https://the-trivia-api.com/v2/questions/`)
      .then((res) => res.json())
      .then((res) => setData(res[0]))
      .then(() => setPermission(false));
  }, [permission]);

  return (
    <>
      <h1>Trivia Game</h1>
      <div id="question" style={{ opacity: "0" }}>
        <div>Question:{question}</div>
        <input
        style={{width: "100%"}}
          id="answer"
          placeholder="type your ans here"
          onChange={(e) => e.target.value}
        ></input>
        <div>
          <ol>
          {Items}
          </ol>
          </div>
      </div>
      <div></div>
      <br />
      <button
        id="btn"
        onClick={() => {
          document.getElementById("question").style.opacity = "1";
          document.getElementById("btn").textContent = "SUBMIT";
          setQuestion(data.question.text);
          setCorrectAns(data.correctAnswer);
          setIncorrectAns(data.incorrectAnswers);
          checkAns();
          setPermission(true);
        }}
      >
        START
      </button>
      <code>{console.log(data)}</code>
    </>
  );
}
