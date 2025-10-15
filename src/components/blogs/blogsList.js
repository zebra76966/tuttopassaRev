import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const badges = ["/assets/icons/badge (1).svg", "/assets/icons/badge (2).svg", "/assets/icons/badge (3).svg"];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/tutto/api/get_blogs.php");
      setBlogs(response.data || []);
    } catch (err) {
      console.error(err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="ch-100 align-items-center py-5 px-lg-5" style={{ background: "#f7f1e3" }}>
      <Container fluid className="py-5 px-lg-5 px-2 mt-5">
        <Row className="g-4 pt-5 mt-5">
          {blogs.length === 0 && <p>No blogs found.</p>}

          {blogs.map((blog, i) => (
            <Col key={blog.id} xs={12} md={6} lg={i == 0 ? 8 : 4}>
              <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <Card style={{ cursor: "pointer" }} className="h-100 border-0 bg-none">
                    <Card.Img
                      className={`bg-light-color ${!blog.thumbnail ? "p-3" : ""}`}
                      src={blog.thumbnail ? `http://localhost:8080/tutto/api/${blog.thumbnail}` : badges[Math.floor(Math.random() * 3)]}
                      style={{ maxHeight: "430px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="fs-4 fw-bold text-uppercase p-font">{blog.title}</Card.Title>
                      <Card.Text className="pt-2 p-font">{blog.content.replace(/<[^>]+>/g, "").slice(0, 100)}...</Card.Text>

                      <div className="d-flex justify-content-between mt-4 align-items-center pt-2">
                        <button className="d-flex gap-2 bg-none border-0 fs-6 fw-bold p-font">
                          READ MORE <HiArrowLongRight size={24} />
                        </button>

                        <small className="text-muted p-font">{blog.created_at}</small>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
