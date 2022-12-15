import pic from "./img1.jpg";
import axios from "axios";
import "./Dashboard.css";
// import { response } from "express";
import react, { useEffect, useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [array, setArray] = useState([]);
  const [course,setCourse]=useState();
  const [generate,setGenerate]=useState(false);
  const navigate = useNavigate();
  const {state} = useLocation();
  const {courseDetails} = state;
  const {semVal} = state;
  const {courseVal} = state
  const generatedata = async () => {
    setGenerate(true);
    await axios.post("http://localhost:1999/courseCoordinator").then((res) => {
      console.log(res.data.data);
      setArray(res.data);
    });
  };
  const navigateDugc = () =>{
    navigate('/Dashboard1', {state:{details: courseDetails}});
  }
  return (
    <>
                          <div class="container-fluid7" style={{ paddingTop: "1rem", paddingBottom: "1rem", position: "sticky", top: "0", marginBottom:"2rem" }}>
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
    <div class="container2" style={{marignTop:"1rem"}}>
      <div>
      <h4>Semester: <span style={{color:"red"}}>{semVal}</span></h4>
      <h4>Course: <span style={{color:"red"}}>{courseVal}</span></h4>
        <table className="table" style={{height:"30vh", maxHeight:"70vh", overflow:"scroll"}}>
          <thead className="thead-dark">
            <tr>
              <th>SL</th>
              <th>NAME</th>
              <th>USN</th>
              <th>RollNo</th>
              <th>DIVISION</th>
              <th>ATTENDANCE</th>
              <th>CIE</th>
            </tr>
          </thead>
          <tbody className="tableContent">
            {array.map((data, key) => {
              if (data.CIE < 40 || data.Attendance < 75) {
                return (
                  <tr>
                    <td style={{color:"black"}}>{data.Sl}</td>
                    <td style={{color:"black"}}>{data.Name}</td>
                    <td style={{color:"black"}}>{data.USN}</td>
                    <td style={{color:"black"}}>{data.Rollno}</td>
                    <td style={{color:"black"}}>{data.Division}</td>
                    <td style={{color:"black"}}>{data.Attendance}</td>
                    <td style={{color:"black"}}>{data.CIE}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <button onClick={() => generatedata()} className="btn btn-primary" style={{margin: "1rem"}}>
        Generate the Ineligibility list
      </button>
    </div>
    </>
  );
};
export default Dashboard;
