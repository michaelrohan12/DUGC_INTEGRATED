import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "./jsonfiles/analysis.json";
import { Bar } from "react-chartjs-2";
import "./css/style.css";
import avgData from "./jsonfiles/analysisforavg.json";
import previousyear from "./jsonfiles/previousyear.json";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { KeyOutlined } from "@ant-design/icons";

var logo1 = require("./images/kletech1.png");
var kle_cen = require("./images/klecen.png");
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Tooltip,
  Legend
);

function Dugc5({ course }) {
  const [dataum, setDataum] = useState([]);
  const [prevdataum, prevsetDataum] = useState([]);

  const [course1, setCourse1] = useState(JSON.parse(localStorage.getItem("course1")));

  var config = {
    method: "get",
    url: "http://localhost:8002/data",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: false,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Division-Wise Marks Allotment",
      },
    },
  };

  const labels = dataum?.map((item) => item?.Column1);

  // function test() {
  //   var avg,sum,count;
  //   var aaveg = Data.map((item) =>item?.A);
  //   var baveg = Data.map((item) =>item?.B);
  //   var caveg = Data.map((item) =>item?.C);
  //   var daveg = Data.map((item) =>item?.D);
  //   var eaveg = Data.map((item) =>item?.E);
  //   var taveg = Data.map((item) =>item?.Total);
  //   aaveg.forEach(function(num) { sum += num });
  //   aaveg = sum/7;

  //   console.log(aaveg);
  // }

  let data = {
    labels,
    datasets: [
      {
        label: "A Division Students",
        data: dataum?.map((item) => item?.A),
        borderColor: "white",
        backgroundColor: "blue",
        barThickness: 25,
      },
      {
        label: "Previous Year Students",
        data: previousyear?.map((item) => item?.B),
        borderColor: "white",
        backgroundColor: "red",
        barThickness: 25,
      },
    ],
  };
  const data1 = {
    labels,
    datasets: [
      {
        label: "B Division Students",
        data: dataum?.map((item) => item?.B),
        borderColor: "white",
        backgroundColor: "blue",
        barThickness: 25,
      },
      {
        label: "Previous Year Students",
        data: previousyear?.map((item) => item?.A),
        borderColor: "white",
        backgroundColor: "red",
        barThickness: 25,
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        label: "C Division  Students",
        data: dataum?.map((item) => item?.C),
        borderColor: "white",
        backgroundColor: "blue",
        barThickness: 25,
      },
      {
        label: "Previous Year Students",
        data: previousyear?.map((item) => item?.A),
        borderColor: "white",
        backgroundColor: "red",
        barThickness: 25,
      },
    ],
  };
  const data3 = {
    labels,
    datasets: [
      {
        label: "D Division Students",
        data: dataum?.map((item) => item?.D),
        borderColor: "white",
        backgroundColor: "blue",
        barThickness: 25,
      },
      {
        label: "Previous Year Students",
        data: previousyear?.map((item) => item?.A),
        borderColor: "white",
        backgroundColor: "red",
        barThickness: 25,
      },
    ],
  };
  const data4 = {
    labels,
    datasets: [
      {
        label: "E Division Students",
        data: dataum?.map((item) => item?.E),
        borderColor: "white",
        backgroundColor: "blue",
        barThickness: 25,
      },
      {
        label: "Previous Year Students",
        data: previousyear?.map((item) => item?.A),
        borderColor: "white",
        backgroundColor: "red",
        barThickness: 25,
      },
    ],
  };

  const navigate = useNavigate();

  // const { coursename } = state ? state : null;
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setDataum(response.data);
        var previousyear = response.data.Year - 1;
        prevsetDataum(previousyear.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  *{font-size:93%}\n      body{\n          background-color:white;;\n        } \n #wrapper{ height: 100px; width: 100px;}      h1{\n          background-color: rgb(82, 139, 139);;\n          color:black;\n        }\n        h3{background-color: white;}\n        ",
          }}
        />
        {/* <input type="button" value="" onClick={test} /> */}
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
          <hr />

          <h2>
            LAB Result Analysis{" "}
            <input
              class="btn btn-primary btn-sm"
              id="logoutbtn"
              type="submit"
              value="Logout"
              onClick={() => {
                navigate("/");
                return false;
              }}
            />
          </h2>
        </center>
        <hr />
        <h5>Course Code : {course1?.name} </h5>
        <h5>Course Name : {course1?.code}</h5>
        <h5>Year : 3rd{course1?.year}</h5>
        <h5>Semester :5th{course1?.sem}</h5>

        <center>
          <div className="wrapper">
            <h4>
              <p> Analysis : Division-Wise </p>

              <Bar
                className="chart1"
                width={"680%"}
                height={"390%"}
                options={options}
                data={data}
              />
              <Bar
                className="chart2"
                width={"680%"}
                height={"390%"}
                options={options}
                data={data1}
              />
              <Bar
                className="chart1"
                width={"680%"}
                height={"390%"}
                options={options}
                data={data2}
              />
              <Bar
                width={"680%"}
                height={"390%"}
                options={options}
                data={data3}
              />
              <Bar
                className="chart1"
                width={"680%"}
                height={"390%"}
                options={options}
                data={data4}
              />
            </h4>
            <br />
          </div>
        </center>
        <hr />

        {/* <h3>Extra Analysis:</h3>
    1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, placeat
    eius mollitia harum nemo, doloremque recusandae cum tenetur labore ipsum, et
    quidem consequuntur laboriosam quae itaque? Fugit corporis dolorum nisi.
    <br /> 2. Lorem ipsum dolor sit amet r adipisicig elit. Ipsum error
    natus ad culpa hic provident quod corporis dignissimos illo vitae reiciendis
    doloremque id, unde modi asperiores facere magni cupiditate itaque.
    <br /> 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor
    aspernatur distinctio optio, cumque cupiditate at harum quis voluptates
    voluptatum numquam et voluptas. Error eius veritatis debitis corrupti, impedit */}
      </>
      <h5>Consolidated Sheet : </h5>

      <table >
  <tr>
  <th>#</th>
    <th >S</th>
    <th >A</th>
    <th >B</th>
    <th >C</th>
    <th >D</th>
    <th >E</th>
    <th >F</th>  
    <th >Average</th>
  </tr>
  <tr>
  <th >A</th>
    <td>2</td>
    <td>4</td>
    <td>9</td>
    <td>21</td>
    <td>24</td>
    <td>9</td>
    <td>3</td>
    <td>10.2</td>
  </tr>
  
  <tr>
  <th >B</th>
    <td>1</td>
    <td>6</td>
    <td>5</td>
    <td>16</td>
    <td>20</td>
    <td>3</td>
    <td>2</td>
    <td>7.5</td>
  </tr>

  <tr>
  <th >C</th>
    <td>3</td>
    <td>7</td>
    <td>9</td>
    <td>19</td>
    <td>25</td>
    <td>12</td>
    <td>4</td>
    <td>11.8</td>
  </tr>

  <tr>
  <th >D</th>
    <td>5</td>
    <td>2</td>
    <td>15</td>
    <td>12</td>
    <td>26</td>
    <td>4</td>
    <td>1</td>
    <td>9.2</td>
  </tr>

  <tr>
  <th >E</th>
    <td>2</td>
    <td>10</td>
    <td>12</td>
    <td>20</td>
    <td>22</td>
    <td>3</td>
    <td>2</td>
    <td>10.1</td>
  </tr>

  
</table>
      


    </div>
  );
}

export default Dugc5;
