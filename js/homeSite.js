//checking
console.log("Hope is here");

//variables
let img = 0;
let imgs = ["subImages/img1.jpg","subImages/img2.jpg","subImages/aiart.jgp","subImages/familyPic.jpg"];
let newQuote;

//DOM
const slide = document.getElementById("slideshow");
const quote = document.getElementById("quote");

//API
const api_url ="https://type.fit/api/quotes";

async function apiUpdate(url){
    //get API
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    let rnd = randNum = Math.floor( Math.random() * data.length ) + 1;
    newQuote = data[rnd];
    console.log(newQuote.author);

    //Change HTML
    let q = newQuote.text;
    let a = newQuote.author.replace(", type.fit","");
    let newText = `Quote Of The Day:<br> "${q}" by ${a}`;
    console.log(newText);
    quote.innerHTML = newText;
}

//code start here
slide.src = imgs[img]
setInterval(slideshow, 5000);
apiUpdate(api_url);

// functions
function slideshow(){
    if (img == imgs.length){
        img = 0;
    }
    slide.src = imgs[img];
    img++;
}


function displayQuote(){
    quote
}


