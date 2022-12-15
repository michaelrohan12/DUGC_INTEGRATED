import React from "react";
const abc = () => {
  const ans = (e) => {
    var value = e.target.value;
    console.log(value);
    localStorage.setItem("temp", value);
    window.location.href = "see-upload";
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
      <div class="body">
        <div className="hi"></div>
        <div>
        <h4 id="heading" style={{ marginLeft: "0%" }}>
            <span>Semester Selection</span>
            {/* Semester Selection */}
          </h4>
        </div>
        <div className="main">
          <div className="dropdown1">
            <div className="dropdown">
              <button class="btn btn-primary">ODD SEM</button>
              <div class="dropdown-content">
                <select onChange={(e) => ans(e)}>
                  <option disabled selected>
                    Odd Semester
                  </option>
                  <option value={"3rd Semester"}>3rd Semester</option>
                  <option value={"5th Semester"}>5th Semester</option>
                  <option value={"7th Semester"}>7th Semester</option>
                </select>
              </div>
            </div>
          </div>

          <div className="dropdown1">
            <div class="dropdown">
              <button class="btn btn-primary">EVEN SEM</button>
              <div class="dropdown-content">
                <select onChange={(e) => ans(e)}>
                  <option disabled selected>
                    Even Semester
                  </option>
                  <option value={"4th Semester"}>4rd Semester</option>
                  <option value={"6th Semester"}>6th Semester</option>
                  <option value={"8th Semester"}>8th Semester</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default abc;
