import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router";
import Coordinator from "./Coordinator";
import Chairman from "./Chairman";
import Login from "./login";
import Navbar from "./components/navbar.components";
import Print1 from "./components/print1.component";
import Approval1 from "./components/approval1.component";
import CourseList from "./components/course.components";
import CourseForm from "./components/courseForm.components";

//Module 5 Routes
import Shreyas from "./module5/Login";
import Dashboard from "./module5/Dashboard";
import Dashboard1 from "./module5/Dashboard1";
import Generate from "./module5/Generate";

//Module 2 Routes
import CourseCoordinator from "./module2/course-coordinator";
import HomepageDugc from "./module2/homepage-dugc";

//Module 3 Routes
import Labanalysis from "./module3/labanalysis";
import Labresultanalysis from "./module3/dugcpage5";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Module 4 Routes
import Home from "./module4/Home";
import Theory from "./module4/Theory";
import Upload from "./module4/Upload";
import Theory1 from "./module4/Theory1";
import Index from "./module4/Index.js";
import "./module4/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<login />} />
        <Route path="/Chairman" element={<Chairman />} />
        <Route path="/Coordinator" element={<Coordinator />} />
        <Route path="/withdraw" element={<Navbar />}></Route>
        <Route path="/update" element={<Approval1 />}></Route>
        <Route path="/print" element={<Print1 />}></Route>
        {/* <Route exact path="/mail" render={() => {window.location.href="/mail.html"}} />
         */}
        <Route path="/login321" element={<Shreyas />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Dashboard1" element={<Dashboard1 />}></Route>
        <Route path="/Generate" element={<Generate />}></Route>
        <Route path="/courseForm" element={<CourseForm />}></Route>
        <Route path="/courseList" element={<CourseList />}></Route>
        <Route path="/theory-upload" element={<CourseCoordinator />}></Route>
        <Route path="/theory-analysis" element={<HomepageDugc />}></Route>

        <Route path="/see-home" element={<Home />}></Route>
        <Route path="/see-theory" element={<Theory />}></Route>
        <Route path="/see-theory1" element={<Theory1 />}></Route>
        <Route path="/see-upload" element={<Upload />}></Route>
        <Route path="/see-index" element={<Index />}></Route>
        <Route path="/lab-analysis" element={<Labanalysis />}></Route>

        <Route path="localhost:4000"></Route>
        <Route
          path="/labresultanalysis"
          element={<Labresultanalysis />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
