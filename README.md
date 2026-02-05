# 🚀 AI-Powered Resume Application Assistant

An intelligent **full-stack web application** that converts PDF resumes into **tailored, professional job application emails** using Large Language Models (LLMs).

Designed for speed, privacy, and clarity—generate high-quality application emails in seconds.

---

## ✨ Features

- **PDF Resume Parsing**
  - Extracts text from complex PDF layouts using `pdfplumber`
- **AI-Powered Email Generation**
  - Uses Groq Cloud (Llama-3 / Mixtral) to align experience with job requirements
- **Interactive UI Feedback**
  - Visual confirmation for uploads and clipboard actions
- **Professional Output**
  - Clean, plain-text emails with standard greetings and structure
- **Privacy-First**
  - Resume text extraction occurs locally before AI processing

---

## 🧠 Tech Stack

| Layer       | Technology                         |
| ----------- | ---------------------------------- |
| Frontend    | React, Vite, Axios                 |
| Backend     | FastAPI, Uvicorn                   |
| AI          | Groq Cloud API (Llama-3 / Mixtral) |
| PDF Parsing | pdfplumber                         |
| Styling     | Custom CSS (Modern Centered UI)    |

---

## 🏗️ Architecture Overview

- **Client (SPA)**
  - Handles file uploads, job descriptions, and UI state
- **API Layer**
  - FastAPI endpoints for multipart PDF uploads and JSON payloads
- **AI Service Layer**
  - Dedicated Python service for prompt construction and AI inference

---

## 📸 Screenshots

- Resume Upload Interface
- Job Description Input
- Generated Email Output
- Copy-to-Clipboard Success State

---

## 🚀 Getting Started

### Backend Setup

```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate
    pip install -r requirements.txt

    echo "GROQ_API_KEY=your_api_key_here" > .env
    uvicorn main:app --reload
```

---

### Frontend Setup

```bash
    cd frontend
    npm install
    npm run dev
```

---

✉️ Contact

Fiteh Tesfaye

LinkedIn: [fiteh.linkedIn](https://www.linkedin.com/in/fiteh-tesfaye-96510a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

Email: fitehtesfaye@gmail.com

🔗 Project Repository
[fiteh.gitHub](https://github.com/Fiteh-21/resume-email-generator/)
