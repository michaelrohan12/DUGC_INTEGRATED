import React from 'react';
import './module7.css';
import { useState,useEffect } from "react";
import {storage} from './firebase';
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import axios from 'axios';
import kle from './kle_logo.png';
import kle_cen from './KLES-Centenary-LOGO-PNG.png';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import doc8 from "./DUGC.pdf";
import {Link} from 'react-router-dom';

const Coordinator=()=>
 {
    const imageListRef = ref(storage,'circulars/')
    const [imgUpload,setImgUpload]=useState(null);
    const [imgList,setImgList] = useState([]);
    const [url, setUrl] = useState('');

    const imageListRef1 = ref(storage,'minutes/')
    const [imgUpload1,setImgUpload1]=useState(null);
    const [imgList1,setImgList1] = useState([]);
    const [url1, setUrl1] = useState('');

    const uploadImage = ()=>{
        if (imgUpload===null)return;

        const imageRef=ref(storage,`circulars/${imgUpload.name + v4()}`);
        uploadBytes(imageRef, imgUpload).then(()=>{
            alert("Circular Uploaded successfully")

        })
        

    };

    useEffect(()=>{
        listAll(imageListRef).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImgList((prev)=>[url]);
                })
            })

        })

    },[]);

    const uploadImage1 = ()=>{
        if (imgUpload1===null)return;

        const imageRef1=ref(storage,`minutes/${imgUpload1.name + v4()}`);
        uploadBytes(imageRef1, imgUpload1).then(()=>{
            alert("Minutes Uploaded successfully")

        })
        

    };

    useEffect(()=>{
        listAll(imageListRef1).then((response)=>{
            response.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImgList1((prev)=>[...prev,url]);
                })
            })

        })

    },[]);
    
    
    
  return (
    <div class='main7'>
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

    <Tabs className="Tabs" style={{boxShadow:" 0px 2px 2px 0px rgb(0 0 0 / 10%)"}}>
    <b><TabList>
    <Tab><Link to='/theory-analysis'>DUGC Makeup Minor Approval</Link> </Tab>
    <Tab>
                   <Link to='/theory-analysis'>Theory Analysis</Link> </Tab>
                  <Tab><Link to="/lab-analysis"> Lab Result Analysis</Link></Tab>
         <Tab>SEE Result Analysis</Tab>
         <Tab>Ineligibility List Approval</Tab>
         <Tab>
            <Link to = '/courseList'>Edit Course</Link>
        </Tab>
       </TabList></b>
       </Tabs>

    <div class="grid-container7" style={{margin:"auto", boxShadow:"none"}}>
        <div class="grid-child17">
            

            <div class="divScroll7" style={{padding:"1rem", border:"1px solid black", borderRadius:"5px"}}>
                    <h4 class="text-left17">
                    <i aria-hidden="true"></i>View circulars here
                </h4>
              
                {/* <a href="https://onedrive.live.com/edit.aspx?resid=457A57C6040541F1!656&ithint=file%2cdocx"><i class="fa fa-file"></i>  Meeting for Minor 1 marks approval : 1-10-2022</a><br></br>
                 */}
                 {imgList.map((url)=>{
                  return <div><a href={url}><h5>Download the upcoming meeting circular <img src='https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fnew5.gif?alt=media&token=c17ff8db-a176-41de-8aba-c6775aa037df'></img></h5></a><br/></div>

                  })}
    
    
            </div>     
        </div>

        <div class="grid-child17">
            

            <div class="divScroll7" style={{padding:"1rem", border:"1px solid black", borderRadius:"5px"}}>

        
            
       
            <h4 class="text-left17">
                    <i aria-hidden="true"></i>View minutes of meeting here
                </h4>
              
                {/* <a href="https://onedrive.live.com/edit.aspx?resid=457A57C6040541F1!656&ithint=file%2cdocx"><i class="fa fa-file"></i>  Meeting for Minor 1 marks approval : 1-10-2022</a><br></br>
                 */}
                 <div style={{paddingTop:"2rem"}}>

                 <p style={{textAlign:"center", color:"black"}}>View approved withdrawal student list</p>
                {/* <button class='buttonD'onClick={onButtonClick7}>
                    Download
                </button> */}
                <a href={doc8} className="btn btn-primary" style={{color:"white", marginLeft:"11rem"}}>download</a>
                 {imgList1.map((url)=>{
                  return <div><a href={url}><h5>Download the latest minutes of meeting <img src='https://firebasestorage.googleapis.com/v0/b/dugc7-caf3d.appspot.com/o/ref_img%2Fnew5.gif?alt=media&token=c17ff8db-a176-41de-8aba-c6775aa037df'></img></h5></a><br/></div>

                  })}
                 </div>
    
            </div>     
        </div>
    </div>

    
    </div>
   
    
  
         )
}
 

 export default Coordinator;