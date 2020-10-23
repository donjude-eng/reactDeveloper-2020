import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleCLick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log("button 1 clicked");
  }

  handleCLick3 = () => console.log("button 3 clicked");

  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}> click 2</button>
        <button onClick={this.handleClick2}> click 2</button>
        <button onClick={this.handleClick3}> click 2</button>
        <button onClick={this.handleClick4}> click 2</button>
      </div>
    );
  }
}
