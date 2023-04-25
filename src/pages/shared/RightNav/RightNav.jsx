import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login With Github
      </Button>
      <div className="mt-5">
        <h4>Find us on </h4>
        <ListGroup>
          <ListGroup.Item disabled>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="position-absolute top-0 p-5 text-white">
          <h4 className="my-4 px-1 text-center">Create an Amazing Newspaper</h4>
          <p>
            smallDiscover thousands of options, easy to customize layouts, one-click to import demo and much
            more.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
