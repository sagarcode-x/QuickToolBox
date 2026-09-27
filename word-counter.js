const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");

const characterCount =
    document.getElementById("characterCount");

const sentenceCount =
    document.getElementById("sentenceCount");

const readingTime =
    document.getElementById("readingTime");


textInput.addEventListener("input", function () {

    const text = textInput.value;


    // Characters

    characterCount.textContent = text.length;


    // Words

    const words = text.trim();

    if (words === "") {

        wordCount.textContent = 0;

    } else {

        wordCount.textContent =
            words.split(/\s+/).length;

    }


    // Sentences

    const sentences =
        text
            .trim()
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim() !== "");

    sentenceCount.textContent =
        sentences.length;


    // Reading Time

    const totalWords =
        words === ""
            ? 0
            : words.split(/\s+/).length;

    const minutes =
        Math.ceil(totalWords / 200);

    readingTime.textContent =
        minutes + " min";

});