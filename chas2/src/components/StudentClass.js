import React from "react";

export class StudentClass extends React.Component {
  render() {
    console.log(this);
    return (
      <div id="student-class">
        <h4>
          Student Class {this.props.student.name} {this.props.student.lastName}{" "}
          {this.props.student.college}
        </h4>
      </div>
    );
  }
}
