'use client';

import { createContext, useState } from "react";
import axios from 'axios';

export const Context = createContext();

// Regex to format prompt response
const formatResponse = (response) => {
    let formattedResponse = response.replace(/##\s(.*?)(?=\n)/g, "<h2>$1</h2>");
    formattedResponse = formattedResponse.replace(/###\s(.*?)(?=\n)/g, "<h3>$1</h3>");
    formattedResponse = formattedResponse.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    formattedResponse = formattedResponse.split("*").join("</br>");
    formattedResponse = formattedResponse.split("\n").join("</br>");
    formattedResponse = formattedResponse.replace(/```(.*?)```/gs, `<span>$1</span>`);
    return formattedResponse;
};

const ContextProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);
    const [resultData, setResultData] = useState("");

    // const [toggleChats, setToggleChats] = useState(false);
    // const [toggleMenu, setToggleMenu] = useState(true);
    // const [input, setInput] = useState("");
    // const [recentPrompt, setRecentPrompt] = useState("");
    // const [prevPrompts, setPrevPrompts] = useState([]);
    // const [showResult, setShowResult] = useState(false);

    // Function to delay appending each word
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    // Function to get response from Gemini API and format it
    const onSent = async (prompt) => {
        let response;
        setResultData("");
        try {
            response = await axios.post('/api/generate-prompt', { prompt });
            const formattedResponse = formatResponse(response.data);

            // Split the response into words and delay appending each word
            const words = formattedResponse.split(" ");
            words.forEach((word, i) => {
                delayPara(i, word + " ");
            });
        } catch (error) {
            console.error("Error fetching response:", error);
        }
        return response;
    };

    // Global Function to toggle items
    const onToggleItems = (setItem) => {
        setItem((toggle) => !toggle);
    };

    // Retrieve theme from localStorage on initial render
    // const [isDark, setIsDark] = useState(() => {
    //     const savedTheme = localStorage.getItem("theme");
    //     return savedTheme === "dark";
    // });

    const contextValue = {
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        onSubmit,
        setOnSubmit,
        // input,
        // setInput,
        // recentPrompt,
        // setRecentPrompt,
        // prevPrompts,
        // setPrevPrompts,
        // showResult,
        // toggleChats,
        // setToggleChats,
        // toggleMenu,
        // setToggleMenu,
        // onToggleItems,
        // isDark,
        // setIsDark,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;