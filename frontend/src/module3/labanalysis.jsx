import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import coursethree from "./jsonfiles/coursedata3sem.json";
import coursefour from "./jsonfiles/coursedata4thsem.json";
import coursefive from "./jsonfiles/coursedata5thsem.json";
import courseseven from "./jsonfiles/coursedata7sem.json";
import { Link } from "react-router-dom";
import "./css/cc.css";
var logo1 = require("./images/kletech1.png");
var kle_cen = require("./images/klecen.png");

function Labanalysis({ setCourse }) {
  const navigate = useNavigate();
  // var fileID;
  var dataID1;
  var dataID2;
  var dataIDS;
  // var data;

  const [selected, setSelected] = useState(0);
  const [selectedData, setSelectedData] = useState([]);

  async function check(e) {
    dataID1 =
      this.year + "-" + this.sem + "-" + this.course + "-" + this.assets;
    var prevYear = parseInt(this.year) - 1;
    dataID2 = prevYear + "-" + this.sem + "-" + this.course + "-" + this.assets;

    dataIDS = [{ id1: dataID1, id2: dataID2 }];

    await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataIDS),
    })
      .then((response) => response.json())
      .then((data) => {
        var jsonres;
        var CN;
        var CC;
        jsonres = data;
        CN = jsonres.CourseName;
        CC = jsonres.CouresCode;
      });
  }

  const changeSelectedData = (id) => {
    if (id == 3) {
      setSelectedData(coursethree);
      console.log("here");
    }
    if (id == 4) {
      setSelectedData(coursefour);
    }
    if (id == 5) {
      setSelectedData(coursefive);
    }
    if (id == 6) {
      // setSelectedData(coursesix);
    }
    if (id == 7) {
      setSelectedData(courseseven);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      *{font-size:105%}\n    body{\n          background-color:white;;\n        } \n #wrapper{ height: 100px; width: 100px;}      h1{\n          background-color: rgb(82, 139, 139);;\n          color:black;\n        }\n        h3{background-color: white;}\n        ",
        }}
      />
      <title>Document</title>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img
              src={logo1}
              alt="Scholarship"
              class="img-fluid mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <b>
              <h4 class="text-center1">
                Department of Under Graduate Committee
              </h4>
            </b>
            <h6 class="text-center2">
              School of Computer Science and Engineering
            </h6>
            <b>
              <h7 class="text-center3">(For Academic Year 2022-23)</h7>
            </b>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12 col-md-12 row">
            <img
              src={kle_cen}
              alt=""
              class="img-fluid mx-auto d-block float-xl-right float-lg-right float-md-right logoright"
            />
          </div>
        </div>
      </div>

      <center>
        <center>
          <h5 className="classcc">
            <div className="classcc">
              <div className="classcc">
                <section className="classcc">
                  <form className="classcc">
                    <select id="year" className=" classcc">
                      <option disabled selected className="classcc">
                        Year
                      </option>
                      <option value={2022} className="classcc">
                        2022
                      </option>
                      <option value={2021}>2021</option>
                      <option value={2020}>2020</option>
                      <option value={2019}>2019</option>
                      <option value={2018}>2018</option>
                    </select>
                    <select
                      id="sem"
                      required
                      onChange={(e) => {
                        setSelected(e.target.value);
                        changeSelectedData(e.target.value);
                        console.log("valjlkd", e.target.value);
                      }}
                    >
                      <option disabled selected>
                        Semester
                      </option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </select>
                  </form>
                </section>
              </div>
            </div>
            {/* {contacts.map((el) => {
              return el.sem;
            })}{" "}
            Semester{" "} */}
            <input
              class="btn btn-primary btn-sm"
              id="logoutbtn"
              type="submit"
              value="Logout"
              onClick={() => {
                navigate("/");
                console.log("json.name");
              }}
            />
          </h5>
          <div
            style={{ backgroundColor: "#000000", height: 10, width: "100%" }}
          />
          {/*         /////////////////////////////////////////////// */}
          <br />
          <br />
          <br />
          <div className="classcc" id="suyash">
            <Table singleLine className="wp-table table table-striped ">
              <Table.Header>
                <Table.Row className="table info">
                  <Table.HeaderCell>Course Code</Table.HeaderCell>
                  <Table.HeaderCell>Course Name</Table.HeaderCell>
                  <Table.HeaderCell>Course Analysis</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {selectedData?.map((el) => {
                  return (
                    <Table.Row key={el.name} class="font-weight-bold">
                      <Table.Cell>{el.name}</Table.Cell>
                      <Table.Cell>{el.code}</Table.Cell>
                      <Table.Cell>
                        <Link to="/labresultanalysis">
                          <button
                            class="classcc"
                            onClick={() => {
                              localStorage.setItem(
                                "course1",
                                JSON.stringify({
                                  name: el.name,
                                  code: el.code,
                                  year: el.year,
                                  sem: el.sem,
                                })
                              );
                              setCourse({
                                name: el.name,
                                code: el.code,
                                year: el.year,
                                sem: el.sem,
                              });
                              navigate("/labresultanalysis");
                            }}
                          >
                            {el.code}
                          </button>
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
          <br />
          <br />

          {/* <h5>Overall Analysis</h5>
      
      <img className="logoimage" src={oa} alt="" /> */}
        </center>
      </center>
    </>
  );
}

export default Labanalysis;
