import React from "react";

export class ClassComponent extends React.Component {
  componentDidMount() {
    console.log("This is component did mount");
  }

  constructor(props) {
    super(props);
    console.log("This is a constructor");
    this.state = {
      promenliva1: "Vrednost 1",
    };
  }

  smeniVrednost = () => {
    this.setState({
      promenliva1: "Vrednost 2",
    });
  };

  render() {
    console.log("This is a Render Method");
    return (
      <div id="class-component">
        <h1>Ajde be </h1>
        <p>Vrednost: {this.state.promenliva1}</p>
        <button onClick={this.smeniVrednost}> Smeni Vrednost</button>
      </div>
    );
  }
}
