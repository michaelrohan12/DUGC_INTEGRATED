import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Utkarsh = () => {
  const [marks, setmarks] = useState();

  const navigate = useNavigate();
  const abcd1 = (dir) => {
    navigate(dir);
  };
  const abcd2 = (dir) => {
    navigate(dir);
  };
  return (
    <div className="see">
      <div class="vj container-fluid" style={{ border: "30px solid grey" }}>
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
          <div className="hi">
            <button className="dropbtn" onClick={() => abcd1("/see-theory")}>
              Upload Marks
            </button>
            <h4 className="upload">Upload Passing Percentage</h4>

            <div id="vertical-line"></div>

            <h4 className="upload">View Result Analysis</h4>

            <button className="dropbtn" onClick={() => abcd2("/see-theory1")}>
              Result Analysis
            </button>
          </div>
          <div className="main"></div>
        </div>
      </div>
    </div>
  );
};
export default Utkarsh;
