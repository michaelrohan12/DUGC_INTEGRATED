import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React from "react";
import { Bar } from 'react-chartjs-2';
import './homepage-dugc.css';

var fileID;
var dataID1;
var dataID2;
var dataIDS;
var tableData; 
var data1;
var data2;
var dataGrad;
var three = ['Graph Theory and Linear Algebra', 'Discrete Mathematical Structures', 'Computer Organization and Architecture', 'Data Structures and Algorithms', 'Database Management System'];
var four = ['Applied Statistics with R', 'Object Oriented Programming', 'Principles of Compiler Design', 'Operating Systems Principles', 'Exploratory Data Analysis','Machine Learning'];
var five = ['Software Engineering', 'System Software', 'Machine Learning', 'Natural Language Processing'];
var six = ['Computer Network-2', 'Distributed and Cloud Computing', 'Blockchain and Distributed Ledgers', 'Algorithm Problem Solving', 'Embedded Intelligent Systems', 'Parallel Computing', 'Quantum Computing', 'Semantic Web', 'Data Integration and Cloud Services'];
var seven = ['Big Data and Analytics', 'Information Security', 'Social Network Analysis', 'Cyber Security', 'Software Defined Networks'];
var assets_global;


class HomepageDugc extends React.Component {
  choice;
  state;
  year;
  sem;
  course
  div;
  assets;
  constructor(){
    super();
    this.state = {
      name: "React",
      showChart: false,
      showDownload: false,
      showTable: false,
      showConsoliTable: false,
    }
  }

  createOption(ddl, text, value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
  }

  configureDropDownLists(ddl1, ddl2) {
    switch(ddl1.target.value) {
      case '3':
        ddl2.options.length = 0;
        for(let i = 0; i < three.length; i++) {
          this.createOption(ddl2, three[i], three[i]);
        }
        console.log("hi");
        break;
      case '4':
        ddl2.options.length = 0;
        for(let i = 0; i < four.length; i++) {
          this.createOption(ddl2, four[i], four[i]);
        }
        break;
      case '5':
        ddl2.options.length = 0;
        for(let i = 0; i < five.length; i++) {
          this.createOption(ddl2, five[i], five[i]);
        }
        break;
      case '6':
        ddl2.options.length = 0;
        for(let i = 0; i < six.length; i++) {
          this.createOption(ddl2, six[i], six[i]);
        }
        break;
      case '7':
        ddl2.options.length = 0;
        for(let i = 0; i < seven.length; i++) {
          this.createOption(ddl2, seven[i], seven[i]);
        }
        break;
      default:
        break;
    }
  }


  getYear = (e) => {
    this.year = e.target.value
    
  };

  getSem = (e,course) => {
   this.sem = e.target.value
   this.configureDropDownLists(e, course)
 };

 getCourse = (e) => {
   this.course = e.target.value
 };

 getDiv = (e) => {
   this.div = e.target.value
 };

 getAssess = (e) => {
   this.assets = e.target.value
   assets_global = this.assets
 };

  getChoice = async(e) => {
    this.choice = e.target.value;
    console.log(this.choice);
  }

  sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async dataRetrieval(dataIDS) {
    var URL_data = "";
    if (assets_global === 'CIE') {
      URL_data = "http://localhost:1999/cie4";
    }
    else {
      URL_data = "http://localhost:1999/api"
    }
    await fetch(URL_data, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(dataIDS)
  }).then(
    response => response.json()
  ).then(
      data => {
        tableData.push(data);
        console.log(tableData)
      }
    )
  }

  check = async (e) => {
    e.preventDefault();
    
    if (this.choice === "graf") {
      var jsonres;
      console.log(this.choice);
      dataID1 = this.year + '-' + this.sem + '-' + this.course + '-' + this.assets
      var prevYear  = parseInt(this.year) - 1
      dataID2 = prevYear + '-' + this.sem + '-' + this.course + '-' + this.assets
      data1 = [];
      data2 = [];
      dataGrad = [[],[],[],[],[]];

      dataIDS = [
        {id1: dataID1, id2: dataID2}
      ]
      if( this.assets === 'CIE'){
        await fetch("http://localhost:1999/cie4", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dataIDS)
      }).then(
        response => response.json()
      ).then(
         async data => {
            jsonres = data;
            for(var i=0; i<jsonres.length; i++) {
                if(i<5){
                    data1.push(jsonres[i]['class_avg'])
                    dataGrad[i].push(jsonres[i]['S_count'])
                    dataGrad[i].push(jsonres[i]['A_count'])
                    dataGrad[i].push(jsonres[i]['B_count'])
                    dataGrad[i].push(jsonres[i]['C_count'])
                    dataGrad[i].push(jsonres[i]['D_count'])
                    dataGrad[i].push(jsonres[i]['E_count'])
                    dataGrad[i].push(jsonres[i]['F_count'])
                }
                else 
                    data2.push(jsonres[i]['class_avg'])
            }
            console.log(data1,data2,jsonres)
            if(this.state.showChart === false) {
              this.setState({showTable: false})
              this.setState({ showDownload: false });
              this.setState({ showConsoliTable: false });
              this.setState({showChart :!this.state.showChart});
            }
            else{
              this.setState({showChart: false})
  
              await this.sleep(500)
  
              this.setState({showChart: true})
            }
            console.log(data1)
            console.log(jsonres);
          }
        )
      }
      else{

        await fetch("http://localhost:1999/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataIDS)
    }).then(
      response => response.json()
    ).then(
       async data => {
          jsonres = data;
          for(var i=0; i<jsonres.length; i++) {
              if(i<5){
                  data1.push(jsonres[i]['class_avg'])
                  dataGrad[i].push(jsonres[i]['S_count'])
                  dataGrad[i].push(jsonres[i]['A_count'])
                  dataGrad[i].push(jsonres[i]['B_count'])
                  dataGrad[i].push(jsonres[i]['C_count'])
                  dataGrad[i].push(jsonres[i]['D_count'])
              }
              else 
                  data2.push(jsonres[i]['class_avg'])
          }
          console.log(data1,data2,jsonres)
          if(this.state.showChart === false) {
            this.setState({showTable: false})
            this.setState({ showDownload: false });
            this.setState({ showConsoliTable: false });
            this.setState({showChart :!this.state.showChart});
          }
          else{
            this.setState({showChart: false})

            await this.sleep(500)

            this.setState({showChart: true})
          }
          console.log(data1)
          console.log(jsonres);
        }
      )
      }
      
    }
    else if (this.choice === "xlxs") {
      if(this.state.showDownload === true){
        this.setState({ showDownload: false })

        await this.sleep(500)

        this.setState({ showDownload: true })
      }
      else{
        this.setState({showTable: false})
        this.setState({ showChart: false });
        this.setState({ showConsoliTable: false });
        this.setState({showDownload :!this.state.showDownload});
      }
       
    }
    else if (this.choice === "tabl") {
      console.log(this.choice);
      dataID1 = this.year + '-' + this.sem + '-' + this.course + '-' + this.assets
      var prevYear2  = parseInt(this.year) - 1
      dataID2 = prevYear2 + '-' + this.sem + '-' + this.course + '-' + this.assets

      dataIDS = [
        {id1: dataID1, id2: dataID2}
      ]

      tableData = []


      await fetch("http://localhost:1999/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataIDS)
    }).then(
      response => response.json()
    ).then(
      async data => {
          tableData.push(data);
          console.log(tableData)
         
          if(this.state.showTable === true){
            this.setState({ showTable: false })

            await this.sleep(500)

            this.setState({ showTable: true })
          }
          else{
            this.setState({showChart: false})
            this.setState({ showDownload: false });
            this.setState({ showConsoliTable: false });
            this.setState({showTable :!this.state.showTable});
          }
          console.log(tableData);
        }
      )
      
    }
    else if (this.choice === "consoliData") {
      console.log(this.choice);
      var numOfCourses;
      var courses;
      tableData = [];

      switch(this.sem) {
        case '3':
          numOfCourses = three.length;
          courses = three;
          break;
        case '4':
          numOfCourses = four.length;
          courses = four;
          
          break;
        case '5':
          numOfCourses = five.length;
          courses = five;

          break;
        case '6':
          numOfCourses = six.length;
          courses = six;

          break;
        case '7':
          numOfCourses = seven.length;
          courses = seven;

          break;
        default:
          break;
      }

      for(var i = 0; i < numOfCourses; i++){
        dataID1 = this.year + '-' + this.sem + '-' + courses[i] + '-' + this.assets
        var prevYear3  = parseInt(this.year) - 1
        dataID2 = prevYear3 + '-' + this.sem + '-' + courses[i] + '-' + this.assets
        dataIDS = [
          {id1: dataID1, id2: dataID2}
        ]

        await this.dataRetrieval(dataIDS)
      }
      
         
      if(this.state.showConsoliTable === true){
        this.setState({ showConsoliTable: false })

        await this.sleep(500)

        this.setState({ showConsoliTable: true })
      }
      else{
        this.setState({showChart: false})
        this.setState({ showDownload: false });
        this.setState({ showTable: false });
        this.setState({showConsoliTable :!this.state.showConsoliTable});
      }
      
      console.log(tableData);
      
    }
  }
  download = async(e) =>{
    fileID = this.year + '-' + this.sem + '-' + this.course + '-' + this.assets + '-' + this.div

      console.log(fileID)
    var abc = [
      { id: fileID }
  ]
    console.log('download');
    await fetch("http://localhost:1999/download", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(abc)
  }).then(
      response => {
          response.blob().then(blob => {
              let url = window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = url;
              a.download = 'sample.xls';
              a.click();
          });
      }
  );
  }

  render() {
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
      <h1 style={{marginTop:"8rem", marginLeft:"33rem"}}>DUGC Dashboard</h1>
      <div>
        {/* <button id="user">Profile <i className="fa fa-user" /></button>
        <button id="logout">Logout <i className="fa fa-sign-out" /></button> */}
      </div>
      <div className="modal-container">
        <div id="modal">
          <fieldset id="user-credential">
            <legend>Your Details</legend>
            <p id="name">Name: </p>
            <p id="role">Role: </p>
          </fieldset>
          <button id="close">
            Close<i className="fa fa-close" />
          </button>
        </div>
      </div>
      <div id="contents" style={{marginTop:"5rem"}}>
        <div id="selections" style={{border:"1px solid black", borderRadius:"5px", boxShadow:"none", padding:"2rem"}}>
          <section>
            <p id='message' style={{color:"black", textAlign:"center"}}>Select Options to View Analysis</p>
            <form name="options" onSubmit={this.check}>
            <div style={{display:"space-around", marginBottom:"1rem"}}>
            <select style={{background:"black", color:"white"}} id="year" onChange={(e) => this.getYear(e)} className="select-option">
                <option disabled selected>Year</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2018</option>
              </select>
              <select style={{background:"black", color:"white"}} className="select-option" onChange={(e) => this.getSem(e,document.getElementById('courses'))} id="sem" required>
                <option disabled selected>Semester</option>
                <option value={3}>3rd</option>
                <option value={4}>4th</option>
                <option value={5}>5th</option>
                <option value={6}>6th</option>
                <option value={7}>7th</option>
              </select>
              {/* <select className="select-option" id="sec" required>
                <option disabled selected>Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select> */}
             <select style={{background:"black", color:"white"}} className="select-option" onChange={(e) => this.getAssess(e)} id="acti" required>
                <option disabled selected>Assessment</option>
                <option value={"M1"}>Minor-1</option>
                <option value={"M2"}>Minor-2</option>
                <option value={"CIE"}>C.I.E</option>
                <option value={"lab"}>Lab</option>
              </select>
              <select style={{background:"black", color:"white"}}  id="courses" onChange={(e) => this.getCourse(e)} className="select-option">
                <option disabled selected>Choose Course</option>
                {/* <option value={'Computer Networks - 1'}>Computer Networks - 1</option>
                <option value={'Machine Learning'}>Machine Learning</option>
                <option value={'Natural Language Processing(NLP)'}>Natural Language Processing(NLP)</option>
                <option value={'Internet of Things(IoT)'}>Internet of Things(IoT)</option>
                <option value={'Software Engineering'}>Software Engineering</option>
                <option value={'System Software'}>System Software</option> */}
              </select>
              <select style={{background:"black", color:"white", margin:"4px"}} className="select-option" onChange={(e) => this.getChoice(e)} id="misc-options">
                <option disabled selected>Choose Option</option>
                <option value="xlxs">Export Excel Sheet</option>
                {/* <option value="comp">Compare Results</option> */}
                <option value="graf">Graphical Analysis</option>
                <option value="tabl">View Table</option>
                <option value="consoliData">View Consolidated Table</option>
              </select>
              </div>
              <div style={{textAlign:"center"}}>

              <button id="" className='btn btn-primary' type="submit">Analyse</button>
              </div>
            </form>
          </section>
        </div>
        <div id="analysis">
          {this.state.showChart && <Chart />}
          {this.state.showDownload && (<><select className='select-option' id='select-division' onChange={(e) => this.getDiv(e)}>
            <option disabled selected>Choose Division</option>
            <option value={"A"}>A</option>
            <option value={"B"}>B</option>
            <option value={"C"}>C</option>
            <option value={"D"}>D</option>
            <option value={"E"}>E</option>
          </select>
          <button id="download-excel" type="submit" onClick={(e) => this.download(e)}>Download Excel</button></>)}
          {this.state.showTable && <Table />}
          {this.state.showConsoliTable && <ConsolTable />}
        </div>
      </div>
    </>
  );
  }
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class Chart extends React.Component{ 
  constructor(props){
    super(props);

    this.avgdata = {
      label: ["Class Avg of Current Year"],
      data: data1,
      backgroundColor: 'rgba(0, 99, 132, 0.6)',
      borderColor: 'rgba(0, 99, 132, 1)',
  }

  this.avgdata2 = {
    label: ["Class Avg of Previous Year"],
    data: data2,
    backgroundColor: 'rgb(255,99,71)',
    borderColor: 'rgba(99, 132, 0, 1)'
}
    
    this.state = {
      options : {
        responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'EDA Class Average Analysis',
          }
      
      },
      
      avgdata : {
          label: ["Class Avg of Current Year"],
          data: data1,
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
          borderColor: 'rgba(0, 99, 132, 1)',
      },
      
      avgdata2 : {
          label: ["Class Avg of Previous Year"],
          data: data2,
          backgroundColor: 'rgb(255,99,71)',
          borderColor: 'rgba(99, 132, 0, 1)'
      },
      

      dataAnalysis : {
          labels: ["A", "B", "C", "D", "E"],
          datasets: [this.avgdata, this.avgdata2]
      }
  }

  }
    classAverage = () => {    
      const optionsChange = {...this.state.options};
      const dataAvg = {...this.state.avgdata};
      const dataAvg2 = {...this.state.avgdata2};
      const dataAlys = {...this.state.dataAnalysis};
      optionsChange.title.text = 'EDA Class Average Analysis';


      dataAvg.label =  ["Class Avg of Current Year"];
      dataAvg.data = data1;
      dataAvg.backgroundColor = 'rgba(0, 99, 132, 0.6)'


      dataAvg2.label = ["Class Avg of Previous Year"];
      dataAvg2.data = data2;

      dataAlys.labels = ["A", "B", "C", "D", "E"]
      
      dataAlys.datasets = [dataAvg, dataAvg2]

      this.setState({options:optionsChange, avgdata:dataAvg, avgdata2:dataAvg2,dataAnalysis:dataAlys})
    }

    divA = () => {
      const optionsChange = {...this.state.options};
      const dataAvg = {...this.state.avgdata};
      const dataAlys = {...this.state.dataAnalysis};
      optionsChange.title.text = 'Division A Grade Analysis';


      dataAvg.label =  ["Grade Count of Division A"];
      dataAvg.data = dataGrad[0];
      dataAvg.backgroundColor = 'rgba(227, 127, 64, 0.8)'

      if(assets_global === 'CIE')
        dataAlys.labels = ["S", "A", "B", "C", "D","E","F"]
      else 
        dataAlys.labels = ["S", "A", "B", "C", "D"]
      
      dataAlys.datasets = [dataAvg]

      this.setState({options:optionsChange, avgdata:dataAvg,dataAnalysis:dataAlys})

    }

    divB = () => {
      const optionsChange = {...this.state.options};
      const dataAvg = {...this.state.avgdata};
      const dataAlys = {...this.state.dataAnalysis};
      optionsChange.title.text = 'Division B Grade Analysis';


      dataAvg.label =  ["Grade Count of Division B"];
      dataAvg.data = dataGrad[1];
      dataAvg.backgroundColor = 'rgba(227, 127, 64, 0.8)'



      if(assets_global === 'CIE')
        dataAlys.labels = ["S", "A", "B", "C", "D","E","F"]
      else 
        dataAlys.labels = ["S", "A", "B", "C", "D"]
      
      dataAlys.datasets = [dataAvg]

      this.setState({options:optionsChange, avgdata:dataAvg,dataAnalysis:dataAlys})

    }

    divC = () => {
      const optionsChange = {...this.state.options};
      const dataAvg = {...this.state.avgdata};
      const dataAlys = {...this.state.dataAnalysis};
      optionsChange.title.text = 'Division C Grade Analysis';


      dataAvg.label =  ["Grade Count of Division C"];
      dataAvg.data = dataGrad[2];
      dataAvg.backgroundColor = 'rgba(227, 127, 64, 0.8)'



      if(assets_global === 'CIE')
        dataAlys.labels = ["S", "A", "B", "C", "D","E","F"]
      else 
        dataAlys.labels = ["S", "A", "B", "C", "D"]
      
      dataAlys.datasets = [dataAvg]

      this.setState({options:optionsChange, avgdata:dataAvg,dataAnalysis:dataAlys})

    }

    divD = () => {
      const optionsChange = {...this.state.options};
      const dataAvg = {...this.state.avgdata};
      const dataAlys = {...this.state.dataAnalysis};
      optionsChange.title.text = 'Division D Grade Analysis';


      dataAvg.label =  ["Grade Count of Division D"];
      dataAvg.data = dataGrad[3];
      dataAvg.backgroundColor = 'rgba(227, 127, 64, 0.8)'



      if(assets_global === 'CIE')
        dataAlys.labels = ["S", "A", "B", "C", "D","E","F"]
      else 
        dataAlys.labels = ["S", "A", "B", "C", "D"]
      
      dataAlys.datasets = [dataAvg]

      this.setState({options:optionsChange, avgdata:dataAvg,dataAnalysis:dataAlys})

    }

    divE = () => {
      const optionsChange = {...this.state.options};
      const dataAvg = {...this.state.avgdata};
      const dataAlys = {...this.state.dataAnalysis};
      optionsChange.title.text = 'Division E Grade Analysis';


      dataAvg.label =  ["Grade Count of Division E"];
      dataAvg.data = dataGrad[4];
      dataAvg.backgroundColor = 'rgba(227, 127, 64, 0.8)'

      if(assets_global === 'CIE')
        dataAlys.labels = ["S", "A", "B", "C", "D","E","F"]
      else 
        dataAlys.labels = ["S", "A", "B", "C", "D"]
      
      dataAlys.datasets = [dataAvg]

      this.setState({options:optionsChange, avgdata:dataAvg,dataAnalysis:dataAlys})
    }
  render(){
    return(
    <div className='wrapper'><div id="options-list">
         Analysis:
          <button onClick={() => this.classAverage()}>Class Average</button>
          <button onClick={() => this.divA()}>Division A</button>
          <button onClick={() => this.divB()}>Divison B</button>
          <button onClick={() => this.divC()}>Division C</button>
          <button onClick={() => this.divD()}>Division D</button>
          <button onClick={() => this.divE()}>Division E</button>
      </div><div id='chart-container'>
          <Bar width={"920%"} height={"400%"} options={this.state.options} data={this.state.dataAnalysis} />;
        </div></div>
    )
  }
}

