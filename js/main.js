var elCard = document.querySelector('.table-info');
var elCard2 = document.querySelector('.table-info2');
var elCard3 = document.querySelector('.table-info3');
var elButton = document.querySelector('.burger-btn');
var elMenu = document.querySelector('.menu');

elButton.addEventListener('click', function(){
    elMenu.classList.toggle("menu--open")
})

elCard.addEventListener('click', function(){
    elCard.classList.toggle("info--open")
})
elCard2.addEventListener('click', function(){
    elCard2.classList.toggle("table-info--open2")
})
elCard3.addEventListener('click', function(){
    elCard3.classList.toggle("info--open3")
})