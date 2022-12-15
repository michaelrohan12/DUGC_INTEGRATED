import React, { Component } from "react";
import axios from "axios";

export default class MakeUPForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            studentName: '',
            usn: '',
            year: new Date().getFullYear(),
            semOptions : 0,
            course: [],
            course_1: {
                course: '',
                code: ''
            },
            course_2: {
                course: '',
                code: ''
            },
            course_3: {
                course: '',
                code: ''
            },
            course_4: {
                course: '',
                code: ''
            },
            course_5: {
                course: '',
                code: ''
            },
            course_6: {
                course: '',
                code: ''
            },
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            reason: ['Health', 'Participation in event/competition','Family issue/event'],
            selectReason: '',
            courseSelected: []
        }
    }

    onChangeStudentName = (e) =>{
        this.setState({
            studentName: e.target.value
        });
    }

    onChangeUSN = (e) =>{
        this.setState({
            usn: e.target.value
        });
    }

    onChangeSemOptions = (e) =>{
        this.setState({semOptions: e.target.value});
        axios.get(`http://localhost:1999/api/course?&sem=${e.target.value}`)
        .then((res) => {
            this.setState({course: res.data.data})
            // console.log(res.data.data)
        })
        .catch(err => console.log(err))
    }

    onChangeCheck1 = (e) =>{
        this.setState({checkbox1: e.target.checked})
    }

    onChangeCoures_1Name = (e) =>{
        const course_1 = {...this.state.course_1}
        course_1.course = e.target.value
        for (let i = 0; i < this.state.course.length; i++) {
            if(this.state.course[i].name === e.target.value){
                course_1.code = this.state.course[i].code;
                break;
            }
        }
        this.setState({course_1});
    }

    onChangeCoures_2Name = (e) =>{
        const course_2 = {...this.state.course_2}
        course_2.course = e.target.value
        for (let i = 0; i < this.state.course.length; i++) {
            if(this.state.course[i].name === e.target.value){
                course_2.code = this.state.course[i].code;
                break;
            }
        }
        this.setState({course_2});
    }

    onChangeCheck2 = (e) =>{
        this.setState({checkbox2: e.target.checked})
    }

    onChangeCoures_3Name = (e) =>{
        const course_3 = {...this.state.course_3}
        course_3.course = e.target.value
        for (let i = 0; i < this.state.course.length; i++) {
            if(this.state.course[i].name === e.target.value){
                course_3.code = this.state.course[i].code;
                break;
            }
        }
        this.setState({course_3});
    }

    onChangeCheck3 = (e) =>{
        this.setState({checkbox3: e.target.checked})
    }

    onChangeCoures_4Name = (e) =>{
        const course_4 = {...this.state.course_4}
        course_4.course = e.target.value
        for (let i = 0; i < this.state.course.length; i++) {
            if(this.state.course[i].name === e.target.value){
                course_4.code = this.state.course[i].code;
                break;
            }
        }
        this.setState({course_4});
    }

    onChangeCheck4 = (e) =>{
        this.setState({checkbox4: e.target.checked})
    }

    onChangeCoures_5Name = (e) =>{
        const course_5 = {...this.state.course_5}
        course_5.course = e.target.value
        for (let i = 0; i < this.state.course.length; i++) {
            if(this.state.course[i].name === e.target.value){
                course_5.code = this.state.course[i].code;
                break;
            }
        }
        this.setState({course_5});
    }

    onChangeCheck5 = (e) =>{
        this.setState({checkbox5: e.target.checked})
    }

    onChangeCoures_6Name = (e) =>{
        const course_6 = {...this.state.course_6}
        course_6.course = e.target.value
        for (let i = 0; i < this.state.course.length; i++) {
            if(this.state.course[i].name === e.target.value){
                course_6.code = this.state.course[i].code;
                break;
            }
        }
        this.setState({course_6});
    }

    onChangeCheck6 = (e) =>{
        this.setState({checkbox4: e.target.checked})
    }

    onChangeYear = (e) =>{
        this.setState({
            year: e.target.value
        });
    }

    onChangeSelectReason = (e) =>{
        this.setState({
            selectReason: e.target.value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        
        if(this.state.course_1.name !== ''  &&  this.state.checkbox1 === true){
            this.state.courseSelected.push(this.state.course_1)
        }else{
            return;
        }

        if(this.state.course_2.name !== ''  &&  this.state.checkbox2 === true)
        {this.state.courseSelected.push(this.state.course_2)}

        if(this.state.course_3.name !== ''  &&  this.state.checkbox3 === true)
        {this.state.courseSelected.push(this.state.course_3)}

        if(this.state.course_4.name !== ''  &&  this.state.checkbox4 === true)
        {this.state.courseSelected.push(this.state.course_4)}

        if(this.state.course_5.name !== ''  &&  this.state.checkbox5 === true)
        {this.state.courseSelected.push(this.state.course_5)}
        
        if(this.state.course_6.name !== ''  &&  this.state.checkbox6 === true)
        {this.state.courseSelected.push(this.state.course_6)}

        const user = {
            studentName: this.state.studentName,
            usn : this.state.usn,
            courses: this.state.courseSelected,
            sem :this.state.semOptions,
            year: this.state.year,
            reason: this.state.selectReason
        }
        console.log(user);
        axios.post(`http://localhost:1999/api/makeUpMinor`, user);

        window.location = '/makeForm'

    }

    render(){
        return(
            <div>
            <h3 align='center'>MakeUp Minor Application</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Student Name</label>
                    <input type = {"text"} value={this.state.studentName} required className="form-control" onChange={this.onChangeStudentName} placeholder="Full name"></input>
                </div>
                <div className="form-group">
                    <label>USN</label>
                    <input type={"text"} value={this.state.usn} required className="form-control"  onChange={this.onChangeUSN} placeholder="SRN"></input>
                </div>
                <div className="form-group">
                    <label>Sem</label>
                    <input type={"number"} value={this.state.semOptions} required className="form-control"  onChange={this.onChangeSemOptions} min={3} max={8} ></input>
                </div>
                <div className="form-group">
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Course Code</th>
                                <th>Faculty Advisor Approval</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select type={"text"} value={this.state.course_1.name} className="form-control" onChange={this.onChangeCoures_1Name} required>
                                        <option>Select course</option>
                                        {this.state.course.map((x,id) => <option key={id}>{x.name}</option>)}
                                    </select>
                                </td>
                                <td>
                                    <input type={"text"} value={this.state.course_1.code} readOnly required className="form-control" placeholder="Select course"></input>
                                </td>
                                <td>
                                    <input type={"checkbox"} value={this.state.checkbox1} onChange={this.onChangeCheck1}/> Approved
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select type={"text"} value={this.state.course_2.name} onChange={this.onChangeCoures_2Name} className="form-control">
                                        <option>Select course</option>
                                        {this.state.course.map((x,id) => <option key={id}>{x.name}</option>)}
                                    </select>
                                </td>
                                <td>
                                    <input type={"text"} value={this.state.course_2.code} readOnly className="form-control" placeholder="Select course"></input>
                                </td>
                                <td>
                                    <input type={"checkbox"} value={this.state.checkbox2} onChange={this.onChangeCheck2}/> Approved
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select type={"text"} value={this.state.course_3.name} onChange={this.onChangeCoures_3Name} className="form-control">
                                        <option>Select course</option>
                                        {this.state.course.map((x,id) => <option key={id}>{x.name}</option>)}
                                    </select>
                                </td>
                                <td>
                                    <input type={"text"} value={this.state.course_3.code} readOnly className="form-control" placeholder="Select course"></input>
                                </td>
                                <td>
                                    <input type={"checkbox"} value={this.state.checkbox3} onChange={this.onChangeCheck3}/> Approved
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select type={"text"} value={this.state.course_4.name} onChange={this.onChangeCoures_4Name} className="form-control">
                                        <option>Select course</option>
                                        {this.state.course.map((x,id) => <option key={id}>{x.name}</option>)}
                                    </select>
                                </td>
                                <td>
                                    <input type={"text"} value={this.state.course_4.code} readOnly className="form-control" placeholder="Select course"></input>
                                </td>
                                <td>
                                    <input type={"checkbox"} value={this.state.checkbox4} onChange={this.onChangeCheck4}/> Approved
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select type={"text"} value={this.state.course_5.name} onChange={this.onChangeCoures_5Name} className="form-control">
                                        <option>Select course</option>
                                        {this.state.course.map((x,id) => <option key={id}>{x.name}</option>)}
                                    </select>
                                </td>
                                <td>
                                    <input type={"text"} value={this.state.course_5.code} readOnly className="form-control" placeholder="Select course"></input>
                                </td>
                                <td>
                                    <input type={"checkbox"} value={this.state.checkbox5} onChange={this.onChangeCheck5}/> Approved
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select type={"text"} value={this.state.course_6.name} onChange={this.onChangeCoures_6Name} className="form-control">
                                        <option>Select course</option>
                                        {this.state.course.map((x,id) => <option key={id}>{x.name}</option>)}
                                    </select>
                                </td>
                                <td>
                                    <input type={"text"} value={this.state.course_6.code} readOnly className="form-control" placeholder="Select course"></input>
                                </td>
                                <td>
                                    <input type={"checkbox"} value={this.state.checkbox6} onChange={this.onChangeCheck6}/> Approved
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* </div> */}
                <div className="form-group">
                    <label>Reason</label>
                    <select type={"text"} className="form-control" value={this.state.selectReason} onChange={this.onChangeSelectReason} required>
                        <option>Select reason</option>
                        {this.state.reason.map(function(x) {return <option key={x}>{x}</option>})}
                    </select>
                </div>
                <div className="form-group">
                    <br></br><input type={"submit"} value="Add new application" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
        )
    }
}