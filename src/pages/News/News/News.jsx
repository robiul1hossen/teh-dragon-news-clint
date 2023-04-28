import React from "react";
import NewsLayout from "../../../layouts/NewsLayout";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import EditorsInsight from "../EditorsInsight/EditorsInsight";
import { FaArrowLeft } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft> All News in this categories
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;
