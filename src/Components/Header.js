import React from "react";

const Header = (props) => {
  let name, occupation, description, city, networks, resumeDownload;
  if (props.data) {
    name = props.data.name;
    occupation = props.data.occupation;
    description = props.data.description;
    city = props.data.address.city;
    resumeDownload = props.data.resumeDownload;
    networks = props.data.social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#research">
              Research
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#footer">
              Contact
            </a>
          </li>
          <li>
            <a className="goToLink" target="_blank" href="https://pratiscrawls.wordpress.com/">
              Blog
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h3 className="greeting"><span>Hi, my name is</span></h3>
          <h1 className="responsive-headline">{name}.</h1>
          <h2>I write code that works!</h2>
          <h3>
            I'm a <span>{occupation}</span> with expertise in backend development. {description}
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
          {/* <hr /> */}
          <a href={resumeDownload} className="button" target="_blank">
            <i className="fa fa-download"></i>Download Resume
          </a>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
