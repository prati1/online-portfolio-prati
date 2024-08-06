import React from "react";

const ResearchProfile = (props) => {
  return <p>{props.bio}</p>;
};

const ResearchInterests = (props) => {
  return <li className="six columns">{props.interest}</li>;
}

const Publications = (props) => {
  console.log('porp', props.publication.title)
  return <>
      <li key={props.publication.title}>
        {props.publication.title}
        <a href={props.publication.url}  target="_blank">
          <i className={props.publication.className}></i>
        </a>
      </li>
  </>
}

const Research = (props) => {
  let bio, interests, publications;
  if (props.data) {
    bio = props.data.bio;
    interests = props.data.interests;
    publications = props.data.publications;
  }

  return (
    <section id="research">
      <div className="row">
        {/* <div className="three columns"> */}
        {/* <div className="five columns">
        </div> */}
        {/* <div className="nine columns main-col"> */}
        <div className="twelve columns main-col">
          <h2>Research</h2>
          <div>
            {bio &&
              bio.map((bioList) => {
                return <ResearchProfile key={bioList} bio={bioList} />;
              })}
          </div>
        </div>
      </div>

      <div className="row">
        {/* <div className="three columns"> */}
        {/* <div className="five columns">
        </div> */}
        {/* <div className="nine columns main-col"> */}
        <div className="twelve columns main-col mb-25">
          <h3>Research Interests</h3>
          <div>
            <ul>
            {interests &&
              interests.map((interest) => {
                return <ResearchInterests key={interest} interest={interest} />;
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        {/* <div className="three columns"> */}
        {/* <div className="five columns">
        </div> */}
        {/* <div className="nine columns main-col"> */}
        <div className="twelve columns main-col">
          <h3>Publications</h3>
          <div>
            <ol>
            {publications &&
              publications.map((publication) => {
                return <Publications key={publication} publication={publication} />;
              })}
              <></>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

// I'm planning to work on \"Blockchain based decentralized privacy preserving academic peer review system for blind peer reviews\" with Dr. Bhunia.