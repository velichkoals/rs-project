import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";

const NotFound = () => {
  return (
    <div className="section-wrapper">
      This page doesn&apos;t exist. Go <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
