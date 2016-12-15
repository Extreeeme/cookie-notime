var multiplicateur = 1;
var cookies = 0;


document.getElementById("bouton").onclick = function (){
	cookies = cookies+multiplicateur;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
}

document.getElementById("multiplicateur").onclick = function(){
	if(cookies >=20){
		multiplicateur = multiplicateur + 1;
		cookies = cookies - 20;
		document.getElementById("multiplicateur").innerHTML="Multiplicateur +" + multiplicateur;
		document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	}
}

document.getElementById("reset").onclick = function (){
	cookies = 0;
	multiplicateur = 1;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	document.getElementById("multiplicateur").innerHTML="Multiplicateur";
}