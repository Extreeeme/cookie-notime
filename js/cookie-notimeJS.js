var multiplicateur = 1;
var cookies = 0;
var prix = 20;

document.getElementById("buttonanim").onclick = function (){
	cookies = cookies+multiplicateur;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
}

document.getElementById("multiplicateur").onclick = function(){
	if(cookies >= prix){
		multiplicateur = multiplicateur + 1;
		cookies = cookies - prix;
		prix = prix*2;
		document.getElementById("multiplicateur").innerHTML="Multiplicateur +" + multiplicateur + "\nPrix : "+prix;
		document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	}
}

document.getElementById("reset").onclick = function (){
	cookies = 0;
	multiplicateur = 1;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	document.getElementById("multiplicateur").innerHTML="Multiplicateur\nPrix : 20";
}