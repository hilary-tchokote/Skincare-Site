import { useState } from "react"


function QuestionForm() {
    const [inputValue, setInputValue] = useState("Ask your question here")
    const isInputError = inputValue.includes(';')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert me 🚨</button>    
            {isInputError &&(
                <div> Your question should not contain any ';' </div>
            )}
        
        </div>
    )
}

export default QuestionForm;