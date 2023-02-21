import {useState, React} from "react";
import { useOutletContext } from "react-router-dom";

export function CreatingPreview() {
    const words = useOutletContext()[1].map((word) => {
        return word + " "; 
    });

    // I use a set which I learned in a CSE course since it is easier to add and check if something is in it
    // clickedWords will have words that are black out
    // https://www.geeksforgeeks.org/sets-in-javascript/
    const [clickedWords, setClickedWords] = useState(new Set());

    // This is called if a word is clicked and will toggle blacking out. Note that newClickedWords will only have words that are blacked out
    function handleWordClick(word) {
        setClickedWords((prevClickedWords) => {
            const newClickedWords = new Set(prevClickedWords); // Create a new set with the previous words, since we cannot modify it according to React rules
            if (newClickedWords.has(word)) { // If the word is blacked out then we don't want it black ed out
                newClickedWords.delete(word);
            } else { // If the word isn't blacked out, then black it out!
                newClickedWords.add(word); 
            }
            return newClickedWords;
        })
    }

    // The way this works is that I map each word in words, if the word is in clickedWords (such that it should be blacked out),
    // Then the className will have the "blackout" class in it. Notice that I use onClick() which will go into the method
    // that will result in it being toggled. I use the array index as the key
    const wordTag = <p>
        {words.map((word, index) => {
            const isClicked = clickedWords.has(word);
            return(
                <span
                    key={index}
                    className={isClicked ? "blackout" : ""}
                    onClick={() => handleWordClick(word)}>
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