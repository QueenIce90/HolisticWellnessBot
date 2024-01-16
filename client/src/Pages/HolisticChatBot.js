// import OpenAI from "openai";


// import { options } from "openai";

import {useState, useEffect} from 'react'


function HolisticChatBot() {
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);
    const [previousChats, setPreviousChats ] = useState([]);
    const [currentTitle, setCurrentTitle ] = useState(null)
    const createNewChat = () => {
        setMessage(null)
        setValue("")
        setCurrentTitle(null)
    }
    const handleClick = (uniqueTitles) => {
        setCurrentTitle(uniqueTitles)
        setValue("")
        setMessage(null)
    }
    const getMessages = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({ prompt: value, content: message?.content || "" }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        try {
            const response = await fetch('http://127.0.0.1:5555/chatbot', options);
            const data = await response.json();
            console.log(data);
            setMessage(data?.choices?.[0]?.message || "No response message");
            setValue("");
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        console.log(currentTitle, value, message)
        if (!currentTitle && value) {
            setCurrentTitle("test")
        }
        if (currentTitle && value && message) {
            setPreviousChats(prevChats => (
                [...prevChats,
                    {
                    title: currentTitle,
                    role:"user",
                    content: value
                }, 
                {
                title: currentTitle,
                role: message.role,
                content:message.content
                }


            ]
            ))
                    
        }
    }, [value, message, currentTitle])
    console.log(previousChats)

    const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)
    const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)))

    console.log(uniqueTitles)

    return (
        <div className="HolisticChatBot">
            <section className = "side-bar">
            <button className="new-chat" onClick={createNewChat}> + New Chat</button>
            {/* <img className="logo" src="/logo.png" alt="holistic chatbot" width="55%" height="70%" /> */}
            <ul className="history">
            {uniqueTitles?.map((uniqueTitle, index) => (
                <li key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>))}
                </ul> 
        
                <nav className="title">Made with ❤️ by Nature's Love Touch</nav>
            </section>
            <section className="main">
                {!currentTitle &&    <h1>Holistic Ai Chat</h1>}
            
                <ul className="feed">
                    {currentChat.map((chatMessage, index) => 
                        <li key={index} className="message">
                            <p className='role'>{chatMessage.role}</p>
                            <p className="content"> {chatMessage.content}</p>

                            
                        </li>
                    )}

                </ul>
                <div className="bottom-section">
                    <div className="input-container">
                        <input value={value} onChange={(e) => setValue(e.target.value)}/>
                        <div id= "submit" onClick = {getMessages}>➢</div>
                        
                    </div>
                    <p className="info">
                    Holistic Chat GPT provides a secure environment for receiving nutritional recommendations and assistance related to the use of ALKALINE FOODS, while addressing various health conditions. Our goal is to prioritize safety and offer natural interactions. Your feedback is instrumental in our ongoing commitment to advancing and refining our services.

                    </p>

                </div>


            </section>
        </div>
    );
}

export default HolisticChatBot;

