import { useState, React } from "react";

import { Outlet } from "react-router-dom";

// Find out how to make child route paths be the same as the parent
export function Creating() {

    const [words, setWords] = useState([]);

    // For text input on the upload page
    function handleTextChange(event) {
        const textValue = event.target.value;
        // Split the text box into individual words
        const newWords = textValue.split(" "); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        setWords(newWords);
    }

    // Note that I use OutletContext in order to pass data down to children
    // https://reactrouter.com/en/6.8.1/hooks/use-outlet-context
    return (
    <main>
        <div className="flexbox-container">
          <Outlet context={[handleTextChange, words]}/>
        </div>
    </main>
  );
}

