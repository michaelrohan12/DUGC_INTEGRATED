import React from "react";
const abc = () => {
  const ans = (e) => {
    var value = e.target.value;
    console.log(value);
    localStorage.setItem("temp", value);
    window.location.href = "see-index";
  };
  return (
    <div className="see" style={{ border: "30px solid grey" }}>
      
      <div className="nav1">
        <div className="dept" style={{ border: "10px solid grey" }}>
          
          <h3 style={{ color: "Blue" }}>
            Departmental Under Graduate Committee
          </h3>
          <h4>School of Computer Engineering</h4>
          <h4 className="h4">For Academic Year 2022-2023</h4>
        </div>
      </div>
      <div class="body">
        <div className="hi"></div>
        <div className="main">
          <div className="dropdown1">
            <div className="dropdown">
              <button class="dropbtn">ODD SEM</button>
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

          <h4 id="heading" style={{ marginLeft: "0%" }}>
            <span>Semester Selection</span>
            {/* Semester Selection */}
          </h4>

          <div className="dropdown1">
            <div class="dropdown">
              <button class="dropbtn">EVEN SEM</button>
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