function Table(){
  return (
    <div>
      <tr>
        <th>Division</th>
        <th>S-Grade</th>
        <th>A-Grade</th>
        <th>B-Grade</th>
        <th>C-Grade</th>
        <th>D-Grade</th>
        <th>Class Average</th>
        <th>Previous Class Average</th>
      </tr>
      <tr>
        <td>A</td>
        <td>{tableData[0][0]['S_count']}</td>
        <td>{tableData[0][0]['A_count']}</td>
        <td>{tableData[0][0]['B_count']}</td>
        <td>{tableData[0][0]['C_count']}</td>
        <td>{tableData[0][0]['D_count']}</td>
        <td>{tableData[0][0]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][5]['class_avg'].toFixed(2)}</td>
      </tr>
      <tr>
        <td>B</td>
        <td>{tableData[0][1]['S_count']}</td>
        <td>{tableData[0][1]['A_count']}</td>
        <td>{tableData[0][1]['B_count']}</td>
        <td>{tableData[0][1]['C_count']}</td>
        <td>{tableData[0][1]['D_count']}</td>
        <td>{tableData[0][1]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][6]['class_avg'].toFixed(2)}</td>
      </tr>
      <tr>
        <td>C</td>
        <td>{tableData[0][2]['S_count']}</td>
        <td>{tableData[0][2]['A_count']}</td>
        <td>{tableData[0][2]['B_count']}</td>
        <td>{tableData[0][2]['C_count']}</td>
        <td>{tableData[0][2]['D_count']}</td>
        <td>{tableData[0][2]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][7]['class_avg'].toFixed(2)}</td>
      </tr>
      <tr>
        <td>D</td>
        <td>{tableData[0][3]['S_count']}</td>
        <td>{tableData[0][3]['A_count']}</td>
        <td>{tableData[0][3]['B_count']}</td>
        <td>{tableData[0][3]['C_count']}</td>
        <td>{tableData[0][3]['D_count']}</td>
        <td>{tableData[0][3]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][8]['class_avg'].toFixed(2)}</td>
      </tr>
      <tr>
        <td>E</td>
        <td>{tableData[0][4]['S_count']}</td>
        <td>{tableData[0][4]['A_count']}</td>
        <td>{tableData[0][4]['B_count']}</td>
        <td>{tableData[0][4]['C_count']}</td>
        <td>{tableData[0][4]['D_count']}</td>
        <td>{tableData[0][4]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][9]['class_avg'].toFixed(2)}</td>
      </tr>
    </div>
  )
}

