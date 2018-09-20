const picture = document.querySelector('.picture');
let counterHTML = document.querySelector('.counter')
let counter = 0;
picture.addEventListener('click', function() {
  counter +=1;
  counterHTML.innerText = counter;
});
