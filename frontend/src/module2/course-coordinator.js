import axios from "axios";
import React, { Component } from "react";
import * as XLSX from "xlsx";
import "./course-coordinator.css";

class CourseCoordinator extends Component {
  myfile;
  jsonFile;
  year;
  sem;
  course;
  div;
  asses;
  myfilef = async (e) => {
    this.myfile = e.target.files[0];
    const data = await this.myfile.arrayBuffer();
    const workbook = XLSX.readFile(data, {});

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    this.jsonFile = jsonData;
  };

  createOption(ddl, text, value) {
    var opt = document.createElement("option");
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
  }

  configureDropDownLists(ddl1, ddl2) {
    var three = [
      "Graph Theory and Linear Algebra",
      "Discrete Mathematical Structures",
      "Computer Organization and Architecture",
      "Data Structures and Algorithms",
      "Database Management System",
    ];
    var four = [
      "Applied Statistics with R",
      "Object Oriented Programming",
      "Principles of Compiler Design",
      "Operating Systems Principles",
      "Exploratory Data Analysis",
      "Machine Learning",
    ];
    var five = [
      "Software Engineering",
      "Computer Networks – 1",
      "System Software",
      "Machine Learning",
      "Natural Language Processing",
      "Internet of Things",
    ];
    var six = [
      "Computer Network-2",
      "Distributed and Cloud Computing",
      "Blockchain and Distributed Ledgers",
      "Algorithm Problem Solving",
      "Embedded Intelligent Systems",
      "Parallel Computing",
      "Quantum Computing",
      "Semantic Web",
      "Data Integration and Cloud Services",
    ];
    var seven = [
      "Big Data and Analytics",
      "Information Security",
      "Social Network Analysis",
      "Cyber Security",
      "Software Defined Networks",
    ];
    switch (ddl1.target.value) {
      case "3":
        ddl2.options.length = 0;
        for (let i = 0; i < three.length; i++) {
          this.createOption(ddl2, three[i], three[i]);
        }
        console.log("hi");
        break;
      case "4":
        ddl2.options.length = 0;
        for (let i = 0; i < four.length; i++) {
          this.createOption(ddl2, four[i], four[i]);
        }
        break;
      case "5":
        ddl2.options.length = 0;
        for (let i = 0; i < five.length; i++) {
          this.createOption(ddl2, five[i], five[i]);
        }
        break;
      case "6":
        ddl2.options.length = 0;
        for (let i = 0; i < six.length; i++) {
          this.createOption(ddl2, six[i], six[i]);
        }
        break;
      case "7":
        ddl2.options.length = 0;
        for (let i = 0; i < seven.length; i++) {
          this.createOption(ddl2, seven[i], seven[i]);
        }
        break;
      default:
        break;
    }
  }

  getYear = (e) => {
    this.year = e.target.value;
  };

  getSem = (e, course) => {
    this.sem = e.target.value;
    this.configureDropDownLists(e, course);
  };

  getCourse = (e) => {
    this.course = e.target.value;
  };

  getDiv = (e) => {
    this.div = e.target.value;
  };

  getAssess = (e) => {
    this.asses = e.target.value;
  };

