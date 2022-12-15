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
      <div class="vj" >
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
          <div className="hi">
          <div style={{display:"flex", margin:"1rem"}}>
            <button className="btn btn-primary" onClick={() => abcd1("/see-theory")}>
              Upload Marks
            </button>
            <h4 className="upload">Upload Passing Percentage</h4>
          </div>

            <div id="vertical-line"></div>
          <div style={{display:"flex", margin:"1rem"}}>

            <button className="btn btn-primary" style={{marginLeft:"0px"}} onClick={() => abcd2("/see-theory1")}>
              Result Analysis
            </button>
            <h4 className="upload">View Result Analysis</h4>
          </div>
          </div>
          <div className="main"></div>
        </div>
      </div>
    </div>
  );
};
export default Utkarsh;
