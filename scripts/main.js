let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/sunset.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Cool ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Cool ' + storeName;
}
myButton.onclick = function () {
    setUserName();
}