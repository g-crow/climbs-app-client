import React from 'react'
import "./About.css";
import Journal from "../images/climbing_notebook.jpg";

export default function About() {

  return (
    <div className="About">
      <div className="contents top">
        I wanted to create a gym climb tracking tool to capture what I'd been entering in my climbing journal in a more data-friendly format. I also wanted to get familiar with buiding full-stack apps using a serverless stack and AWS.
      </div>
      <img src={Journal} alt="climbing journal" />
      <div className="contents bottom">
        Here are more contents. A list of cool features I'd like to add!
      </div>
    </div>
  );
}
