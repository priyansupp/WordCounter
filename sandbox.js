const textInput = document.querySelector("#hehe");
const wordCountTag = document.querySelector(".countword");
const letterCountTag = document.querySelector(".countletter");
const spaceCountTag = document.querySelector(".countspaces");

const isValidWord = (word) => {
    for(let i = 0; i < word.length - 2; i++){
        if(word[i] == word[i + 1] == word[i + 2]){
            return false;
        }
    }
    return true;
}


// to get the textarea in focus when clicked inside textarea //
// document.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e.target.tagName);
//     if(e.target.tagName === 'TEXTAREA'){
//         // console.log("YES");
//         textInput.classList.add("focused");
//     } else {
//         // console.log("NO");
//         textInput.classList.remove("focused");
//     }
// })
////////////

textInput.addEventListener("input", () => {
    const splittedWords = textInput.value.split(" ");
    let wordCount = 0;
    let letterCount = 0;
    let spaceCount = 0;
    for(const word of splittedWords) {
        if(isValidWord(word)) {
            wordCount++;
        }
        letterCount += word.length
    }

    if(letterCount === 0) wordCount = 0;

    if(wordCount === 0) spaceCount = 0;
    else spaceCount = wordCount - 1;

    wordCountTag.textContent = wordCount;
    letterCountTag.textContent = letterCount;
    spaceCountTag.textContent = spaceCount;
})


const resetFunc = () => {
    document.getElementById("hehe").innerHTML = "";
    wordCountTag.textContent = 0;
    letterCountTag.textContent = 0;
    spaceCountTag.textContent = 0;
}

