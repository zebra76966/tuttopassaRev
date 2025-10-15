import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { HiArrowLongLeft } from "react-icons/hi2";
import { motion } from "framer-motion";
import "quill/dist/quill.snow.css";

export default function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const badges = ["/assets/badge (1).svg", "/assets/badge (2).svg", "/assets/badge (3).svg"];

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/tutto/api/get_blogs.php");
      const foundBlog = response.data.find((b) => b.id === id);
      setBlog(foundBlog || null);
    } catch (err) {
      console.error(err);
      setBlog(null);
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

  if (!blog) {
    return (
      <Container className="py-5">
        <h3>Blog not found</h3>
        <Link to="/">Back to Blogs</Link>
      </Container>
    );
  }

  return (
    <div className="ch-100 py-5 " style={{ background: "#f7f1e3" }}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="py-5">
        <Container className="py-5">
          <h2 className="mb-4 pt-5">{blog.title}</h2>
          {blog.thumbnail && (
            <img
              src={blog.thumbnail ? `http://localhost:8080/tutto/api/${blog.thumbnail}` : badges[Math.random(0, 2)]}
              alt={blog.title}
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: 20 }}
            />
          )}
          <div className="ql-editor" dangerouslySetInnerHTML={{ __html: blog.content }} style={{ lineHeight: 1.6 }} />
          <p className="text-muted mt-4">{blog.created_at}</p>
          <Link to="/blogs" className="link text-dark d-flex gap-3 text-decoration-none fw-bold fs-6">
            <HiArrowLongLeft size={24} />
            BACK TO BLOGS
          </Link>
        </Container>
      </motion.div>
    </div>
  );
}
