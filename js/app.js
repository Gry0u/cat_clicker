cats = [
  {name:'Joey', clicks: 0},
  {name:'Frank', clicks: 0},
  {name:'Bens', clicks: 0},
  {name:'Dan', clicks: 0},
  {name:'Tim', clicks: 0}
];

document.body.innerHTML = '';
//header for buttons
let header = document.createElement('header');
header.setAttribute('class', 'header');
document.body.appendChild(header);

//container for cat picture and counter div
let container = document.createElement('div');
container.setAttribute('class', 'cat_container');
document.querySelector('body').appendChild(container);

//image
let img = document.createElement('img');
img.setAttribute('class', 'picture');

//counter
let counterHTML = document.createElement('div');
counterHTML.setAttribute('class', 'counter');

container.appendChild(img);
container.appendChild(counterHTML);


//loop to add buttons, and event listener
for (let cat of cats) {
  //add buttons
  let button = document.createElement('button');
  header.appendChild(button);
  button.innerText = cat.name;

  let click_listener = function() {
    cat.clicks += 1;
    contentHTML = cat.clicks;
  };

  //on button click
  button.addEventListener('click', function() {
    //change image
    img.setAttribute('src', `img/${cat.name}.jpg`);
    counterHTML.innerText = cat.clicks;

    //counter event listener
    img.addEventListener('click', click_listener);
  });
}
