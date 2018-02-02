var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) // Code for Slides based on index values     
{
    showSlides(slideIndex += n);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

function xmlcall() //Retreiving values from xml file using function calls
{

    if (window.XMLHttpRequest) // code for IE7+, Firefox, Chrome, Opera, Safari  
    {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "slid.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var y, i, newElement, txt, xmlDoc;
    var x = xmlDoc.getElementsByTagName("item");
    var s = xmlDoc.getElementsByTagName("item");
    var z = x.length + s.length;
    document.getElementById("text").innerHTML =
        xmlDoc.getElementsByTagName("data")[0].childNodes[0].nodeValue;
    var n;

    for (n = 0; n < z; n++) //Loop for Retreiving all values from id's in increemental order
    {
        if (n < x.length) {

            document.getElementById('caption' + n.toString()).innerHTML = call(n);
        } else {
            document.getElementById('it' + (n - x.length + 1).toString()).innerHTML = call(n);
        }

    }

    function call(n) {


        var y =
            xmlDoc.getElementsByTagName("name")[n].childNodes[0].nodeValue + "<br>" + "<br>" +
            xmlDoc.getElementsByTagName("price")[n].childNodes[0].nodeValue + "<br>" +
            xmlDoc.getElementsByTagName("offer")[n].childNodes[0].nodeValue;


        return y;

    }


}