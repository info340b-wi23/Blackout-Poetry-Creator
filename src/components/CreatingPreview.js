import { React } from "react";
import { useOutletContext } from "react-router-dom";

export function CreatingPreview() {
    const words = useOutletContext()[1].map((word) => {
        return word + " "; 
    });

    // The way this works is that I map each word in words, if the word is in clickedWords (such that it should be blacked out),
    // Then the className will have the "blackout" class in it. Notice that I use onClick() which will go into the method
    // that will result in it being toggled. I use the array index as the key
    const clickedWords = useOutletContext()[6];

    // Get our functions from the parent
    const changeClickedWords = useOutletContext()[5];
    const changeWordTag = useOutletContext()[2];

    // Use an array to keep track of which words are blacked out
    // This is called if a word is clicked and will toggle blacking out. Note that newClickedWords will only have words that are blacked out
    function handleWordClick(index) {
        changeClickedWords((prevClickedWords) => {
            const newClickedWords = [...prevClickedWords]; // Create a new array with the previous words, since we cannot modify it according to React rules
            newClickedWords[index] = !newClickedWords[index]; // Toggle the blackout class
            return newClickedWords;
        })
        changeWordTag(wordTag); // BUG: the last word blacked out will not black out in the output
    }

    const wordTag = <p>
    {words.map((word, index) => {
        const indexClicked = index;
        const isClicked = clickedWords[indexClicked] || false;
        return(
            <span
                key={word + index}
                className={isClicked ? "blackout" : ""}
                onClick={() => handleWordClick(indexClicked)}>
            {word}
            </span>
        );
    })}
    </p>;   

    return(
        <section className="creation-preview px-md-3">
                <div className="creation-container">
                    <div className="creation-header">
                        <h1>Preview</h1>
                    </div>
                    <div className="creation-content">
                        <div className="preview-paper">
                            <div className="preview-paper-words">
                                {wordTag}
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}