import React, { useEffect, useState } from "react";
import { TextArea } from "semantic-ui-react";

import * as XLSX from "xlsx/xlsx.js";
import { Chart } from "./Chart.js";

const Abcd3 = () => {
  const [excelData, setExcelData] = useState([]);

  const [handleUpload, setHandleUpload] = useState(false);

  var ExcelToJSON = function async() {
    this.parseExcel = async function (file) {
      var reader = new FileReader();

      reader.onerror = function (ex) {
        console.log(ex);
      };

      reader.readAsBinaryString(file);

      reader.onload = async function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
          type: "binary",
          cellDates: true,
          dateNF: "mm/dd/yyyy;@",
        });

        try {
          const sheetNames = workbook.SheetNames;

          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetNames[0]]
          );
          var json_object = JSON.stringify(XL_row_object);
          let json_data = JSON.parse(json_object);
          console.log(json_data);
          const courseName = localStorage.getItem("temp");
          var jsonres;
          var dataIDS = [
            {
              id1: courseName,
            },
          ];
          if (courseName) {
            await fetch("http://localhost:1999/api8", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataIDS),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("response", data);
                jsonres = data;
                const course1 = jsonres[0]["course1"];
                const course2 = jsonres[0]["course2"];
                const course3 = jsonres[0]["course3"];
                const course4 = jsonres[0]["course4"];
                const Total = jsonres[0]["Total"];

                for (var i in json_data) {
                  if (i == 0) {
                    console.log("updating0");
                    json_data[0].passing_percentage = course1;
                    console.log(json_data);

                    localStorage.setItem(
                      courseName + "course-1",
                      json_data[i].Last_Year_Passing_Percentage
                    );
                    console.log(localStorage.getItem(courseName + "course-1"));
                  }
                  if (i == 1) {
                    json_data[i].passing_percentage = course2;
                    localStorage.setItem(
                      courseName + "course-2",
                      json_data[i].Last_Year_Passing_Percentage
                    );
                  }

                  console.log(json_data);

                  if (i == 2) {
                    json_data[i].passing_percentage = course3;
                    localStorage.setItem(
                      courseName + "course-3",
                      json_data[i].Last_Year_Passing_Percentage
                    );
                  }

                  if (i == 3) {
                    json_data[i].passing_percentage = course4;
                    localStorage.setItem(
                      courseName + "course-4",
                      json_data[i].Last_Year_Passing_Percentage
                    );
                  }
                  if (i == 4) {
                    json_data[i].passing_percentage = Total;
                    localStorage.setItem(
                      courseName + "Total",
                      json_data[i].Last_Year_Passing_Percentage
                    );
                  }

                  setHandleUpload(true);
                }
              });

            setExcelData(json_data);
          }

          //read();
        } catch (err) {
          console.log(err);
        }
      };
    };
  };

  const uploadFile = (file) => {
    var xl2json = new ExcelToJSON();
    xl2json.parseExcel(file);
  };

  const getData = async () => {
    await fetch("http://localhost:1999/api8", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className="see">
      <div class="container" style={{ height: "400px" }}>
        <h2 class="text-center mt-4 mb-4" style={{ marginLeft: "-25%" }}>
          Comparision Between Last Year (2021-22) and Current Year (2022-23)
        </h2>

        <div class="card">
          <div class="card-header">
            <b>Select Excel File</b>
          </div>

          <div class="card-body">
            <input
              type="file"
              id="excel_file"
              onChange={(e) => uploadFile(e.target.files[0])}
            />
          </div>
        </div>

        <div id="excel_data" class="mt-5"></div>
      </div>
      <br />

      {handleUpload ? (
        <>
          <div
            className="table-div"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "auto",
              color: "black",
            }}
          >
            <table style={{ marginTop: "10px", marginLeft: "40rem" }}>
              <thead>
                <th style={{ color: "black" }}>Course Name</th>
                <th style={{ color: "black" }}>Last Year Passing Percentage</th>
                <th style={{ color: "black" }}>Passing percentage</th>
                <th style={{ color: "black" }}>Deviation</th>
              </thead>

              <tbody>
                {excelData &&
                  excelData.map((data) => {
                    return (
                      <tr>
                        <td style={{ color: "black" }}>
                          {data["Course_Name"]}
                        </td>
                        <td style={{ color: "black" }}>
                          {data["Last_Year_Passing_Percentage"]}
                        </td>
                        <td style={{ color: "black" }}>
                          {data["passing_percentage"]}
                        </td>
                        <td style={{ color: "black" }}>
                          {data["Last_Year_Passing_Percentage"] -
                            data["passing_percentage"]}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div
            style={{
              maxWidth: "60vw",
              display: "flex",
              minHeight: "600px",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Chart />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Abcd3;
