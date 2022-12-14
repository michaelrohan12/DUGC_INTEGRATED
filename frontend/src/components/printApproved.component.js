import React, { Component, Fragment } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import bvb from "./header.jpg";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      semOptions: 0,
      approvedStudents: [],
      course: [],
      sem: [3, 4, 5, 6, 7, 8],
      today: new Date().toLocaleDateString(),
    };
  }

  onChangeSemOptions = (e) => {
    // console.log(sem)
    this.setState({ semOptions: e.target.value });
    axios
      .get(`http://localhost:1999/api/course?&sem=${e.target.value}`)
      .then((res) => {
        this.setState({ course: res.data.data });
        // console.log(res.data.data)
      })
      .catch((err) => console.log(err));

    // console.log(this.state.semOptions)
    axios
      .get(
        `http://localhost:1999/api/user/appr?&year=${new Date().getFullYear()}&sem=${
          e.target.value
        }`
      )
      .then((Response) => {
        // console.log(Response.data.data)
        this.setState({ approvedStudents: Response.data.data });
        // console.log(students);
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="form-group">
          <label>Sem</label>
          <select
            type={"number"}
            value={this.state.semOptions}
            required
            className="form-control"
            onChange={this.onChangeSemOptions}
            placeholder="Sem"
            min={3}
            max={8}
          >
            <option>Select sem</option>
            {this.state.sem.map(function (x) {
              return <option key={x}>{x}</option>;
            })}
          </select>
        </div>

        <div ref={(el) => (this.componentRef = el)}>
          <div>
            <img src={bvb} alt="header" class="img-fluid" />
          </div>
          <div className="bg-white">
            <span
              style={{ alignItems: "center", marginLeft: "42%", fontSize: 30 }}
            >
              Approved Students
            </span>
          </div>
          <table className="table table-dark">
            <thead className="thead-light">
              <tr>
                <th rowSpan={2} style={{ color: "black" }}>
                  Name
                </th>
                <th rowSpan={2} style={{ color: "black" }}>
                  USN
                </th>
                {/* <th>Course</th> */}
                {this.state.course.map((cou, index) => {
                  return (
                    <th colSpan={2} style={{ color: "black" }}>
                      {cou.code}
                    </th>
                  );
                })}
              </tr>
              <tr>
                {this.state.course.map((cou, index) => {
                  return (
                    <Fragment>
                      <th style={{ color: "black" }}>ATT</th>
                      <th style={{ color: "black" }}>CEI</th>
                    </Fragment>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.approvedStudents.map((student, index) => {
                return (
                  <tr key={index}>
                    <td style={{ color: "black" }}>{student.studentName}</td>
                    <td style={{ color: "black" }}>{student.usn}</td>
                    {this.state.course.map((cours) => {
                      let flag = 0;
                      for (let i = 0; i < student.courses.length; i++) {
                        flag = 0;
                        if (cours.code === student.courses[i].code) {
                          flag = 1;
                          return (
                            <Fragment>
                              <td style={{ color: "black" }}>
                                {student.courses[i].attendence}
                              </td>
                              <td style={{ color: "black" }}>
                                {student.courses[i].ISA_marks}
                              </td>
                            </Fragment>
                          );
                        }
                      }
                      if (flag === 0) {
                        return (
                          <Fragment>
                            <td style={{ color: "black" }}>_</td>
                            <td style={{ color: "black" }}>_</td>
                          </Fragment>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="table">
            <thead>
              <tr>
                <th style={{ color: "black" }}>Course name</th>
                <th style={{ color: "black" }}>Code</th>
              </tr>
            </thead>
            <tbody>
              {this.state.course.map((cou, id) => {
                return (
                  <tr key={id}>
                    <td style={{ color: "black" }}>{cou.code}</td>
                    <td style={{ color: "black" }}>{cou.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <span class="pull-left">{this.state.today}</span>
            <span class="pull-right">Chairman, DUGC</span>
          </div>
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button className="btn btn-primary" style={{ marginLeft: "50%" }}>
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
