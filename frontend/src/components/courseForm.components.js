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
            <div>
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
                    <div className="form-group">
                        <br></br><input type={"submit"} className="btn btn-primary" value={'Add'}></input>
                    </div>
                </form>
            </div>
        )
    }
}