import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";
import BlogEditor from "./createBlog";

export default function ProtectedBlog() {
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/tutto/api/check_password.php", { password });

      if (response.data.success) {
        setAuthenticated(true);
        setShowModal(false);
      } else {
        setError(response.data.message || "Invalid password");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!authenticated && (
        <Modal show={showModal} backdrop="static" centered style={{ backdropFilter: "blur(5px)" }}>
          <Modal.Header>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
              </Form.Group>
              <Button type="submit" className="mt-3" variant="primary" disabled={loading}>
                {loading ? "Checking..." : "Sign In"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}

      {authenticated && <BlogEditor />}
    </>
  );
}
