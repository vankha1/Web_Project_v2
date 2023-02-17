const joke = document.getElementById("joke");
var btn = document.getElementById("btn");

// const arrJoke = ["van kha dep trai", "ufhsafh", "jajfsjdf", "fjaljsf", "alkfjsd", "jaklfjs"];
// function myFunction(){
//     if (btn.innerText == "TELL ME A JOKE"){
//         btn.innerHTML = "CLick for another";
//         let randomNum = Math.floor(Math.random() * arrJoke.length);
//         // console.log(randomNum);
//         joke.innerHTML = arrJoke[randomNum];
//     }
// }

// Fetch data from API to random joke from API Ninja

const apiKey = "9GedvQhDs2OHh3N6MNY1yg==d5bB22PuZoM054vT";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
// Vì phải đợt response nhận data sau khi fetch data from API, rồi từ response mới chuyển thành json, do đó phải dùng async + await
// Khi thực hiện với API chúng ta luôn có try và catch để khi không có mạng thì thông báo ra.
async function myFunction(){
    try{
        joke.innerHTML = "Updating...";
        btn.innerHTML = "Loading..."

        const response = await fetch(apiURL, options);
        const data = await response.json();
        
        joke.innerHTML = data[0].joke;
        btn.innerHTML = "TELL ME A JOKE";
        // console.log(data)

    }
    catch (error){
        joke.innerHTML = "Something is wrong. Please try again";
        btn.innerHTML = "TELL ME A JOKE";
    }
}
btn.addEventListener("click", myFunction)
