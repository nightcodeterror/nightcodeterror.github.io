var myImage = document.querySelector('img');

myImage.onclick=function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/morphling-icon.png'){
        myImage.setAttribute('src','images/morphling-portrait.jpg');
    } else {
        myImage.setAttribute('src','images/morphling-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Silno igraet na morfinge, ' +myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Silno igraet na morfinge, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}