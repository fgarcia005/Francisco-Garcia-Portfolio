//checking
console.log("Hope is here");

//variables
let img = 0;
let imgs = ["subImages/img1.jpg","subImages/img2.jpg","subImages/AiArt.png","subImages/familyPic.jpg"];
var data;

//DOM
const slide = document.getElementById("slideshow");
const quote = document.getElementById("quote");

//code start here
slide.src = imgs[img]
setInterval(slideshow, 5000);

//API
const api_url ="https://type.fit/api/quotes";

async function getapi(url)
{
  const response = await fetch(url);
  data = await response.json();
  console.log(data);
}

getapi(api_url);

// functions
function slideshow(){
    if (img == imgs.length){
        img = 0;
    }
    slide.src = imgs[img];
    img++;
}

function displayQuote(dtat){

}

function displayQuote(){
    quote
}


