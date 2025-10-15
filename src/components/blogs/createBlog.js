import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Container, Alert, Spinner, Col, Row } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";
import Quill from "quill";

import "quill/dist/quill.snow.css";
import { ImageResize } from "quill-image-resize-module-ts";
import axios from "axios";
import "./blogs.css";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const Align = Quill.import("formats/align");

  Quill.register(Align, true);

  useEffect(() => {
    // Register ImageResize module
    try {
      Quill.register("modules/imageResize", ImageResize);
    } catch (err) {
      console.warn("ImageResize already registered:", err);
    }

    const BlockEmbed = Quill.import("blots/block/embed");
    class CustomVideo extends BlockEmbed {
      static create(value) {
        const node = super.create();
        node.setAttribute("src", value);
        node.setAttribute("controls", true);
        node.style.width = "100%";
        node.style.maxHeight = "570px";
        node.style.display = "block";
        node.style.margin = "20px 0";
        node.style.borderRadius = "8px";
        return node;
      }
      static value(node) {
        return node.getAttribute("src");
      }
    }
    CustomVideo.blotName = "video";
    CustomVideo.tagName = "video";
    Quill.register(CustomVideo);

    if (editorRef.current && !quillRef.current) {
      const toolbarOptions = [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],

        [{ align: [] }],
        ["link", "image", "video", "audio"],
        ["clean"],
      ];

      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: toolbarOptions,
          imageResize: {
            modules: ["Resize", "DisplaySize"], // no Toolbar to avoid errors
          },
        },
        placeholder: "Write your blog here...",
      });

      // Wait a tick for toolbar to be ready
      setTimeout(() => {
        const toolbar = quillRef.current.getModule("toolbar");
        if (toolbar) {
          toolbar.addHandler("image", () => handleMediaUpload(quillRef.current, "image"));
          toolbar.addHandler("video", () => handleMediaUpload(quillRef.current, "video"));
          toolbar.addHandler("audio", () => handleMediaUpload(quillRef.current, "audio"));
        }
      }, 50);

      quillRef.current.on("text-change", () => {
        setContent(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleMediaUpload = async (quill, type) => {
    const input = document.createElement("input");
    input.type = "file";
    if (type === "image") input.accept = "image/*";
    if (type === "video") input.accept = "video/*";
    if (type === "audio") input.accept = "audio/*";
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);

      try {
        setLoading(true);
        const response = await axios.post("http://localhost:8080/tutto/api/upload.php", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const fileUrl = response.data.url;
        const range = quill.getSelection(true);

        if (type === "image") {
          quill.insertEmbed(range.index, "image", fileUrl);
        } else if (type === "video") {
          quill.insertEmbed(range.index, "video", fileUrl);
        } else if (type === "audio") {
          const audioTag = `
            <audio controls style="display:block; margin:10px 0; width:100%;">
              <source src="${fileUrl}" type="audio/mpeg">
              Your browser does not support the audio tag.
            </audio>
          `;
          quill.clipboard.dangerouslyPasteHTML(range.index, audioTag);
        }

        quill.setSelection(range.index + 1);
      } catch (err) {
        console.error(err);
        setMessage({ text: "Failed to upload file.", type: "danger" });
        toast.error("Failed to upload file.");
      } finally {
        setLoading(false);
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage({ text: "Title and content are required!", type: "danger" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("tags", tags);
      formData.append("content", content);
      if (thumbnail) formData.append("thumbnail", thumbnail);

      await axios.post("http://localhost:8080/tutto/api/create_blog.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage({ text: "Blog uploaded successfully!", type: "success" });
      setTitle("");
      setTags("");
      setThumbnail(null);
      setContent("Blog uploaded successfully!");
      toast.success();
      quillRef.current?.setContents([]);
    } catch (err) {
      console.error(err);
      setMessage({ text: "Failed to upload blog.", type: "danger" });
      toast.error("Failed to upload blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ch-100 d-flex align-items-center py-5" style={{ background: "#f7f1e3" }}>
      <Toaster />
      <Container className="py-5" style={{ marginTop: 30 }}>
        <h2 className="mb-4 mt-5 fs-2 p-font">Create a New Blog</h2>
        {message.text && <Alert variant={message.type}>{message.text}</Alert>}

        <Form onSubmit={handleSubmit} className="connect-form">
          <Row>
            <Col md={6} lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Blog Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input" />
              </Form.Group>
            </Col>
            <Col md={6} lg={4}>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Tags (comma separated)</Form.Label>
                <Form.Control type="text" value={tags} onChange={(e) => setTags(e.target.value)} className="form-input" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} className="form-input" />
              </Form.Group>
            </Col>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <div ref={editorRef} style={{ height: 720, marginBottom: 10 }} />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Uploading...
              </>
            ) : (
              <>
                <FaUpload className="me-2" /> Upload Blog
              </>
            )}
          </Button>
        </Form>
      </Container>
    </div>
  );
}
