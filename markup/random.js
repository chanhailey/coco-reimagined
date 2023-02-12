window.onload = choosePic;

var myPix = new Array("../assets/images/guava.png", "../assets/images/matcha.png",
"../assets/images/passionfruit.png", "../assets/images/mango.png");

function choosePic() {
     var num = Math.floor(Math.random() * myPix.length);
     document.canvas.src = myPix[num];
}