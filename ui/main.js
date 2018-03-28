console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New Value';
var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';   
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
};
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};