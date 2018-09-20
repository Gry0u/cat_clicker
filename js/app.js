for (let i = 1; i < 6; i++) {
  let container = document.createElement('div');
  container.setAttribute('class', 'cat_container');

  let img = document.createElement('img');
  img.setAttribute('class', 'picture');
  img.setAttribute('src', `img/cat${i}.jpg`);

  let counterHTML = document.createElement('div');
  counterHTML.setAttribute('class', 'counter');

  container.appendChild(img);
  container.appendChild(counterHTML);
  document.querySelector('body').appendChild(container);
  let counteri = 0;
  counterHTML.innerText = counteri;
  img.addEventListener('click', function() {
    counteri +=1;
    counterHTML.innerText = counteri;
  });
}
