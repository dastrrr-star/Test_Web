var myModal = document.getElementById('myModal');
var Button = document.getElementById('myButton');  
var MyClose = document.getElementById('myClose')
var testButton = document.getElementById('testButton')
var modal_content = document.getElementById('modal_content')


Button.onclick = function (){
    myModal.style.display="block";
    setTimeout(opacity1, 100);  
}

MyClose.onclick = function (){
    modal_content.style.opacity = "0";
     setTimeout(none, 100);
}

MyClose.onmouseenter = function(){
    MyClose.style.fontSize = "70px";
}

MyClose.onmouseleave = function(){
    MyClose.style.fontSize = "48px";
}

testButton.onclick = function(){
    testButton.style.backgroundColor = "red";
    testButton.style.marginLeft = "500px";
}

function opacity1 () {
    modal_content.style.opacity = "1";
}

function none () {
    myModal.style.display="none";

}