function ConsolTable(){
  return (
    <div style={{ "height": "90%", "width": "90%" }}>
<table id='consolidated-table'>
  <tr style={{color: "black"}}>
    <th rowspan="3">SL.No</th>
    <th rowspan="3">Subject Name</th>
    <th colspan="50">No of students scoring marks</th>    
  </tr>
        <tr style={{ color: "black" }}>
    <td colspan="10">A-div</td>
    <td colspan="10">B-div</td>
    <td colspan="10">C-div</td>
    <td colspan="10">D-div</td>
    <td colspan="10">E-div</td>
  </tr>
        <tr style={{ color: "black" }}>
  	<td>S</td>
    <td>A</td>
  	<td>B</td>
  	<td>C</td>
  	<td>D</td>
  	<td>E</td>
    <td>F</td>
    <td>Total</td>
    <td>class-avg</td>
    <td>previous avg</td>
  	<td>S</td>
    <td>A</td>
  	<td>B</td>
  	<td>C</td>
  	<td>D</td>
  	<td>E</td>
    <td>F</td>
    <td>Total</td>
    <td>class-avg</td>
    <td>previous avg</td>
    <td>S</td>
    <td>A</td>
  	<td>B</td>
  	<td>C</td>
  	<td>D</td>
  	<td>E</td>
    <td>F</td>
    <td>Total</td>
    <td>class-avg</td>
    <td>previous avg</td><td>S</td>
    <td>A</td>
  	<td>B</td>
  	<td>C</td>
  	<td>D</td>
  	<td>E</td>
    <td>F</td>
    <td>Total</td>
    <td>class-avg</td>
    <td>previous avg</td><td>S</td>
    <td>A</td>
  	<td>B</td>
  	<td>C</td>
  	<td>D</td>
  	<td>E</td>
    <td>F</td>
    <td>Total</td>
    <td>class-avg</td>
    <td>previous avg</td>
  </tr>
        <tr style={{ color: "black" }}>
        <td>1</td>
        <td>{five[0]}</td>
        <td>{tableData[0][0]['S_count']}</td>
        <td>{tableData[0][0]['A_count']}</td>
        <td>{tableData[0][0]['B_count']}</td>
        <td>{tableData[0][0]['C_count']}</td>
        <td>{tableData[0][0]['D_count']}</td>
        <td>{tableData[0][0]['E_count']}</td>
        <td>{tableData[0][0]['F_count']}</td>
        <td>{tableData[0][0]['Total']}</td>
        <td>{tableData[0][0]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][5]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][1]['S_count']}</td>
        <td>{tableData[0][1]['A_count']}</td>
        <td>{tableData[0][1]['B_count']}</td>
        <td>{tableData[0][1]['C_count']}</td>
        <td>{tableData[0][1]['D_count']}</td>
        <td>{tableData[0][1]['E_count']}</td>
        <td>{tableData[0][1]['F_count']}</td>
        <td>{tableData[0][1]['Total']}</td>
        <td>{tableData[0][1]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][6]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][2]['S_count']}</td>
        <td>{tableData[0][2]['A_count']}</td>
        <td>{tableData[0][2]['B_count']}</td>
        <td>{tableData[0][2]['C_count']}</td>
        <td>{tableData[0][2]['D_count']}</td>
        <td>{tableData[0][2]['E_count']}</td>
        <td>{tableData[0][2]['F_count']}</td>
        <td>{tableData[0][2]['Total']}</td>
        <td>{tableData[0][2]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][7]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][3]['S_count']}</td>
        <td>{tableData[0][3]['A_count']}</td>
        <td>{tableData[0][3]['B_count']}</td>
        <td>{tableData[0][3]['C_count']}</td>
        <td>{tableData[0][3]['D_count']}</td>
        <td>{tableData[0][3]['E_count']}</td>
        <td>{tableData[0][3]['F_count']}</td>
        <td>{tableData[0][3]['Total']}</td>
        <td>{tableData[0][3]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][8]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][4]['S_count']}</td>
        <td>{tableData[0][4]['A_count']}</td>
        <td>{tableData[0][4]['B_count']}</td>
        <td>{tableData[0][4]['C_count']}</td>
        <td>{tableData[0][4]['D_count']}</td>
        <td>{tableData[0][4]['E_count']}</td>
        <td>{tableData[0][4]['F_count']}</td>
        <td>{tableData[0][4]['Total']}</td>
        <td>{tableData[0][4]['class_avg'].toFixed(2)}</td>
        <td>{tableData[0][9]['class_avg'].toFixed(2)}</td>
      </tr>
        <tr style={{ color: "black" }}>
        <td>2</td>
        <td>{five[1]}</td>
        <td>{tableData[1][0]['S_count']}</td>
        <td>{tableData[1][0]['A_count']}</td>
        <td>{tableData[1][0]['B_count']}</td>
        <td>{tableData[1][0]['C_count']}</td>
        <td>{tableData[1][0]['D_count']}</td>
        <td>{tableData[1][0]['E_count']}</td>
        <td>{tableData[1][0]['F_count']}</td>
        <td>{tableData[1][0]['Total']}</td>
        <td>{tableData[1][0]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][5]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][1]['S_count']}</td>
        <td>{tableData[1][1]['A_count']}</td>
        <td>{tableData[1][1]['B_count']}</td>
        <td>{tableData[1][1]['C_count']}</td>
        <td>{tableData[1][1]['D_count']}</td>
        <td>{tableData[1][1]['E_count']}</td>
        <td>{tableData[1][1]['F_count']}</td>
        <td>{tableData[1][1]['Total']}</td>
        <td>{tableData[1][1]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][6]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][2]['S_count']}</td>
        <td>{tableData[1][2]['A_count']}</td>
        <td>{tableData[1][2]['B_count']}</td>
        <td>{tableData[1][2]['C_count']}</td>
        <td>{tableData[1][2]['D_count']}</td>
        <td>{tableData[1][2]['E_count']}</td>
        <td>{tableData[1][2]['F_count']}</td>
        <td>{tableData[1][2]['Total']}</td>
        <td>{tableData[1][2]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][7]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][3]['S_count']}</td>
        <td>{tableData[1][3]['A_count']}</td>
        <td>{tableData[1][3]['B_count']}</td>
        <td>{tableData[1][3]['C_count']}</td>
        <td>{tableData[1][3]['D_count']}</td>
        <td>{tableData[1][3]['E_count']}</td>
        <td>{tableData[1][3]['F_count']}</td>
        <td>{tableData[1][3]['Total']}</td>
        <td>{tableData[1][3]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][8]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][4]['S_count']}</td>
        <td>{tableData[1][4]['A_count']}</td>
        <td>{tableData[1][4]['B_count']}</td>
        <td>{tableData[1][4]['C_count']}</td>
        <td>{tableData[1][4]['D_count']}</td>
        <td>{tableData[1][4]['E_count']}</td>
        <td>{tableData[1][4]['F_count']}</td>
        <td>{tableData[1][4]['Total']}</td>
        <td>{tableData[1][4]['class_avg'].toFixed(2)}</td>
        <td>{tableData[1][9]['class_avg'].toFixed(2)}</td>
      </tr>

        <tr style={{ color: "black" }}>
        <td>3</td>
        <td>{five[2]}</td>
        <td>{tableData[2][0]['S_count']}</td>
        <td>{tableData[2][0]['A_count']}</td>
        <td>{tableData[2][0]['B_count']}</td>
        <td>{tableData[2][0]['C_count']}</td>
        <td>{tableData[2][0]['D_count']}</td>
        <td>{tableData[2][0]['E_count']}</td>
        <td>{tableData[2][0]['F_count']}</td>
        <td>{tableData[2][0]['Total']}</td>
        <td>{tableData[2][0]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][5]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][1]['S_count']}</td>
        <td>{tableData[2][1]['A_count']}</td>
        <td>{tableData[2][1]['B_count']}</td>
        <td>{tableData[2][1]['C_count']}</td>
        <td>{tableData[2][1]['D_count']}</td>
        <td>{tableData[2][1]['E_count']}</td>
        <td>{tableData[2][1]['F_count']}</td>
        <td>{tableData[2][1]['Total']}</td>
        <td>{tableData[2][1]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][6]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][2]['S_count']}</td>
        <td>{tableData[2][2]['A_count']}</td>
        <td>{tableData[2][2]['B_count']}</td>
        <td>{tableData[2][2]['C_count']}</td>
        <td>{tableData[2][2]['D_count']}</td>
        <td>{tableData[2][2]['E_count']}</td>
        <td>{tableData[2][2]['F_count']}</td>
        <td>{tableData[2][2]['Total']}</td>
        <td>{tableData[2][2]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][7]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][3]['S_count']}</td>
        <td>{tableData[2][3]['A_count']}</td>
        <td>{tableData[2][3]['B_count']}</td>
        <td>{tableData[2][3]['C_count']}</td>
        <td>{tableData[2][3]['D_count']}</td>
        <td>{tableData[2][3]['E_count']}</td>
        <td>{tableData[2][3]['F_count']}</td>
        <td>{tableData[2][3]['Total']}</td>
        <td>{tableData[2][3]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][8]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][4]['S_count']}</td>
        <td>{tableData[2][4]['A_count']}</td>
        <td>{tableData[2][4]['B_count']}</td>
        <td>{tableData[2][4]['C_count']}</td>
        <td>{tableData[2][4]['D_count']}</td>
        <td>{tableData[2][4]['E_count']}</td>
        <td>{tableData[2][4]['F_count']}</td>
        <td>{tableData[2][4]['Total']}</td>
        <td>{tableData[2][4]['class_avg'].toFixed(2)}</td>
        <td>{tableData[2][9]['class_avg'].toFixed(2)}</td>
      </tr>
        <tr style={{ color: "black" }}>
        <td>4</td>
        <td>{five[3]}</td>
        <td>{tableData[3][0]['S_count']}</td>
        <td>{tableData[3][0]['A_count']}</td>
        <td>{tableData[3][0]['B_count']}</td>
        <td>{tableData[3][0]['C_count']}</td>
        <td>{tableData[3][0]['D_count']}</td>
        <td>{tableData[3][0]['E_count']}</td>
        <td>{tableData[3][0]['F_count']}</td>
        <td>{tableData[3][0]['Total']}</td>
        <td>{tableData[3][0]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][5]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][1]['S_count']}</td>
        <td>{tableData[3][1]['A_count']}</td>
        <td>{tableData[3][1]['B_count']}</td>
        <td>{tableData[3][1]['C_count']}</td>
        <td>{tableData[3][1]['D_count']}</td>
        <td>{tableData[3][1]['E_count']}</td>
        <td>{tableData[3][1]['F_count']}</td>
        <td>{tableData[3][1]['Total']}</td>
        <td>{tableData[3][1]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][6]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][2]['S_count']}</td>
        <td>{tableData[3][2]['A_count']}</td>
        <td>{tableData[3][2]['B_count']}</td>
        <td>{tableData[3][2]['C_count']}</td>
        <td>{tableData[3][2]['D_count']}</td>
        <td>{tableData[3][2]['E_count']}</td>
        <td>{tableData[3][2]['F_count']}</td>
        <td>{tableData[3][2]['Total']}</td>
        <td>{tableData[3][2]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][7]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][3]['S_count']}</td>
        <td>{tableData[3][3]['A_count']}</td>
        <td>{tableData[3][3]['B_count']}</td>
        <td>{tableData[3][3]['C_count']}</td>
        <td>{tableData[3][3]['D_count']}</td>
        <td>{tableData[3][3]['E_count']}</td>
        <td>{tableData[3][3]['F_count']}</td>
        <td>{tableData[3][3]['Total']}</td>
        <td>{tableData[3][3]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][8]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][4]['S_count']}</td>
        <td>{tableData[3][4]['A_count']}</td>
        <td>{tableData[3][4]['B_count']}</td>
        <td>{tableData[3][4]['C_count']}</td>
        <td>{tableData[3][4]['D_count']}</td>
        <td>{tableData[3][4]['E_count']}</td>
        <td>{tableData[3][4]['F_count']}</td>
        <td>{tableData[3][4]['Total']}</td>
        <td>{tableData[3][4]['class_avg'].toFixed(2)}</td>
        <td>{tableData[3][9]['class_avg'].toFixed(2)}</td>
      </tr>
      
  
</table>
    </div>
  )
}


export default HomepageDugc;
