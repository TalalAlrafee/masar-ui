import React from "react";
import { useState } from "react";
import "./main-section.css";
import MainHeader from "../MainHeader/MainHeader";
import InputAI from "../InputAI/InputAI";
import StartBlock from "../StartBlock/StartBlock";
import Message from "../../components/Message/Message.jsx";
import AIResponse from "../AIResponse/AIResponse.jsx";
import { Star } from "@mui/icons-material";
function AuthMain(props) {
  const [userPrompts, setUserPrompts] = useState("");
  const [AIResponses, setAIResponses] = useState([]);
  const [userPromptsArray, setUserPromptsArray] = useState([]);

  const handleUserPromptsChange = (e) => {
    const { name, value } = e.target;
    setUserPrompts(value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("AboDa7m", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userPrompts }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setUserPromptsArray((prevResponses) => [...prevResponses, data]);
      setUserPrompts("");

      // If your Spring Boot endpoint returns a plain text response:
      const data = await response.text();

      setAIResponses((prevResponses) => [...prevResponses, userPrompts]);

      // Update the state with the response from server
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const StartBlockButton= ()=>{
    setUserPrompts("How Can I lower my churn rates?")
    

  }

  return (
    <div className="main-section">
      <MainHeader text={"AI Assistant"} />

      <div className="messaging-block scrollable-div">
        {userPromptsArray.length === 0 ? (
          <StartBlock />
        ) : (
          userPromptsArray.map((res, index) => (
            <Message key={index} text={res} />
          ))
        )}

        {AIResponses.map((res, index) => (
          <AIResponse key={index} content={res} />
        ))}
      </div>

      <InputAI
        userPrompts={userPrompts}
        onSubmit={submitHandler}
        onChange={handleUserPromptsChange}
      />
    </div>
  );
}

export default AuthMain;
