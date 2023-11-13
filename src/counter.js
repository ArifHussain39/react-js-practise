import React, { useState } from 'react';

const InputCounter = () => {
    const [text, setText] = useState('');

    const countWords = (inputText) => {
        const words = inputText.trim().split(/\s+/);
        return words.filter(word => word !== '').length;
    };

    const countCharacters = (inputText) => {
        return inputText.length;
    };

    const countLines = (inputText) => {
        return inputText.split('\n').length;
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);
    };

    return (
        <div style={containerStyle}>
            <textarea
                style={textareaStyle}
                rows="5"
                cols="50"
                value={text}
                onChange={handleInputChange}
                placeholder="Type here..."
            />
            <div style={infoContainerStyle}>
                <p style={infoTextStyle}>Words: {countWords(text)}</p>
                <p style={infoTextStyle}>Characters: {countCharacters(text)}</p>
                <p style={infoTextStyle}>Lines: {countLines(text)}</p>
            </div>
        </div>
    );
};

// Styles
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
};

const textareaStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
};

const infoContainerStyle = {
    textAlign: 'center',
};

const infoTextStyle = {
    margin: '5px',
    fontSize: '14px',
};

export default InputCounter;
