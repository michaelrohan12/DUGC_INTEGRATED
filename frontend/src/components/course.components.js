import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


export default class CourseList extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: [],
            sem: 0,
            semOptions: [3,4,5,6,7,8]
        };
    };

    onChangeSem = (e) => {
        this.setState({sem : e.target.value})
        axios.get(`http://localhost:1999/api/course?&sem=${e.target.value}`)
            .then((res) => {
                this.setState({course: res.data.data})
                // console.log(res.data.data)
            })
            .catch((err) =>{
                console.log(err)
            })
    };
 
    handleDelete = (id)=>{
        console.log('Delete '+id);

        axios.delete(`http://localhost:1999/api/course/delete?&id=${id}`)
            .then((res)=>{
                if(res.data.success === true){
                    const newCourse = this.state.course.filter(cour => cour._id !== id);
                    this.setState({course: newCourse});
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    };

    render(){
        return(
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
            <div style={{margin:"2rem"}}>
                <h3 style={{textAlign:'center'}}>Course List</h3>
                <br></br>
                <select type="text" value={this.state.sem} onChange={this.onChangeSem} className="form-control">
                    <option>Select sem</option> 
                    {this.state.semOptions.map(function (x){return <option key={x}>{x}</option>})}
                </select>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Sem</th>
                            <th>Credit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.course.map((x) => {
                            return(
                                <tr key={x._id}>
                                    <td  style={{color:'black'}}>{x.name}</td>
                                    <td  style={{color:'black'}}>{x.code}</td>
                                    <td  style={{color:'black'}}>{x.sem}</td>
                                    <td  style={{color:'black'}}>{x.credit}</td>
                                    <td>
                                        <button id="x._id" type="button" className="btn btn-secondary" onClick={() => this.handleDelete(x._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to={"/courseForm"} className="btn btn-secondary">Add</Link>
            </div>
            </>
        );
    }
}