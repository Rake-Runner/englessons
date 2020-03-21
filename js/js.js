let dark = document.getElementById("dark");
let white = document.getElementById("white");
let header = document.getElementById("theheader");
let bg = document.getElementById("thebg");


let darkon = function(){
  header.style.color = "white";
  header.style.backgroundColor = "black";
  bg.style.backgroundColor = "black";
  bg.style.color = "white";
  dark.style.display = "none";
  white.style.display = "block";
};
let darkoff = function(){
  header.style.color = "black";
  header.style.backgroundColor = "white";
  bg.style.backgroundColor = "white";
  bg.style.color = "black";
  white.style.display = "none";
  dark.style.display = "block";
};

dark.addEventListener("click", darkon);
white.addEventListener("click", darkoff);