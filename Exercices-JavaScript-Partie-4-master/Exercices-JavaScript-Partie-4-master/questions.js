/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire. 
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte[4];
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    if (typeof texte === "string")
    {
	return true;
	}
	return false;
}    
var AfficherExtensionString = function (texte) {
    var re = /(?:\.([^.]+))?$/;
    var ext = re.exec(texte)[1];
    return ext;
}
var NombreEspaceString = function (texte) {
    nbesp = texte.match(/[ ]/g).length;
    return nbesp;
}
var InverseString = function (texte) {
    var inv = "";
    for (var i = 0; i < texte.length; i++) {
        inv = texte[i] + inv;
    }
    return inv;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
     var new_array = [];
    for (var i = 0; i < array.length; i++) {
        absValue = Math.abs(array[i]);
        new_array.push(absValue);
    }
    return new_array;        
}
var sufaceCercle = function (rayon) {
    var s = Math.round(Math.PI*rayon*rayon);
    return s;
}
var hypothenuse = function (ab, ac) {
    var carre = ab*ab+ac*ac;
    return bc = Math.sqrt(carre);
}
var calculIMC = function (poids, taille) {
    var imc = poids / Math.pow(taille,2);
    var new_imc = Math.round(imc*100)/100;
    return new_imc;
}