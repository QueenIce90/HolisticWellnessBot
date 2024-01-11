import React from 'react';
import './App.css';
import './normal.css';
import './style.css';

const chatContainer = document.getElementById('chat-container');
    const userInput = document.getElementById('user-input');

    function sendMessage() {
        const userMessage = userInput.value;
        appendMessage('You', userMessage);
        simulateAssistantResponse(userMessage);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
        userInput.value = ''; // Clear input field
    }

    function simulateAssistantResponse(userMessage) {
        // Simulate API call
        const apiUrl = 'http://127.0.0.1:5000'; 

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                role: 'user',
                content: userMessage,
            }),
        })
        .then(response => response.json())
        .then(data => {
            const assistantMessage = data.choices[0].message.content;
            appendMessage('Assistant', assistantMessage);
        })
        .catch(error => console.error('Error:', error));
    }

    

    

export default Chatbot;