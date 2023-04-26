import React, { useState, useEffect } from "react";
// import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
// import Contact from "./Components/Contact";


const App = (props) => {
  let value = props;
  // we probably don't need to set resumeData as state as it doesn't need to be uupdated within component lifecycle
  const [resumeData, setResumeData] = useState({});

  const getResumeData = () => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        setResumeData(data);
      },
      error: (xhr, status, err) => {
        console.log(err);
        alert(err);
      },
    });
  };

  useEffect(() => {
    console.log("inside useffect");
    getResumeData();
  }, [value]);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      {/* <Contact data={resumeData.main} /> */}
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
