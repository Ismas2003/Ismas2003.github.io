let body   = document.querySelector('body');
    btn    = document.querySelector('.btn');
    burger = document.querySelector('.burger')
    toHide = document.querySelector('.toHide');
    menu   = document.querySelector('.menu')

btn.onclick = function() {
    body.classList.toggle('allRotate');
} 

burger.onclick = function() {
    menu.style.display = 'grid';
    toHide.style.display = 'block';
    burger.style.display = 'none';
}
toHide.onclick = function() {
    menu.style.display = 'none';
    toHide.style.display = 'none';
    burger.style.display = 'block';
}