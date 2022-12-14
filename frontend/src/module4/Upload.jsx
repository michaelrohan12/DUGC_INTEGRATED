import React from "react";
import { useNavigate } from "react-router-dom";
function Abc() {
  const navigate = useNavigate();

  const shr = async (e) => {
    let course1 = document.getElementById("course1").value;
    let course2 = document.getElementById("course2").value;
    let course3 = document.getElementById("course3").value;
    let course4 = document.getElementById("course4").value;
    let Total = document.getElementById("Total").value;
    localStorage.setItem("temp2", course1);
    console.log("Hello");
    var ok;
    ok = localStorage.getItem("temp");
    navigate("/see-home");
    const abcd = [
      {
        class_id: ok,
        course1: course1,
        course2: course2,
        course3: course3,
        course4: course4,
        Total: Total,
      },
    ];
    console.log(abcd);
    await fetch("http://localhost:1999/api10", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(abcd),
    }).then(() => {
      console.log("Request sent");
    });
  };
  return (
    <div className="see" style={{ border: "30px solid " }}>
      <div>
        <center>
          <h1
            className="vk1"
            style={{
              marginLeft: "23%",
              marginTop: "4rem",
              maxwidth: "50%",

              backgroundColor: "#cce0e9",
            }}
          >
            <br />
            SEE RESULT ANALYSIS
          </h1>
          <br />
          <br />
          <br />
          <h2 className="vk" style={{ marginLeft: "-17%" }}>
            Upload passing
          </h2>
          <br />

          <form name="myform" style={{ paddingTop: "5rem" }}>
            <label style={{ marginRight: "30px" }}>Software Engineering </label>
            <input type="number" id="course1" name="course1" required />
            <br />
            <br />
            <label style={{ marginRight: "12px" }}>
              {" "}
              Computer Networks - 1{" "}
            </label>
            <input type="number" id="course2" name="course2" required />
            <br />
            <br />
            <label style={{ marginRight: "54px" }}> Machine Learning </label>
            <input type="number" id="course3" name="course3" required />
            <br />
            <br />
            <label style={{ marginRight: "21px" }}>
              {" "}
              Web Technologies Lab{" "}
            </label>
            <input type="number" id="course4" name="course4" required />
            <br />
            <br />
            <label style={{ marginRight: "144px" }}> Total </label>
            <input type="number" id="Total" name="Total" required />
            <br />
            <br />
            <br />
            <button
              style={{ marginLeft: "170px" }}
              id="sub-btn"
              onClick={(e) => shr(e)}
            >
              Submit
            </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default Abc;
