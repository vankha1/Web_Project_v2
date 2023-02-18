const inputEl = document.getElementById("input_word");
const meaningEls = document.getElementById("meaning");
const inforTextEl = document.getElementById("infor_text");
const audioEl = document.getElementById("phonetic_audio");
const meaningTitle = document.getElementById("meaning_title");
const meaningWord = document.getElementById("meaning_word");
// console.log(meaningEls)

async function fetchAPI(word){
    try {
        inforTextEl.style.display = "block";
        meaningEls.style.display = "none";
        inforTextEl.innerHTML = `Searching for meaning of ${word}`;
        // Fetch API
        const urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(urlAPI);
        const data = await response.json();
        // -------------------------
        if (data.title == "No Definitions Found"){
            audioEl.style.display = "none";
            inforTextEl.style.display = "none";
            meaningTitle.innerHTML = `Word Title : ${word}`;
            meaningWord.innerHTML = "Meaning : N/A";
            meaningEls.style.display = "block";
        }
        else{
            audioEl.style.display = "inline-flex";
            // console.log(data[0].phenectis[0].audio);
            inforTextEl.style.display = "none";
            meaningTitle.innerHTML = "Word Title : " + data[0].word;
            meaningWord.innerHTML = "Meaning : " + data[0].meanings[0].definitions[0].definition;
            meaningEls.style.display = "block";
            audioEl.src = data[0].phonetics[0].audio;
        }
    } catch (error) {
        console.log(error)
        inforTextEl.innerHTML = `Please check your connection again`;
    }
}

inputEl.addEventListener("keyup", (event) => {
    // event.target.value is a value which you input in input tag
    // event.key là giá trị của phím vừa gõ
    // console.log(event.target.value, event.key);
    if (event.target.value != "" && event.key == "Enter"){
        fetchAPI(event.target.value);
    }
})