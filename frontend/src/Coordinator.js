import React from "react";
import "./module7.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
//import {useState} from 'react';
//import axios from 'axios';
import kle from "./kle_logo.png";
import kle_cen from "./KLES-Centenary-LOGO-PNG.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import doc1 from "./Meeting_Circular_DUGC_Template.docx";
import doc2 from "./Makeup_Circular_Students_Template.doc";
import doc3 from "./Theory_marks_approval_Template.docx";
import doc4 from "./LAB_marks_approval_Template.docx";
import doc5 from "./Makeup_Approval_Students_Template.doc";
import doc6 from "./Theory_Exam_Ineligible_Template.doc";
import doc7 from "./Lab_Exam_Ineligible_Template.doc";
import doc8 from "./DUGC.pdf";

const Coordinator = () => {
  // const onButtonClick1=()=>{
  //     fetch('Meeting_Circular_DUGC_Template.docx').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/images%2FTheory_Exam_Ineligible_Template.doc?alt=media&token=1753ab95-ec8f-4881-bde8-302a711e076a';
  //             alink.click();
  //         })

  //     })
  // }

  // const onButtonClick2=()=>{
  //     fetch('Makeup_Circular_Students_Template.doc').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='Makeup_Circular_Students_Template.doc';
  //             alink.click();
  //         })

  //     })
  // }

  // const onButtonClick3=()=>{
  //     fetch('Theory_marks_approval_Template.docx').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='Theory_marks_approval_Template.docx';
  //             alink.click();
  //         })

  //     })
  // }

  // const onButtonClick4=()=>{
  //     fetch('LAB_marks_approval_Template.docx').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='LAB_marks_approval_Template.docx';
  //             alink.click();
  //         })

  //     })
  // }

  // const onButtonClick5=()=>{
  //     fetch('Makeup_Approval_Students_Template.doc').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='Makeup_Approval_Students_Template.doc';
  //             alink.click();
  //         })

  //     })
  // }

  // const onButtonClick6=()=>{
  //     fetch('Theory_Exam_Ineligible_Template.doc').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='Theory_Exam_Ineligible_Template.doc';
  //             alink.click();
  //         })

  //     })
  // }

  // const onButtonClick7=()=>{
  //     fetch('Lab_Exam_Ineligible_Template.doc').then(response=>{
  //         response.blob().then(blob=>{
  //             const fileURL=window.URL.createObjectURL(blob);
  //             let alink=document.createElement('a');
  //             alink.href=fileURL;
  //             alink.download='Lab_Exam_Ineligible_Template.doc';
  //             alink.click();
  //         })

  //     })
  // }
  const imageListRef = ref(storage, "circulars/");
  const [imgUpload, setImgUpload] = useState(null);
  const [imgList, setImgList] = useState([]);
  const [url, setUrl] = useState([]);

  const imageListRef1 = ref(storage, "minutes/");
  const [imgUpload1, setImgUpload1] = useState(null);
  const [imgList1, setImgList1] = useState([]);
  const [url1, setUrl1] = useState([]);

  const uploadImage = () => {
    if (imgUpload === null) return;

    const imageRef = ref(storage, `circulars/${imgUpload.name + v4()}`);
    // uploadBytes(imageRef, imgUpload).then(()=>{
    //     alert("Circular Uploaded successfully")

    // })
    uploadBytes(imageRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url]);
        alert("Circular uploaded successfully");
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const uploadImage1 = () => {
    if (imgUpload1 === null) return;

    const imageRef1 = ref(storage, `minutes/${imgUpload1.name + v4()}`);
    uploadBytes(imageRef1, imgUpload1).then((snapshot1) => {
      getDownloadURL(snapshot1.ref).then((url1) => {
        setImgList1((prev) => [...prev, url1]);
        alert("Minutes of meeting uploaded successfully");
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef1).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url1) => {
          setImgList1((prev) => [...prev, url1]);
        });
      });
    });
  }, []);

  return (
    <div class="main7">
      {/* <div class='header'>

          <h1 class="text-center">Departmental Under Graduate Committee</h1>
          <h3 class="text-center">School of Computer Science and Engineering</h3>
          <h5 class="text-center">(For Academic Year 2022-23)</h5>
    </div> */}

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

      <Tabs className="Tabs">
        <b>
          <TabList style={{ boxShadow: " 0px 2px 2px 0px rgb(0 0 0 / 10%)" }}>
            <Tab onClick={() => window.open("http://localhost:4000")} style={{ background: "#a0a3a4" }}>
              DUGC Makeup Minor Approval
            </Tab>

            <Tab>
              <Link to="/theory-upload">Theory Marks Upload</Link>
            </Tab>
            <Tab>
              <Link to="/lab-analysis">Lab Result Analysis</Link>
            </Tab>
            <Tab>
              <Link to="/see-home"> SEE Result Analysis</Link>
            </Tab>
            <Tab>
              <Link to="/login321">
                Ineligibility List Approval
              </Link>
            </Tab>
            <Tab>
              <Link to="/withdraw">Course withdrawal</Link>
            </Tab>
          </TabList>
        </b>
      </Tabs>

      <div class="grid-container7" style={{ margin: "auto", boxShadow: "none" }}>
        <div class="grid-child17">
          <h4 class="text-left7" style={{ boxShadow: "none", textAlign: "center", color: "black" }}>
            <i class="fa fa-pencil-square orange-text" aria-hidden="true" style={{ paddingRight: "1rem", color: "red" }}></i>
            Circulars
          </h4>

          <div class="divScroll7" style={{ padding: "1rem", border: "1px solid black", borderRadius: "5px" }}>
            <b> DUGC meeting Circular Template</b>
            {/* <button class='buttonD'onClick={onButtonClick1}>

                    Download
                </button> */}
            <a href={doc1}>download</a>
            <br></br>
            <br></br>
            <b> Makeup examination notice template </b>
            <a href={doc2}>download</a>
            {/* <button class='buttonD'onClick={onButtonClick2}>
                    Download
                    </button>   */}
            <br></br>

            <br></br>
            <h4 class="text-left17">
              <i aria-hidden="true"></i>View circulars here
            </h4>

            {/* <a href="https://onedrive.live.com/edit.aspx?resid=457A57C6040541F1!656&ithint=file%2cdocx"><i class="fa fa-file"></i>  Meeting for Minor 1 marks approval : 1-10-2022</a><br></br>
             */}
            {/* <p><a href={url}>{url}</a></p> */}
            {imgList.map((url) => {
              return (
                <div>
                  <a href={url}>
                    <h5>
                      Download the upcoming meeting circular{" "}
                      <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fnew5.gif?alt=media&token=c17ff8db-a176-41de-8aba-c6775aa037df"></img>
                    </h5>
                  </a>
                  <br />
                </div>
              );
            })}
          </div>
        </div>

        <div class="grid-child17">
          <h4 class="text-left7" style={{ boxShadow: "none", textAlign: "center", color: "black" }}>
            <i class="fa fa-pencil-square orange-text" aria-hidden="true" style={{ paddingRight: "1rem", color: "red" }}></i>
            Minutes of Meeting
          </h4>

          <div class="divScroll7" style={{ padding: "1rem", border: "1px solid black", borderRadius: "5px" }}>
            <b> Theory marks approval template</b>
            {/* <button class='buttonD'onClick={onButtonClick3}>
                    Download
                </button> */}
            <a href={doc3}>download</a>
            <br></br>
            <br></br>

            <b> Lab marks approval template</b>
            {/* <button class='buttonD'onClick={onButtonClick4}>
                    Download
                </button> */}
            <a href={doc4}>download</a>
            <br></br>
            <br></br>

            <b>Makeup applicants approval template</b>
            {/* <button class='buttonD'onClick={onButtonClick5}>
                    Download
                </button> */}
            <a href={doc5}>download</a>
            <br></br>
            <br></br>

            <b>Theory ineligible students list approval template</b>
            {/* <button class='buttonD'onClick={onButtonClick6}>
                    Download
                </button> */}
            <a href={doc6}>download</a>
            <br></br>
            <br></br>

            <b>Lab ineligible students list approval template</b>
            {/* <button class='buttonD'onClick={onButtonClick7}>
                    Download
                </button> */}
            <a href={doc7}>download</a>

            <br></br>
            <br></br>

            <h4 class="text-left17">
              <i aria-hidden="true"></i>View minutes of meeting here
            </h4>
            <b>View approved withdrawal student list</b>
            {/* <button class='buttonD'onClick={onButtonClick7}>
                    Download
                </button> */}
            <a href={doc8}>download</a>
            {/* <a href="https://onedrive.live.com/edit.aspx?resid=457A57C6040541F1!656&ithint=file%2cdocx"><i class="fa fa-file"></i>  Meeting for Minor 1 marks approval : 1-10-2022</a><br></br>
             */}
            {imgList1.map((url1) => {
              return (
                <div>
                  <a href={url1}>
                    <h5>
                      Download the latest minutes of meeting{" "}
                      <img src="https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fnew5.gif?alt=media&token=c17ff8db-a176-41de-8aba-c6775aa037df"></img>
                    </h5>
                  </a>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div class="remainder7">
      <div style={{marginBottom:"2rem", marginLeft:"40rem", color:"white"}}>
        <button class="btn btn-primary">
          <b>
            <a style={{color:"white"}} href="http://localhost:5000/">Send Reminder</a>
          </b>
        </button>
      </div>
        <div class="" style={{display:"flex", marginLeft:"22rem"}}>
          <button class="btn btn-primary" onClick={uploadImage} style={{marginRight:"1rem"}}>
            <b>Upload Circular</b>
          </button>
          <input
            type="file"
            class=""
            onChange={(event) => {
              setImgUpload(event.target.files[0]);
            }}
          ></input>
          <button class="btn btn-primary" onClick={uploadImage1} style={{marginRight:"1rem"}}>
            <b>Upload minutes</b>
          </button>
          <input
            type="file"
            class=""
            onChange={(event) => {
              setImgUpload1(event.target.files[0]);
            }}
          ></input>
        </div>

        <br></br>
      </div>
    </div>
  );
};

export default Coordinator;
