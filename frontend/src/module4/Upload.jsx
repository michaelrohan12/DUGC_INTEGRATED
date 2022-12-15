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
    <div className="see">
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
      <div>
        <center>
          <h1
            className="vk1"
            style={{
              marginLeft: "14%",
              marginTop: "5.6rem",
              maxwidth: "50%",
              color:"black"
            }}
          >
            <br />
            SEE RESULT ANALYSIS
          </h1>
          <br />
          <br />
          <br />
          <h4 className="vk" style={{  }}>
            Upload passing
          </h4>
          <br />
{/* 
          <form name="myform" style={{ paddingTop: "0rem" }}>
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
          </form> */}
          <div style={{width:"20rem", maxWidth:"20rem"}}>
          <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Software Engineering</label>
    <input type="number" id="course1" name="course1" class="form-control" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Computer Networks - 1</label>
    <input type="number" id="course1" name="course1" class="form-control" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Machine Learning </label>
    <input type="number" id="course1" name="course1" class="form-control" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Web Technologies Lab</label>
    <input type="number" id="course1" name="course1" class="form-control" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Total</label>
    <input type="number" id="course1" name="course1" class="form-control" required/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e) => shr(e)}>Submit</button>
</form>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Abc;
