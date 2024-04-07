import { useState } from "react";
import styles from "./AIChat.module.css";
import sendIcon from "../assets/SendIcon.png";
import closeIcon from "../assets/closeIcon.webp";

interface ChatMessage {
    message: string;
    author: string;
}

export const Chat = () => {
  const [isChat, setIsChat] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const url = "https://localhost:7009/api/Chat";
    
  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  }

  const HandleSendClick = () => {
    const chatMessage: ChatMessage = {
        message: inputMessage,
        author: "user"
    }
    SendMessage(inputMessage);
    setChatHistory(currentHistory => [...currentHistory, chatMessage]);
    setInputMessage("");
  }

  const SendMessage = async(message: string) => {
    try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message), 
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.text(); 
        const chatMessage: ChatMessage = { message: data, author: "system" }; 
        setChatHistory(currentHistory => [...currentHistory, chatMessage]);
        
      } catch (error) {
        console.error("Failed to send message: ", error);
      }
  }

  if (!isChat) {
    return (
      <div className={styles.chatLogo} onClick={() => setIsChat(true)}>
        <img src="https://www.un.org/sites/un2.un.org/files/2020/08/chat.png" />
      </div>
    );
  } else {
    return (
      <div className={styles.chatWindow}>
        <img src={closeIcon} 
          onClick={() => setIsChat(false)} className={styles.closeChat} />
        <div className={styles.messageContainer}>
            {chatHistory.map((message) => (
                message.author === 'user' ? 
                    <p className={styles.user}>{message.message}</p> : 
                    <p className={styles.system}>{message.message}</p>
            ))}
        </div>
        <div className={styles.inputBox}>
            <input 
                type="text"
                value={inputMessage} 
                onChange={HandleInputChange}/>
            <img src={sendIcon} onClick={HandleSendClick}/>
        </div>
      </div>
    );
  }
};
