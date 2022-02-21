var myImages =["laugh.jpg", "love.jpg","lunch.jpg","happiness.jpg","family.jpg"];

var captionImages =["Laugh","Love","Lunch","Happiness","Family"];


 var index=0; 

setInterval(auto, 2000);

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next() {
 if (myImages.length == index+1) {
 index=0;
}
 else {
 index++;
 updateImage();
}
} 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

function auto(){
if (document.getElementById("auto").checked)
{
if (index < captionImages.length)
{document.getElementById("caption").innerHTML = "<h1>" + captionImages[index] + "</h1>";
document.getElementById("slideshow").src=myImages[index];
index++;}
else
index=0;
}
}

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);