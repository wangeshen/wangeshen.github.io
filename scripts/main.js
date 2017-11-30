var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
/* DEMO hello world
function show_string(str) {
alert('Hello ' + str + ' !');
}

show_string('wangeshen');

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

/* DEMO photo swith by click
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

/* DEMO for button & localStorage
*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
