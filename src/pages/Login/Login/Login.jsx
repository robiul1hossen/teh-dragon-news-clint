import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Login = () => {
  const location = useLocation();
  const from = location.state.from?.pathname || "/category/0";

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error, { replace: true });
      });
  };

  return (
    <Container className="mx-auto w-25">
      <h3>Please Login </h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />

        <Form.Text className="text-secondary">
          Do not have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-secondary"></Form.Text>
        <Form.Text className="text-secondary"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
