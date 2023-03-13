import { useState, React} from "react";

import { Outlet } from "react-router-dom";

export function Creating(props) {

    // I use sessionStorage here to help data not get erased when switching between nav tabs on the website
    const [words, setWords] = useState(JSON.parse(sessionStorage.getItem("words")) || []);
    const [clickedWords, setClickedWords] = useState(JSON.parse(sessionStorage.getItem("clickedWords")) || []);

    function changeClickedWords(wordSet) {
      setClickedWords(wordSet);
      sessionStorage.setItem("clickedWords", JSON.stringify(wordSet));
    }

    // For text input on the upload page
    function handleTextChange(event) {
        const textValue = event.target.value;
        // Split the text box into individual words
        // I use Regex to check for MULTIPLE spaces (in case of newlines and tabs). That is what the "+" character checks for and \s stands for any whitespace
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        const newWords = textValue.split(/\s+/); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        setWords(newWords);
        sessionStorage.setItem("words", JSON.stringify(newWords));
        // This below code acts as a "cleanup" as when the user changes the text, it will reset the clickedWords array and all blackouts will be removed
        const clickedWordsArray = new Array(newWords.length).fill(false);
        setClickedWords(clickedWordsArray); // Create an array that is the length of newWords and then set every value to be false
        sessionStorage.setItem("clickedWords", JSON.stringify(clickedWordsArray));

        sessionStorage.setItem("selectedValue", "culture");
        sessionStorage.setItem("title", "");
        sessionStorage.setItem("sourceTitle", "");
        sessionStorage.setItem("sourceAuthor", "");
        sessionStorage.setItem("description", "");

        props.handleFocusedPoem({});
    }

    // Outlet used to indicate that the children of the creating route will be displayed if their url is loaded
    // Note that I use OutletContext in order to pass data down to children
    // https://reactrouter.com/en/6.8.1/hooks/use-outlet-context
    return (
    <main>
        <div className="flexbox-container">
          <Outlet context={[handleTextChange, words, props.handlePoems, changeClickedWords, clickedWords, props.focusedPoem, props.currentUser]}/>
        </div>
    </main>
  );
}

