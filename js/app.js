let model = {
  currentCat: null,
  cats:[
    {name:'Joey', clicks: 0, src: 'img/Joey.jpg'},
    {name:'Frank', clicks: 0, src: 'img/Frank.jpg'},
    {name:'Twins', clicks: 0, src: 'img/Twins.jpg'},
    {name:'Dan', clicks: 0, src: 'img/Dan.jpg'},
    {name:'Yuri', clicks: 0, src: 'img/Yuri.jpg'}
  ],
  admin_menu_visible: false
};

let game = {
  init: function() {
    //set initial cat as first one of the list
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
    adminMenuView.init();
  },

  increment: function() {
    model.currentCat.clicks++;
    catView.render();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  getVisibility: function() {
    return model.admin_menu_visible;
  },

  showMenu: function() {
    model.admin_menu_visible = true;
    adminMenuView.render();
  },

  hideMenu: function() {
    model.admin_menu_visible = false;
    adminMenuView.render();
  },

  addCat: function() {
    model.cats.push({
      name: document.getElementById('name').value,
      clicks: Number(document.getElementById('clicks').value),
      src: document.getElementById('url').value
    }); 
    catListView.render();
  }
};

let catView = {
  init: function() {
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    //on click on image, increment
    this.catImageElem.addEventListener('click', function() {
      game.increment();
    });

    this.render();
  },
  render: function() {
    //update DOM element with values of current cats
    let currentCat = game.getCurrentCat();
    this.countElem.textContent = currentCat.clicks;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.src;
  }
};

let catListView = {
  init: function() {
    //DOM element
    this.catListElem = document.getElementById('cat-list');

    //update DOM element with right values
    this.render();
  },

  render: function() {
    //get cats to render
    let cats = game.getCats();

    //clean
    this.catListElem.innerHTML = '';

    //loop to add cats
    for(let cat of cats) {
      //make cat button and set name
      let elem = document.createElement('button');
      elem.textContent = cat.name;

      /*listen to click: set current cat and display it. closure trick to link cat variable to the click event function*/
      const catButtonClick = function () {
        game.setCurrentCat(cat);
        catView.render();
      }


      elem.addEventListener('click', catButtonClick);
      //add button to HTML
      this.catListElem.appendChild(elem);
    }
  }
};

let adminMenuView = {
  init: function() {
    //get DOM elements
    this.adminButton = document.getElementById('admin-button');
    this.menu = document.getElementById('admin');
    this.saveButton = document.getElementById('save-button');
    this.cancelButton = document.getElementById('cancel-button');

    //add event listeners

    //admin button click
    this.adminButton.addEventListener('click', function() {
      //show menu
      game.showMenu();
    });

    //save button click
    this.saveButton.addEventListener('click', function() {
      game.addCat();
    });

    //cancel button click
    this.cancelButton.addEventListener('click', function() {
      game.hideMenu();
    });
    //display
    this.render();
  },

  render: function() {
    //Show/Hide depending on visibility value
    if (game.getVisibility()) {
      this.menu.style.display = "block";
    } else {
      this.menu.style.display = "none";
    }
  }
};

//start
game.init();
