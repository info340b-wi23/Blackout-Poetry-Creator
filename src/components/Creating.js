import { useState, React } from "react";

import { Outlet } from "react-router-dom";

export function Creating(props) {

    const [words, setWords] = useState([]);
    const [wordTag, setWordTag] = useState();
    const [clickedWords, setClickedWords] = useState([]);

    function changeWordTag(wordTag) {
      setWordTag(wordTag);
    }

    function changeClickedWords(wordSet) {
      setClickedWords(wordSet);
    }

    // For text input on the upload page
    function handleTextChange(event) {
        const textValue = event.target.value;
        // Split the text box into individual words
        const newWords = textValue.split(" "); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        setWords(newWords);
        setClickedWords([]);
    }

    // Outlet used to indicate that the children of the creating route will be displayed if their url is loaded
    // Note that I use OutletContext in order to pass data down to children
    // https://reactrouter.com/en/6.8.1/hooks/use-outlet-context
    return (
    <main>
        <div className="flexbox-container">
          <Outlet context={[handleTextChange, words, changeWordTag, wordTag, props.handlePoems, changeClickedWords, clickedWords]}/>
        </div>
    </main>
  );
}

