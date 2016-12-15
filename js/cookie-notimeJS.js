var multiplicateur = 1;
var cookies = 0;


function ajouteUnCookie(){
	cookies = cookies+multiplicateur;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	return cookies;
}

function multiplicateur(cookies){
	if (cookies >= 20){
		multiplicateur = multiplicateur * 2;
		cookies = cookies - 20;
		document.getElementById("multiplicateur").innerHTML="Multiplicateur x"+multiplicateur;
		return multiplicateur;
	}
}

function reset(){
	cookies = 0;
	multiplicateur = 1;
}