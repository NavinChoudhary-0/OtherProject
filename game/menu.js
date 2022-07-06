document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]
  let count = 0;
  let elementClicked = [];
  let dict = {}
  for(let i = 0 ; i < cardArray.length ; i++){
    dict[i] = 0;
  }
  cardArray.sort(() => 0.5 - Math.random());
  // console.log(cardArray);
  function insertCard() {
    let grid = document.getElementById('grid');
    for (let i = 0; i < cardArray.length; i++) {
      let img = document.createElement('img');
      img.setAttribute('id', i);
      img.setAttribute('src', 'images/blank.png');
      grid.appendChild(img);
      img.addEventListener('click', done);
    }
  }
  function call(){
    if(elementClicked[0] == elementClicked[1]){
      alert('same element clicked');
      document.getElementById(elementClicked[0]).setAttribute('src','images/blank.png');
    }else if(cardArray[elementClicked[0]].name == cardArray[elementClicked[1]].name){
      count += 2;
      alert("congralutions");
      let result = document.getElementById('result');
      result.innerText = count;
      dict[elementClicked[0]] = 1;
      dict[elementClicked[1]] = 1;
      document.getElementById(elementClicked[0]).setAttribute('src','images/white.png')
      document.getElementById(elementClicked[1]).setAttribute('src','images/white.png')
    }else{
      document.getElementById(elementClicked[0]).setAttribute('src','images/blank.png')
      document.getElementById(elementClicked[1]).setAttribute('src','images/blank.png')
      alert('different element clicked');
    }
    let v = 0;
    for(let i = 0 ; i < cardArray.length ; i++){
      if(dict[i] == 0){
        v = 1;
        let img = document.getElementById(i);
        img.addEventListener('click',done);
      }
    }
    if(v == 0){
      alert("congralutions you done it all");
    }
    elementClicked = []; 
  }
  insertCard();
  function done(){
    let id = this.id
    elementClicked.push(id);
    this.setAttribute('src',cardArray[id].img);
    if(elementClicked.length == 2){
      for(let i = 0 ; i < cardArray.length ; i++){
        if(dict[i] == 0){
          let img = document.getElementById(i);
          img.removeEventListener('click',done);
        }
      }
      setTimeout(call,500)
    }
  }
}

)
