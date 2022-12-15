import axios from "axios";
import React, { Component, Fragment } from "react";
import ReactToPrint from "react-to-print";

export default class MakePrint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      sem: 0,
      course:[]
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
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fkle_logo.png?alt=media&token=77f3a631-91a5-40f1-9fca-16001e566cd2"alt="Scholarship"class="img-fluid  mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <b><h4 class="text-center1">Login - Departmental Under Graduate Committee</h4></b>
                <h6 class="text-center2">School of Computer Science and Engineering</h6>
                <b><h7 class="text-center3">(For Academic Year 2022-23)</h7></b>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <img style={{width:"10rem"}} src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=13cfe0d3-7384-4cfa-81e0-28f6395accdd" alt="" class="img-fluid mx-auto  d-block float-xl-right float-lg-right float-md-right logoright"/>
                
            </div>
        </div>
    </div>
    <hr></hr>
    <h3 align='center'>Makeup Minor Approved List</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>USN</th>
                <th>Course</th>
                <th>Remark</th>
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
                            <td>{stud.usn}</td>
                            <td>{cour.course}</td>
                            <td>{cour.remark}</td>
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
