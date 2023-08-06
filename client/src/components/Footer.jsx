import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import LinkedInIcon from "../assets/images/linkedin.png";
import FacebookIcon from "../assets/images/facebook.png";
import InstagramIcon from "../assets/images/instagram.png";
import TwitterIcon from "../assets/images/twitter.png";
import LOGO from "../assets/images/logo.png";

const client = new ApolloClient({
  uri: "your-graphql-endpoint",
  cache: new InMemoryCache(),
});

const Footer = () => {
  return (
    <ApolloProvider client={client}>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <a href="https://linkedin.com" className="hover:text-blue-700">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8 mb-2" />
            </a>
            <a href="https://facebook.com" className="hover:text-blue-500">
              <img src={FacebookIcon} alt="Facebook" className="w-8 h-8 mb-2" />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="w-8 h-8 mb-2"
              />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <img src={TwitterIcon} alt="Twitter" className="w-8 h-8 mb-2" />
            </a>
          </div>
          <div>
            <img
              src="../assets/images/LOGO.png"
              alt="Logo"
              className="w-16 h-16"
            />
          </div>
        </div>
      </footer>
    </ApolloProvider>
  );
};

export default Footer;
