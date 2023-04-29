import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Our Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptas maxime labore laborum, qui
        reprehenderit eum nam soluta, ducimus impedit quae tempore dolor velit adipisci veniam officiis
        eveniet. Rerum, quis!
      </p>
      <p>
        Go Back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
