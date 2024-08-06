import React from "react";

const Bio = (props) => {
  return <p>{props.bio}</p>;
};

const About = (props) => {
  let name,
    profilepic,
    bio,
    street,
    city,
    state,
    zip,
    phone,
    email,
    resumeDownload;
  if (props.data) {
    name = props.data.name;
    profilepic = "images/" + props.data.image;
    bio = props.data.bio;
    console.log("bio", bio);
    street = props.data.address.street;
    city = props.data.address.city;
    state = props.data.address.state;
    zip = props.data.address.zip;
    phone = props.data.phone;
    email = props.data.email;
    resumeDownload = props.data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        {/* <div className="three columns"> */}
        <div className="five columns">
          <img
            // className="profile-pic"
            src={profilepic}
            alt="Pratiksha Shrestha"
          />
        </div>
        {/* <div className="nine columns main-col"> */}
        <div className="seven columns main-col">
          <h2>About Me</h2>
          <div>
            {bio &&
              bio.map((bioList) => {
                return <Bio key={bioList} bio={bioList} />;
              })}
            <p>I've been actively working on empowering women in the field of technology as a <span className="highlight">Followship Technical Trainer</span> at Women Leaders in Technology (WLiT), Nepal. I support the cause of WLiT by mentoring young women and facilitating technical sessions to help them attain their career goals. Want to be a part of this cause? Go to <a target="_blank" href="https://wlit.org/">wlit.org</a> for more information.</p>
          </div>
          {/* <p>{bio}</p> */}
          <div className="row">
            {/* <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a target="_blank" href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
