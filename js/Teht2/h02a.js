document.write("Peruslaskutoimituksia!<br/><br/>");
document.write("<br/>Kokonaislukuja<br/><br/>");
var luku1 = 15;
var luku2 = -8;

var summa = luku1 + luku2;
document.write("Lukujen " + luku1 + " ja " + luku2 + " summa on " + summa);

var erotus = luku1 - luku2;
var tulo = luku1 * luku2;
var osamaara = luku1 / luku2;
document.write("<br/>Lukujen " + luku1 + " ja " + luku2 + " erotus on " + erotus);
document.write("<br/>Lukujen " + luku1 + " ja " + luku2 + " tulo on " + tulo);
document.write("<br/>Lukujen " + luku1 + " ja " + luku2 + " osamäärä on " + osamaara);

document.write("<br/>");
document.write("<br/>");
document.write("<br/>Desimaalilukuja<br/>");

var luku3 = 15.123;
var luku4 = -8.97;

var summa2 = luku3 + luku4;
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " summa on " + summa2);

var erotus2 = luku3 - luku4;
var tulo2 = luku3 * luku4;
var osamaara2 = luku3 / luku4;
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " erotus on " + erotus2);
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " tulo on " + tulo2);
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " osamäärä on " + osamaara2);

document.write("<br/>");
document.write("<br/>");
document.write("<br/>Desimaalilukuja, sama kahdella desimaalilla<br/>");

document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " summa on " + summa2.toFixed(2));
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " erotus on " + erotus2.toFixed(2));
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " tulo on " + tulo2.toFixed(2));
document.write("<br/>Lukujen " + luku3 + " ja " + luku4 + " osamäärä on " + osamaara2.toFixed(2));