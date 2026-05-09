// Unique Session ID
const sessionId =
Math.random().toString(36).substring(2);

async function sendMessage() {

    const input =
    document.getElementById("user-input");

    const chatBox =
    document.getElementById("chat-box");

    const message =
    input.value.trim();

    if (message === "") return;

    // User Message
    const userDiv =
    document.createElement("div");

    userDiv.classList.add(
        "message",
        "user"
    );

    userDiv.innerText = message;

    chatBox.appendChild(userDiv);

    input.value = "";

    // Auto Scroll
    chatBox.scrollTop =
    chatBox.scrollHeight;

    // Typing Animation
    const typingDiv =
    document.createElement("div");

    typingDiv.classList.add(
        "message",
        "bot"
    );

    typingDiv.innerText =
    "Typing...";

    chatBox.appendChild(typingDiv);

    chatBox.scrollTop =
    chatBox.scrollHeight;

    try {

        // Send Message To Backend
        const response =
        await fetch("/chat", {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json",

                "x-session-id":
                sessionId
            },

            body: JSON.stringify({
                message: message
            })
        });

        const data =
        await response.json();

        // Remove Typing
        typingDiv.remove();

        // Bot Reply
        const botDiv =
        document.createElement("div");

        botDiv.classList.add(
            "message",
            "bot"
        );

        botDiv.innerText =
        data.reply;

        chatBox.appendChild(botDiv);

        // Auto Scroll
        chatBox.scrollTop =
        chatBox.scrollHeight;

    } catch (error) {

        typingDiv.innerText =
        "AI ne bhi aaj kaam karne se mana kar diya.";
    }
}

// Enter Key Support
document
.getElementById("user-input")
.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();
        }
    }
);