import axios from "axios";
import React, { Component, Fragment } from "react";
import ReactToPrint from "react-to-print";

export default class MakePrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      sem: 0,
    };
  }

  onChangeSem = (e) => {
    this.setState({ sem: e.target.value });

    axios
      .get(
        `http://localhost:1999/api/makeUpMinor/apprMakeUp?&year=${new Date().getFullYear()}&sem=${
          e.target.value
        }`
      )
      .then((Response) => {
        console.log(Response.data.data);
        this.setState({ student: Response.data.data });
        // console.log(students);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };

  render() {
    return (
      <div>
        <label>Sem</label>
        <input
          type={"number"}
          value={this.state.sem}
          onChange={this.onChangeSem}
          min={3}
          max={8}
        ></input>
        <div ref={(el) => (this.componentRef = el)}>
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {this.state.student.map((stud, index) => {
                return (
                  <Fragment key={index}>
                    {stud.courses.map((cour) => {
                      if (cour.approval === true) {
                        return (
                          <tr key={cour._id}>
                            <td>{stud.studentName}</td>
                            <td>{cour.course}</td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button
                className="btn btn-secondary"
                style={{ marginLeft: "50%" }}
              >
                Print
              </button>
            );
          }}
          content={() => this.componentRef}
          pageStyle="print"
        />
      </div>
    );
  }
}
