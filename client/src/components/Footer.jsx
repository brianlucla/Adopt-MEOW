import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import LinkedInIcon from "../assets/images/icons/linkedin-min.png";
import FacebookIcon from "../assets/images/icons/facebook-min.png";
import InstagramIcon from "../assets/images/icons/instagram-min.png";
import TwitterIcon from "../assets/images/icons/twitter-min.png";
import LOGO from "../assets/images/logo/LOGO-min.png";
import "../index.css"; 
import BackgroundImage from "../assets/images/testimonial/footer-background-min.png";

const client = new ApolloClient({
  uri: "your-graphql-endpoint",
  cache: new InMemoryCache(),
});

const Footer = () => {
  return (
    <ApolloProvider client={client}>
      <footer
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)), url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="icons-container">
            {" "}
            {/* Add className for icons container */}
            <a href="https://linkedin.com">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a href="https://facebook.com">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
          </div>
          <div className="logo-container">
            {" "}
            {/* Add className for logo container */}
            <img src={LOGO} alt="Logo" className="logo" />
          </div>
        </div>
        <p>&copy;2023 AdoptMeow. All rights reserved.</p>
      </footer>
    </ApolloProvider>
  );
};

export default Footer;
