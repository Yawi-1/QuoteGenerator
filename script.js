const button = document.getElementById("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const copy = document.getElementById("copy");
const api_url = "http://api.quotable.io/random";
async function getdata() {
    const data= await fetch(api_url);
    var jsonData = await data.json();
    quote.innerHTML=jsonData.content;
    author.innerHTML=jsonData.author;
}
getdata();

button.onclick=getdata; 

function copyText() {
    const quoteText = quote.innerText; 
    navigator.clipboard.writeText(quoteText);
    alert('Text Copied')
}
copy.onclick=copyText;