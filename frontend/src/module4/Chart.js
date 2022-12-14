import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getDatasetAtEvent } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
var course1, course2, course3, course4, Total, a, b, c, d;
export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

let courseName;

export const Chart = (props) => {
  const labels = [
    "Software Engineering",
    "Computer Networks - 1",
    "Machine Learning",
    "Web Technologies Lab",
    "Total(2021-22)",
  ];
  courseName = localStorage.getItem("temp");
  var jsonres;
  var dataIDS = [
    {
      id1: courseName,
    },
  ];

  const [names, setNames] = useState([]);
  const getData = () => {
    fetch("http://localhost:1999/api8", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataIDS),
    })
      .then((response) => response.json())
      .then((data) => {
        jsonres = data;
        console.log(jsonres);
        course1 = jsonres[0]["course1"];
        course2 = jsonres[0]["course2"];
        course3 = jsonres[0]["course3"];
        course4 = jsonres[0]["course4"];
        Total = jsonres[0]["Total"];
        a = JSON.stringify(course1);
        b = JSON.stringify(course2);
        c = JSON.stringify(course3);
        d = JSON.stringify(course4);
        Total = JSON.stringify(Total);

        setNames([a, b, c, d, Total]);

        localStorage.setItem(courseName + "123course-1", a);
        localStorage.setItem(courseName + "123course-2", b);
        localStorage.setItem(courseName + "123course-3", c);
        localStorage.setItem(courseName + "123course-4", d);
        localStorage.setItem(courseName + "123course-Total", Total);
      });
    // const arr1 = [...props?.data?.data1]
    //  =
  };

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: "Previous Year Passing Percetage",
        data: [
          localStorage.getItem(`${courseName}course-1`),
          localStorage.getItem(`${courseName}course-2`),
          localStorage.getItem(`${courseName}course-3`),
          localStorage.getItem(`${courseName}course-4`),
          localStorage.getItem(`${courseName}Total`),
        ],
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Current Year Passing Percetage",
        data: names,
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
    ],
  });

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setChartData((prev) => ({
      ...prev,
      datasets: [
        {
          label: "Previous Year Passing Percetage",
          data: [
            localStorage.getItem(`${courseName}course-1`),
            localStorage.getItem(`${courseName}course-2`),
            localStorage.getItem(`${courseName}course-3`),
            localStorage.getItem(`${courseName}course-4`),
            localStorage.getItem(`${courseName}Total`),
          ],
          backgroundColor: "rgb(255, 99, 132)",
          stack: "Stack 0",
        },
        {
          label: "Current Year Passing Percetage",
          data: names,
          backgroundColor: "rgb(53, 162, 235)",
          stack: "Stack 1",
        },
      ],
    }));
  }, [names]);

  return (
    <>
      <Bar options={options} data={chartData} />
      {/* <div >

    <Bar options={options} data ={chartData1}/>
    </div> */}
    </>
  );
};
