import React, { Component, Fragment } from "react";
import axios from "axios";

export default class MakeApproval extends Component{
    constructor(props) {
        super(props);
        // this.updatestudent = this.updatestudent.bind(this)
        // this.deletestudent=this.deletestudent.bind(this)
        this.state = { students: [],remark:''};
    }

    onChangeremark = (e) => {
        this.setState({
            remark: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:1999/api/makeUPMinor')
            .then(Response => {
                console.log(Response.data.data)
                this.setState({ students: Response.data.data })
                // console.log(students);
            })
            .catch(error => {
                console.log("Error" + error);
            })
    }

    updatestudent(id, cou) {

        axios.post("http://localhost:1999/api/makeUpMinor/approveMakeup/" + id, { cou: cou, remark :this.state?.remark })
            .then((res) => {
                // console.log(res.data.data)
                axios.get('http://localhost:1999/api/makeUpMinor')
                    .then(Response => {
                        // console.log(Response.data.data)
                        this.setState({ students: Response.data.data })
                        // console.log(students);
                    })
                    .catch(error => {
                        console.log("Error" + error);
                    })
            })
    }

    deletestudent(id, cou){
        axios.post("http://localhost:1999/api/makeUpMinor/rejectMakeup/" + id, { cou: cou })
        .then((res) => {
            // console.log(res.data.data)
            axios.get('http://localhost:1999/api/makeUpMinor')
                .then(Response => {
                    // console.log(Response.data.data)
                    this.setState({ students: Response.data.data })
                    // console.log(students);
                })
                .catch(error => {
                    console.log("Error" + error);
                })
        })
    }

    render(){
        return (
            <div>
                <h3 align='center'>Applied Students</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Course</th>
                            <th>Reason</th>
                            <th>Action</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student, index) => {
                            return (
                                <Fragment key={index}>
                                    {student.courses.map((cours) => {
                                        // console.log(student._id, cours._id)
                                        if (cours.approval === false&&cours.Reject===false) {
                                            return (

                                                <tr key={student._id + cours._id}>
                                                    <td>{student.studentName}</td>
                                                    <td>{student.usn}</td>
                                                    <td>{cours.course}</td>
                                                    <td>{student.reason}</td>
                                                    <td>
                                                        <button href="#" onClick={() => { this.updatestudent(student._id, cours.course) }} className="btn btn-secondary">Approve</button> |
                                                        <button href="#" onClick={()=>this.deletestudent(student._id , cours.course)} className="btn btn-secondary">Reject</button>
                                                    </td>
                                                    <td><input type = {"text"} value={this.state.remark} required className="form-control" onChange={this.onChangeremark} placeholder="Enter Remark"></input></td>
                                                </tr>
                                            )
                                        }
                                        else return null;

                                    })}
                                </Fragment>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}