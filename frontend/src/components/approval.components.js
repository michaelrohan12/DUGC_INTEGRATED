import React, { Component, Fragment } from "react";
import axios from 'axios';



export default class Approve extends Component {
    constructor(props) {
        super(props);
        this.updatestudent = this.updatestudent.bind(this)
        this.deletestudent=this.deletestudent.bind(this)
        this.state = ({ students: [] });

    }
    componentDidMount() {
        axios.get('http://localhost:1999/api/user')
            .then(Response => {
                // console.log(Response.data.data)
                this.setState({ students: Response.data.data })
                // console.log(students);
            })
            .catch(error => {
                console.log("Error" + error);
            })
    }
    updatestudent(id, cou) {

        axios.post("http://localhost:1999/api/user/update/" + id, { cou: cou })
            .then((res) => {
                // console.log(res.data.data)
                axios.get('http://localhost:1999/api/user')
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
        axios.post("http://localhost:1999/api/user/reject/" + id, { cou: cou })
        .then((res) => {
            // console.log(res.data.data)
            axios.get('http://localhost:1999/api/user')
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


    render() {
        return (
            <div>
                <h3 align='center'>Applied Students</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>USN</th>
                            <th>Course</th>
                            <th>Marks</th>
                            <th>Attendence</th>
                            <th>Action</th>
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
                                                    <td style={{color:'black'}}>{student.studentName}</td>
                                                    <td style={{color:'black'}}>{student.usn}</td>
                                                    <td style={{color:'black'}}>{cours.course}</td>
                                                    <td style={{color:'black'}}>{cours.ISA_marks}</td>
                                                    <td style={{color:'black'}}>{cours.attendence}</td>
                                                    <td>
                                                        <button href="#" onClick={() => { this.updatestudent(student._id, cours.course) }} className="btn btn-secondary">Approve</button> |
                                                        <button href="#" onClick={()=>this.deletestudent(student._id , cours.course)} className="btn btn-secondary">Reject</button>
                                                    </td>
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