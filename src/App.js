import "./index.css";
import Line from "./components/Line";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Line color="blue" height="300px" text="one" />
        <Line color="orange" height="500px" text="two" />
        <Line color="grey" height="200px" text="three" />
        <Line color="pink" height="700px" text="four" />
        <Line color="green" height="600px" text="five" />
      </div>
    </div>
  );
}

export default App;
