import React, { useState } from 'react';
import pic from "./img1.jpg";
import { useNavigate } from 'react-router-dom';
import "./Generate.css"
import Select from 'react-select';
import axios from 'axios';

//options for sem 
const Sem = [
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
];

const Course13 = [
  {
    label: 'GRAPH THEORY AND LINEAR ALGEBRA',
    value: 'GRAPH THEORY AND LINEAR ALGEBRA',
  },
  { label: 'DATABASE MANAGEMENT SYSTEM', value: 'DATABASE MANAGEMENT SYSTEM' },
  {
    label: 'DISCRETE MATHEMATICAL STRUCTURES',
    value: 'DISCRETE MATHEMATICAL STRUCTURES',
  },
  {
    label: 'DATA STRUCTURES AND ALGORITHMS',
    value: 'DATA STRUCTURES AND ALGORITHMS',
  },
  {
    label: 'C PROGRAMMING FOR PROBLEM SOLVING',
    value: 'C PROGRAMMING FOR PROBLEM SOLVING',
  }
]
const Course14 = [
  {
    label: 'OBJECT ORIENTED PROGRAMMING',
    value: 'OBJECT ORIENTED PROGRAMMING',
  },
  {
    label: 'PRINCIPLES OF COMPILER DESIGN',
    value: 'PRINCIPLES OF COMPILER DESIGN',
  },
  {
    label: 'OPERATING SYSTEM PRINCIPLES AND PROGRAMMING',
    value: 'OPERATING SYSTEM PRINCIPLES AND PROGRAMMING',
  },
  {
    label: 'MICROCONTROLLER: PROGRAMMING AND INTERFACING',
    value: 'MICROCONTROLLER: PROGRAMMING AND INTERFACING',
  },
  {
    label: 'EXPLORATORY DATA ANALYSIS',
    value: 'EXPLORATORY DATA ANALYSIS',
  },
]
const Course15 = [
  {
    label: 'SYSTEM SOFTWARE',
    value: 'SYSTEM SOFTWARE',
  },
  {
    label: 'MACHINE LEARNING',
    value: 'MACHINE LEARNING',
  },
  {
    label: 'INTERNET OF THINGS',
    value: 'INTERNET OF THINGS',
  },
  {
    label: 'COMUPUTER NETWORKING',
    value: 'COMUPUTER NETWORKING',
  },
  {
    label: 'SYSTEM SOFTWARE LAB',
    value: 'SYSTEM SOFTWARE LAB',
  }
]

const Course16 = [
  {
    label: 'COMPUTER NETWORKS 2',
    value: 'COMPUTER NETWORKS 2',
  },
  {
    label: 'DISTRIBUTED AND CLOUD COMPUTING',
    value: 'DISTRIBUTED AND CLOUD COMPUTING',
  },
  {
    label: 'BLOCKCHAIN AND DISTRIBUTED LEDGERS',
    value: 'BLOCKCHAIN AND DISTRIBUTED LEDGERS',
  },
  {
    label: 'COMUPUTER NETWORKING LABRORATORY',
    value: 'COMUPUTER NETWORKING LABRORATORY',
  },
  {
    label: 'MINOR PROJECT',
    value: 'MINOR PROJECT',
  }
]

const Course17 = [
  {
    label: 'BIG DATA ANALYTICS',
    value: 'BIG DATA ANALYTICS',
  },
  {
    label: 'INFORMATION SECURITY',
    value: 'INFORMATION SECURITY',
  },
  {
    label: 'SOCIAL NETWORK ANALYSIS',
    value: 'SOCIAL NETWORK ANALYSIS',
  },
  {
    label: 'CYBER SECURITY',
    value: 'CYBER SECURITY',
  },
  {
    label: 'SOFTWARE DEFINED NETWORKS',
    value: 'SOFTWARE DEFINED NETWORKS',
  }
]

const courseArray = [
  Course13,
  Course14,
  Course15,
  Course16,
  Course17
]
const Generate = props => {
  const [semester, setSemester] = useState();
  const [course, setCourse] = useState(" ");

  const [file,setFile] =useState();

  const handleChange1 = (value) => {
    setSemester(value)
    localStorage.setItem("sem", value);
  }
  const handleChange2 = (value) => {
    setCourse(value)
  }
  
  function handleChange(event) {
    setFile(event.target.files[0])
  }
  const navigate=useNavigate();
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append('profile', file);
    formData.append('course',course);
    // formData.append('fileName', file?.name);
    var config = {
      method: 'post',
      url: 'http://localhost:1999/xyz/uploadfile',
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data : formData
    };
    axios(config).then((response) => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });

    // var config1 = {
    //   method: 'post',
    //   url: 'http://localhost:1999/courseCoordinator',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data : {
    //     courseData : course,
    //     semData:semester
    //   }
    // };

    // axios(config1).then((response)=>{
    //   console.log(response);
    // }).catch(err=>{
    //   console.log(err);
    // })
    navigate("/Dashboard", {state:{courseDetails: courseArray[semester-3], semVal: semester, courseVal: course}});
  }

  const getRole = () => {
    return localStorage.getItem("role") ? localStorage.getItem("role") : "coordinator" 
  }

  function handleSubmit1(e){
    e.preventDefault();
    localStorage.setItem("sem", semester);
    navigate("/Dashboard1")
  }

  const [role, setRole] = useState(getRole())

  return (
    <>
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
    <div id="abc" style={{marginTop:"0px"}}>
    
      <div className="select2" style={{display:"flex"}}>
        <div className="courses">
          <h3 className="component" style={{marginBottom:"1rem"}}>Select Semester</h3>
          <Select className="sem" placeholder="Sem" options={Sem} onChange={(item) =>{
            handleChange1(item.value)
          }}/>
        </div>
        {
          role && role !== "dugc" ? <div className='courses'>
          <h3 class="component">Course</h3>
          <Select className="course" placeholder="Course" options={courseArray[semester - 3]} 
          onChange={(item) => {
            handleChange2(item.value)
          }
          }
           />
        </div> : null
        }
        
      </div>
      <div className='submitform' style={{display:"flex"}}>
      <form>
      {
        role && role !=="dugc"?<div class="" >
              <h3 style={{ padding: "25px" }}>Please Select a file to Upload</h3>
          <input type="file" onChange={handleChange}/>
          <button onClick={handleSubmit} className="btn btn-primary" >Upload</button>
      </div>: 
      <div class="conainer">
        
        <button onClick={handleSubmit1} style={{marginTop:"5rem"}} className="btn btn-primary"> Generate Consolidated Table</button>
      </div>
      }

        </form>
        </div>
    </div>
    </>
  );
};

export default Generate;