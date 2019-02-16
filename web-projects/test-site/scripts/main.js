var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/農薬画像１.png') {
    myImage.setAttribute('src', 'images/農薬画像２.png');
  } else {
    myImage.setAttribute('src', 'images/農薬画像１.png'); 
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = '農薬在庫管理システムはすばらしいよ、' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '農薬在庫管理システムはすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}