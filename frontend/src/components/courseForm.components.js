import React,{Component} from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";

export default class CourseForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            code: '',
            sem: 0,
            credit: 0,
            creditFormat: '',
        }
    }

    onChangeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    onChangeCode = (e) =>{
        this.setState({
            code: e.target.value
        })
    }

    onChangeSem = (e) =>{
        this.setState({
            sem: e.target.value
        })
    }

    onChangeCred = (e) =>{
        this.setState({
            credit: e.target.value
        })
    }

    onChangeCreditFormat = (e) =>{
        this.setState({
            creditFormat: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();

        const a = {
            name: this.state.name,
            code: this.state.code,
            sem: this.state.sem,
            credit: this.state.credit,
            format: this.state.creditFormat
        }
        console.log(a);
        axios.post(`http://localhost:1999/api/course`, a);
        window.location = '/courseForm';
    }
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
                <h3 style={{textAlign:'center'}}>Course form</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course name</label>
                        <input type={"text"} className="form-control" onChange={this.onChangeName} value={this.state.name} required />
                    </div>
                    <div className="form-group">
                        <label>Course code</label>
                        <input type={"text"} className="form-control" value={this.state.code} onChange={this.onChangeCode} required />
                    </div>
                    <div className="form-group">
                        <label>Sem</label>
                        <input type={"number"} className="form-control" value={this.state.sem} onChange={this.onChangeSem} required />
                    </div>
                    <div className="form-group">
                        <label>Course credit</label>
                        <input type={"number"} className="form-control" value={this.state.credit} onChange={this.onChangeCred} required />
                    </div>
                    <div className="form-group">
                        <label>Course credit format</label>
                        <input type={"text"} className="form-control" value={this.state.creditFormat} onChange={this.onChangeCreditFormat} required />
                    </div>
                    <div className="form-group" style={{textAlign:"center"}}>
                        <br></br><input type={"submit"} className="btn btn-primary" value={'Add'}></input>
                    </div>
                </form>
            </div>
            </>
        )
    }
}