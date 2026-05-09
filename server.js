require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const OpenAI = require("openai");

const app = express();

const PORT = 3000;

// Groq Client
const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1"
});

// Middleware
app.use(cors());

app.use(express.json());

app.use(express.static(
    path.join(__dirname, "public")
));

// Separate Memory For Each User
const userChats = new Map();

// Chat Route
app.post("/chat", async (req, res) => {

    try {

        const userMessage = req.body.message;

        // Get session ID
        const sessionId =
        req.headers["x-session-id"];

        // Create new memory if user is new
        if (!userChats.has(sessionId)) {

            userChats.set(sessionId, []);
        }

        // Get user's memory
        const chatHistory =
        userChats.get(sessionId);

        // Save user message
        chatHistory.push({
            role: "user",
            content: userMessage
        });

        // Limit memory
        if (chatHistory.length > 20) {

            chatHistory.splice(
                0,
                chatHistory.length - 20
            );
        }

        // AI Messages
        const messages = [

            {
                role: "system",

                content: `
You are a funny sarcastic AI chatbot.

Rules:
- Reply only in Hinglish
- Be witty and sarcastic
- Talk naturally like a real friend
- Remember previous conversation
- Keep replies short
- No emojis
- Be relatable
- Sound funny but not offensive
`
            },

            ...chatHistory
        ];

        // Generate AI Response
        const completion =
        await client.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: messages,

            temperature: 1,

            max_tokens: 100
        });

        const reply =
        completion.choices[0].message.content;

        // Save bot reply
        chatHistory.push({
            role: "assistant",
            content: reply
        });

        // Send response
        res.json({
            reply: reply
        });

    } catch (error) {

        console.error("Error:", error);

        res.json({
            reply:
            "Server bhi tumhari conversation se confuse ho gaya."
        });
    }
});

// Start Server
app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );
});