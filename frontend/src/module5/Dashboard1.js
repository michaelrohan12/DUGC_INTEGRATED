import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "./Dashboard1.css";
import pic from "./img1.jpg";
const Dashboard1 = () => {
  const [data, setData] = useState([]);
  const { state } = useLocation();
  const { details } = state ? state : [];

  const getData = () => {
    var config = {
      method: "post",
      url: "http://localhost:1999/dugcCoordinator",
      headers: {},
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Course11 = [
    {
      label: "BASIC ELECTRICAL ENGINEERING",
      value: "BASIC ELECTRICAL ENGINEERING",
    },
    { label: "ENGINEERING MECHANICS", value: "ENGINEERING MECHANICS" },
    { label: "SINGLE VARIABLE CALCULUS", value: "SINGLE VARIABLE CALCULUS" },
    {
      label: "ENGINEERING PHYSICS",
      value: "ENGINEERING PHYSICS",
    },
    {
      label: "DESIGN THINKING FOR SOCIAL INNOVATION",
      value: "DESIGN THINKING FOR SOCIAL INNOVATION",
    },
    {
      label: "C PROGRAMMING FOR PROBLEM SOLVING",
      value: "C PROGRAMMING FOR PROBLEM SOLVING",
    },
  ];
  const Course12 = [
    {
      label: "PROBLEM SOLVING WITH DATA STRUCTURES",
      value: "PROBLEM SOLVING WITH DATA STRUCTURES",
    },
    { label: "MULTIVARIABLE CALCULUS", value: "MULTIVARIABLE CALCULUS" },
    {
      label: "BASIC MECHANICAL ENGINEERING  ",
      value: "BASIC MECHANICAL ENGINEERING  ",
    },
    {
      label: "PROFESSIONAL COMMUNICATION",
      value: "PROFESSIONAL COMMUNICATION",
    },
    {
      label: "BASIC ELECTRONICS",
      value: "BASIC ELECTRONICS",
    },
    {
      label: "ENGINEERING CHEMISTRY",
      value: "ENGINEERING CHEMISTRY",
    },
    {
      label: "ENGINEERING EXPLORATION",
      value: "ENGINEERING EXPLORATION",
    },
  ];
  const Course13 = [
    {
      label: "GRAPH THEORY AND LINEAR ALGEBRA",
      value: "GRAPH THEORY AND LINEAR ALGEBRA",
    },
    {
      label: "DATABASE MANAGEMENT SYSTEM",
      value: "DATABASE MANAGEMENT SYSTEM",
    },
    {
      label: "DISCRETE MATHEMATICAL STRUCTURES",
      value: "DISCRETE MATHEMATICAL STRUCTURES",
    },
    {
      label: "DATA STRUCTURES AND ALGORITHMS",
      value: "DATA STRUCTURES AND ALGORITHMS",
    },
    {
      label: "C PROGRAMMING FOR PROBLEM SOLVING",
      value: "C PROGRAMMING FOR PROBLEM SOLVING",
    },
  ];
  const Course14 = [
    {
      label: "OBJECT ORIENTED PROGRAMMING",
      value: "OBJECT ORIENTED PROGRAMMING",
    },
    {
      label: "PRINCIPLES OF COMPILER DESIGN",
      value: "PRINCIPLES OF COMPILER DESIGN",
    },
    {
      label: "OPERATING SYSTEM PRINCIPLES AND PROGRAMMING",
      value: "OPERATING SYSTEM PRINCIPLES AND PROGRAMMING",
    },
    {
      label: "MICROCONTROLLER: PROGRAMMING AND INTERFACING",
      value: "MICROCONTROLLER: PROGRAMMING AND INTERFACING",
    },
    {
      label: "EXPLORATORY DATA ANALYSIS",
      value: "EXPLORATORY DATA ANALYSIS",
    },
  ];
  const Course15 = [
    {
      label: "SYSTEM SOFTWARE",
      value: "SYSTEM SOFTWARE",
    },
    {
      label: "MACHINE LEARNING",
      value: "MACHINE LEARNING",
    },
    {
      label: "INTERNET OF THINGS",
      value: "INTERNET OF THINGS",
    },
    {
      label: "COMUPUTER NETWORKING",
      value: "COMUPUTER NETWORKING",
    },
    {
      label: "SYSTEM SOFTWARE LAB",
      value: "SYSTEM SOFTWARE LAB",
    },
  ];
  const Course16 = [
    {
      label: "COMPUTER NETWORKS 2",
      value: "COMPUTER NETWORKS 2",
    },
    {
      label: "DISTRIBUTED AND CLOUD COMPUTING",
      value: "DISTRIBUTED AND CLOUD COMPUTING",
    },
    {
      label: "BLOCKCHAIN AND DISTRIBUTED LEDGERS",
      value: "BLOCKCHAIN AND DISTRIBUTED LEDGERS",
    },
    {
      label: "COMUPUTER NETWORKING LABRORATORY",
      value: "COMUPUTER NETWORKING LABRORATORY",
    },
    {
      label: "MINOR PROJECT",
      value: "MINOR PROJECT",
    },
  ];

  const Course17 = [
    {
      label: "BIG DATA ANALYTICS",
      value: "BIG DATA ANALYTICS",
    },
    {
      label: "INFORMATION SECURITY",
      value: "INFORMATION SECURITY",
    },
    {
      label: "SOCIAL NETWORK ANALYSIS",
      value: "SOCIAL NETWORK ANALYSIS",
    },
    {
      label: "CYBER SECURITY",
      value: "CYBER SECURITY",
    },
    {
      label: "SOFTWARE DEFINED NETWORKS",
      value: "SOFTWARE DEFINED NETWORKS",
    },
  ];

  const Course18 = [
    {
      label: "BIG DATA ANALYTICS",
      value: "BIG DATA ANALYTICS",
    },
    {
      label: "INFORMATION SECURITY",
      value: "INFORMATION SECURITY",
    },
    {
      label: "SOCIAL NETWORK ANALYSIS",
      value: "SOCIAL NETWORK ANALYSIS",
    },
    {
      label: "CYBER SECURITY",
      value: "CYBER SECURITY",
    },
    {
      label: "SOFTWARE DEFINED NETWORKS",
      value: "SOFTWARE DEFINED NETWORKS",
    },
  ];

  const courseArray = [Course13, Course14, Course15, Course16, Course17];
  const getSem = () => {
    return localStorage.getItem("sem") ? localStorage.getItem("sem") : null;
  };

  const [sem, setSem] = useState(getSem());

  ////////////////////////////////// TABLE DOWNLOAD CSV /////////////////////////////////

  function tableToCSV() {
    var csv_data = [];

    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
      var cols = rows[i].querySelectorAll("td,th");

      var csvrow = [];
      for (var j = 0; j < cols.length; j++) {
        csvrow.push(cols[j].innerHTML);
      }

      csv_data.push(csvrow.join(","));
    }

    csv_data = csv_data.join("\n");

    downloadCSVFile(csv_data);
  }

  function downloadCSVFile(csv_data) {
    let CSVFile = new Blob([csv_data], {
      type: "text/csv",
    });

    var temp_link = document.createElement("a");

    temp_link.download = "Consolidated.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    temp_link.click();
    document.body.removeChild(temp_link);
  }

  useEffect(() => {
    getData();
  }, []);

  let componentRef = useRef();

  return (
    <div>
      <div
        ref={(el) => (componentRef = el)}
        class="container-fluid7"
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          position: "sticky",
          top: "0",
        }}
      >
        <div class="row7" style={{ display: "flex" }}>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img
              style={{ paddingRight: "20px" }}
              src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fkle_logo.png?alt=media&token=77f3a631-91a5-40f1-9fca-16001e566cd2"
              alt="Scholarship"
              class="img-fluid mx-auto d-block float-xl-left float-lg-left float-md-left logoleft"
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <b>
              <h4 class="text-center17">
                Departmental Under Graduate Committee
              </h4>
            </b>
            <h6 class="text-center27">
              School of Computer Science and Engineering
            </h6>
            <b>
              <h7 class="text-center37">(For Academic Year 2022-23)</h7>
            </b>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img
              style={{ width: "10rem", paddingLeft: "20px" }}
              src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2FKLES-Centenary-LOGO-PNG.png?alt=media&token=13cfe0d3-7384-4cfa-81e0-28f6395accdd"
              alt=""
              class="img-fluid mx-auto d-block float-xl-right float-lg-right float-md-right logoright"
            />
          </div>
        </div>

        <div
          class="container"
          style={{
            maxWidth: "",
            marginLeft: "3rem",
            background: "#fff",
          }}
        >
          <table
            class="table"
            style={{
              width: "1500px",
              height: "850px",
              overflow: "scroll",
              display: "block",
              color: "black",
              backgroundColor: "white",
              marginTop: "6rem",
              marginLeft: "0rem",
            }}
          >
            <thead class="thead-dark">
              <tr>
                <th scope="col">Sl.No</th>
                <th scope="col">Name</th>
                <th scope="col">USN</th>
                <th scope="col">Division</th>
                {/* <th scope="col">Course 1</th>
                    <th scope="col">Course 2</th>
                    <th scope="col">Course 3</th>
                    <th scope="col">Course 4</th>
                    <th scope="col">Course 5</th>
                    <th scope="col">Course 6</th> */}
                {courseArray[sem - 1] &&
                  courseArray[sem - 1]?.map((item, key) => {
                    return (
                      <th colSpan={2} scope="col">
                        {item?.label}
                      </th>
                    );
                  })}
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                {courseArray[sem - 1] &&
                  courseArray[sem - 1]?.map((item, key) => {
                    return (
                      <>
                        <th scope="col">CIE</th>
                        <th scope="col">Attendance</th>
                      </>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((item, key) => {
                  return (
                    <tr>
                      <th scope="row" style={{ color: "black" }}>
                        {item[0]?.SL}
                      </th>
                      <td style={{ color: "black" }}>{item[0]?.Name}</td>
                      <td style={{ color: "black" }}>{item[0]?.Usn}</td>
                      <td style={{ color: "black" }}>{item[0]?.Division}</td>
                      <td style={{ color: "black" }}>{item[0]?.Cie}</td>
                      <td style={{ color: "black" }}>{item[0]?.Attendance}</td>
                      <td style={{ color: "black" }}>{item[1]?.Cie}</td>
                      <td style={{ color: "black" }}>{item[1]?.Attendance}</td>
                      <td style={{ color: "black" }}>{item[2]?.Cie}</td>
                      <td style={{ color: "black" }}>{item[2]?.Attendance}</td>
                      <td style={{ color: "black" }}>{item[3]?.Cie}</td>
                      <td style={{ color: "black" }}>{item[3]?.Attendance}</td>
                      <td style={{ color: "black" }}>{item[4]?.Cie}</td>
                      <td style={{ color: "black" }}>{item[4]?.Attendance}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <br></br>
        <div>
          <span class="pull-left">{new Date().toLocaleDateString()}</span>
          <span class="pull-right">Chairman, DUGC</span>
        </div>
      </div>

      <div
        style={{ textAlign: "center", marginLeft: "0rem", marginTop: "2rem" }}
      >
        <ReactToPrint
          trigger={() => (
            <button
              type="button"
              className="btn btn-primary btn-md"
              style={{ position: "absolute" }}
            >
              Print this out!
            </button>
          )}
          content={() => componentRef}
        />
      </div>
    </div>
  );
};
export default Dashboard1;
