function ajouteUnCookie(cookies, multiplicateur){
	cookies = cookies + (1*multiplicateur);
	document.getElementById("score").innerHTML = "Nombre de Cookie : "+ cookies;
	return cookies;
}