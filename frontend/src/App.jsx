import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [emailResult, setEmailResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // New states for visual feedback
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const API_BASE = "http://localhost:8000";

  const handleFileUpload = async () => {
    if (!file) return;
    setLoading(true);
    setUploadSuccess(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${API_BASE}/upload-resume`, formData);
      setResumeText(response.data.resume_text);
      setUploadSuccess(true); // Trigger color change
    } catch (error) {
      console.error("Upload Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!emailResult) return;
    navigator.clipboard.writeText(emailResult.body);
    setCopied(true);

    // Revert color after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleGenerateEmail = async () => {
    if (!resumeText) return;
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/generate-email`, {
        resume_text: resumeText,
        job_position: jobDescription, // Matches model.py
      });
      setEmailResult(response.data);
    } catch (error) {
      console.error("Generate Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Job Application Email Generator</h1>

      <div className="section">
        <h2>1. Upload Your Resume</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setUploadSuccess(false); // Reset color if new file chosen
          }}
        />
        <button
          onClick={handleFileUpload}
          disabled={loading || !file}
          className={uploadSuccess ? "btn-success" : ""}
        >
          {loading
            ? "Processing..."
            : uploadSuccess
              ? "✓ Resume Ready"
              : "Upload PDF"}
        </button>
      </div>

      <div className="section">
        <h2>2. Target Job Position</h2>
        <textarea
          placeholder="e.g. Frontend Developer at TechCorp..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows="2"
        />
      </div>

      <div className="section">
        <h2>3. Your Professional Email</h2>
        <button onClick={handleGenerateEmail} disabled={!resumeText || loading}>
          {loading ? "AI is writing..." : "Generate Custom Email"}
        </button>

        {emailResult && (
          <div className="result">
            <div className="email-subject">
              <strong>Subject:</strong> {emailResult.subject}
            </div>
            <textarea
              className="generated-email-area"
              readOnly
              value={emailResult.body}
              rows="20"
            />
            <button
              className={copied ? "btn-success" : "copy-btn"}
              onClick={handleCopy}
            >
              {copied ? "✓ Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
