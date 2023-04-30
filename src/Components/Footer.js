import React from "react";
const Footer = (props) => {
  let name, street, city, state, zip, phone, email, mailto;
  let networks;
  if (props.data) {
    networks = props.data.social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    name = props.data.name;
    street = props.data.address.street;
    city = props.data.address.city;
    state = props.data.address.state;
    zip = props.data.address.zip;
    phone = props.data.phone;
    email = props.data.email;
    mailto = `mailto:${email}`;
  }

  return (
    <footer id="footer">
      <div className="row">
        <div className="four columns"></div>
        <div className="four columns">
          <ul className="social-links">{networks}</ul>

          {/* <ul className="copyright">
            <li>&copy; Copyright 2023 Pratiksha Shrestha</li>
          </ul> */}
        </div>
        <div className="four columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>{name}</span>
            <br />
            <span>
              {/* {street} */}
              {/* <br /> */}
              {city}, {state} {zip}
            </span>
            <br />
            <span>{phone}</span>
            <br />
            <span><a href={mailto}>{email}</a></span>
            <br />
            <span><a href="mailto:shrestp9@miamioh.edu">shrestp9@miamioh.edu</a></span>
          </p>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
