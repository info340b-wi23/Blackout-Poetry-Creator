import { React } from "react";
import { useOutletContext } from "react-router-dom";

export function CreatingPreview() {
    const words = useOutletContext()[1].map((word) => { // Get our words from the parent and add a space (for printing properly)
        return word + " "; 
    });

    // The way this works is that I map each word in words, if the word is in clickedWords (such that it should be blacked out),
    // Then the className will have the "blackout" class in it. Notice that I use onClick() which will go into the method
    // that will result in it being toggled. I use the array index as the key
    const clickedWords = useOutletContext()[4];

    // Get our functions from the parent
    const changeClickedWords = useOutletContext()[3];

    // Use an array to keep track of which words are blacked out
    // This is called if a word is clicked and will toggle blacking out. Note that newClickedWords will only have words that are blacked out
    function handleWordClick(index) {
        const newClickedWords = [...clickedWords]; // Create a new array with the previous words, since we cannot modify it according to React rules
        newClickedWords[index] = !newClickedWords[index]; // Toggle the blackout class
        changeClickedWords(newClickedWords); // change the clicked words to reflect the one that was clicked on
    }

    // This is a wordTag which is the HTML of what you see on the preview screen as you type it in
    // Notice that depending on whether a word is in clickedWords determines in the ternary whether it is blacked out or not
    let wordTag = <p>
        {words.map((word, indexClicked) => {
            const isClicked = clickedWords[indexClicked] || false;
            return(
                <span
                    key={word + indexClicked}
                    className={isClicked ? "blackout-preview" : ""}
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