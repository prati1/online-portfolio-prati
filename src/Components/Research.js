import React from "react";

const ResearchProfile = (props) => {
  return <p>{props.bio}</p>;
};

const Research = (props) => {
  let research;
  let bio;
  if (props.data) {
    research = props.data.research;
    bio = props.data.bio;
  }

  return (
    <section id="about">
      <div className="row">
        {/* <div className="three columns"> */}
        <div className="five columns">
        </div>
        {/* <div className="nine columns main-col"> */}
        <div className="seven columns main-col">
          <h2>Research</h2>
          <div>
            {research &&
              research.map((bioList) => {
                return <ResearchProfile key={bioList} bio={bioList} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

// I'm planning to work on \"Blockchain based decentralized privacy preserving academic peer review system for blind peer reviews\" with Dr. Bhunia.