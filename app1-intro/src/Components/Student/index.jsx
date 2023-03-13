import { Component } from "react";

export class Student extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Class Components ",
      studentDetails: {
        fname: "Ram",
        lname: "Krishna",
        email: "Ram@gmail.com",
      },
      allStudents: ["Ram", "Ravi", "Sam", "Sundar"],
    };
  }

  sayHello() {
    alert("Say Hello from Student Component !!");
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <ul>
          <li>{this.state.studentDetails.fname}</li>
          <li>{this.state.studentDetails.lname}</li>
        </ul>

        <ul>
          {this.state.allStudents.map((std, i) => (
            <li key={i}>{std}</li>
          ))}
        </ul>

        <button onClick={this.sayHello}>Click Me</button>
      </div>
    );
  }
}
