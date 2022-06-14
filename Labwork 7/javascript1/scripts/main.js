var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    } else{
        myImage.setAttribute('src',images/firefox-icon.png);
    }
}
var myButton = document.querySelector('Button')
var myHeading = document.querySelector('h1')

function setUserName(){
    var myName = prompt('Please Enter Your Name. ');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, '+ storedName;
}

myButton.onclick = function() {
    setUserName();
}