  handlefile = async (e) => {
    alert("File was successfully uploaded");
    var id =
      this.year +
      "-" +
      this.sem +
      "-" +
      this.course +
      "-" +
      this.asses +
      "-" +
      this.div;
    const formData = new FormData();
    formData.append("title", id);
    formData.append("file", this.myfile);
    console.log(id);

    axios.post("http://localhost:1999/fileUpload", formData).then((res) => {
      console.log(res.statusText);
    });
    this.jsonFile[1]["__EMPTY_2"] = id;
    if (this.asses === "CIE") {
      await fetch("/cie2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.jsonFile),
      }).then(() => {
        console.log("Request sent");
      });
    } else {
      await fetch("http://localhost:1999/api2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.jsonFile),
      }).then(() => {
        console.log("Request sent");
      });
    }
  };
  render() {
    return (
      <>
              <div class="container-fluid7" style={{ paddingTop: "1rem", paddingBottom: "1rem", position: "sticky", top: "0" }}>
                <div class="row7" style={{ display: "flex" }}>
                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img style={{ paddingRight: "20px" }} src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fkle_logo.png?alt=media&token=77f3a631-91a5-40f1-9fca-16001e566cd2" alt="Scholarship" class="img-fluid mx-auto d-block float-xl-left float-lg-left float-md-left logoleft" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <b><h4 class="text-center17">Departmental Under Graduate Committee</h4></b>
                        <h6 class="text-center27">School of Computer Science and Engineering</h6>
                        <b><h7 class="text-center37">(For Academic Year 2022-23)</h7></b>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <img style={{ width: "10rem", paddingLeft: "20px" }} src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=13cfe0d3-7384-4cfa-81e0-28f6395accdd" alt="" class="img-fluid mx-auto d-block float-xl-right float-lg-right float-md-right logoright" />
                    </div>
                </div>
            </div>
          <h1 style={{marginTop:"8rem", marginLeft:"33rem"}}>Course Co-ordinator</h1>
          <div>
            {/* <button id="user">Profile <i className="fa fa-user" /></button>
        <button id="logout">Logout <i className="fa fa-sign-out" /></button> */}
          </div>
          <div className="modal-container">
            <div id="modal">
              <fieldset id="user-credential">
                <legend>Your Details</legend>
                <p id="name">Name: </p>
                <p id="role">Role: </p>
              </fieldset>
              <button id="close">
                Close
                <i className="fa fa-close" />
              </button>
            </div>
          </div>
          <div id="contents1" style={{marginTop:"5rem", marginLeft:"25rem"}}>
            <div id="selections1" style={{border:"1px solid black", borderRadius:"5px", boxShadow:"none", padding:"2rem"}}>
              <section>
                <p id="message" style={{color:"black", textAlign:"center"}}>Select Options to Upload Files</p>
                <form name="options">
                  {/* <select name="semester" class="select-option">
                <option value="Even">Even</option>
                <option value="Odd">Odd</option>
            </select> */}
            <div style={{display:"space-around", marginBottom:"1rem"}}>
                  <select
                    id="year"
                    onChange={(e) => this.getYear(e)}
                    className="select-option"
                    style={{background:"black", color:"white"}}
                  >
                    <option disabled selected>
                      Year
                    </option>
                    <option value={2022}>2022</option>
                    <option value={2021}>2021</option>
                    <option value={2020}>2020</option>
                    <option value={2019}>2019</option>
                    <option value={2018}>2018</option>
                  </select>
                  <select
                    id="semester"
                    onChange={(e) =>
                      this.getSem(e, document.getElementById("courses"))
                    }
                    className="select-option"
                    style={{background:"black", color:"white"}}
                  >
                    <option disabled selected>
                      Semester
                    </option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                  <select
                    id="division"
                    onChange={(e) => this.getDiv(e)}
                    className="select-option"
                    style={{background:"black", color:"white"}}
                  >
                    <option disabled selected>
                      Division
                    </option>
                    <option value={"A"}>A</option>
                    <option value={"B"}>B</option>
                    <option value={"C"}>C</option>
                    <option value={"D"}>D</option>
                    <option value={"E"}>E</option>
                  </select>
                  <select
                    id="courses"
                    onChange={(e) => this.getCourse(e)}
                    className="select-option"
                    style={{background:"black", color:"white"}}
                  >
                    <option disabled selected>
                      Course
                    </option>
                    {/* <option value={'Computer Networks - 1'}>Computer Networks - 1</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing(NLP)'}>Natural Language Processing(NLP)</option>
                <option value={'Internet of Things(IoT)'}>Internet of Things(IoT)</option>
                <option value={'Software Engineering'}>Software Engineering</option>
                <option value={'System Software'}>System Software</option> */}
                  </select>
                  <select
                    className="select-option"
                    onChange={(e) => this.getAssess(e)}
                    id="acti"
                    style={{background:"black", color:"white"}}
                    required
                  >
                    <option disabled selected>
                      Assessment
                    </option>
                    <option value={"M1"}>Minor-1</option>
                    <option value={"M2"}>Minor-2</option>
                    <option value={"CIE"}>C.I.E</option>
                    <option value={"lab"}>Lab</option>
                  </select>
                  </div>
                  <input
                    type="file"
                    id=""
                    className=""
                    onChange={(e) => this.myfilef(e)}
                  />
                  <div style={{textAlign:"center", marginTop:"1rem"}}>

                  <input
                    type="button"
                    id=""
                    className="btn btn-primary"
                    defaultValue="Submit"
                    onClick={(e) => this.handlefile(e)}

                  />
                  </div>
                  <p id="test" />
                </form>
              </section>
            </div>
          </div>
      </>
    );
  }
}

export default CourseCoordinator;
