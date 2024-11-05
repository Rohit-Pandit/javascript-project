var r1 = Math.floor(Math.random()*6)+1;
var source = "Image/dice"+r1+".png";
var t = document.querySelectorAll('img')[0];
t.setAttribute('src',source);

var r2 = Math.floor(Math.random()*6)+1;
var s2 = "Image/dice"+r2+".png";
var t2 = document.querySelectorAll('img')[1];
t2.setAttribute('src',s2);

if(r1>r2){
   document.querySelector("h1").innerHTML="player1 won🚩";
}
else if(r1<r2){
document.querySelector("h1").innerHTML="player2 won 🚩"
}
else{
 document.querySelector("h1").innerHTML="Tie 🏆"
}
