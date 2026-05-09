# sarcastic_hinglish_chatbot
# Sarcastic Hinglish AI Chatbot

A full-stack AI-powered sarcastic Hinglish chatbot built using Node.js, Express, Groq API, HTML, CSS, and JavaScript.

The chatbot generates dynamic contextual replies in Hinglish with sarcastic humor and maintains separate memory for each user session.

---

## Features

- AI-generated sarcastic Hinglish replies
- Context-aware conversations
- Multi-user session memory
- Modern glassmorphism UI
- Responsive design
- Typing animation
- Groq API integration
- Full-stack architecture
- Real-time chatbot interaction

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### AI API
- Groq API
- Llama 3.3 70B Versatile Model

---

## Project Structure

```txt
sarcastic_hinglish_chatbot/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── .gitignore
├── README.md
└── .env
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/sarcastic_hinglish_chatbot.git
```

### Open Project

```bash
cd sarcastic_hinglish_chatbot
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in root directory.

Add:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## Run Project

```bash
node server.js
```

Open browser:

```txt
http://localhost:3000
```

---

## How It Works

1. User sends message from frontend.
2. Frontend sends request to Express backend.
3. Backend sends conversation history to Groq API.
4. AI generates sarcastic Hinglish response.
5. Response displayed in chat UI.

---

## Multi-User Memory System

The chatbot uses unique session IDs for each browser session.

This prevents different users from sharing the same conversation memory.

---

## Deployment

The project can be deployed on:

- Render
- Railway
- Vercel

---

## Future Improvements

- Database integration
- Login system
- Voice assistant
- AI streaming responses
- Saved chat history
- Multiple personalities
- Dark/light themes

---

## Author

Amit Kushwaha

---

## License

This project is open-source and available for educational purposes.
