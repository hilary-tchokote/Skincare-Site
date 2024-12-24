import { useState } from "react"


function QuestionForm() {
    const [inputValue, setInputValue] = useState("Ask your question here")
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert me 🚨</button>    
        </div>
    )
}

export default QuestionForm;