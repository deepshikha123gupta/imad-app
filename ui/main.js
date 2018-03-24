console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New Value';
var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginleft = marginleft + 1;
    img.style.marginleft = marginleft + 'px';   
}
imag.onclick = function () {
    var interval = setInterval(moveRight, 50);
};
