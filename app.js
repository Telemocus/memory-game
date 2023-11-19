const cards = [
    { name: 'Fries',
      img:"assets/fries.png" ,
    },
     { name: 'Blank',
      img:"assets/blank.png" ,
    },
     { name: 'Cheeseburger',
      img:"assets/cheeseburger.png" ,
    },
     { name: 'Hotdog',
      img:"assets/hotdog.png" ,
    },
    { name: 'Milkshake',
      img:"assets/milkshake.png" ,
    },
     { name: 'Pizza',
      img:"assets/pizza.png" ,
    },
      { name: 'Fries',
      img:"assets/fries.png" ,
    },
     { name: 'Blank',
      img:"assets/blank.png" ,
    },
     { name: 'Cheeseburger',
      img:"assets/cheeseburger.png" ,
    },
     { name: 'Hotdog',
      img:"assets/hotdog.png" ,
    },
    { name: 'Milkshake',
      img:"assets/milkshake.png" ,
    },
     { name: 'Pizza',
      img:"assets/pizza.png" ,
    }
]

cards.sort(()=> 0.5 - Math.random());


const gridDisplay = document.querySelector("#grid");

function createBoard() {
     for (let i = 0; i < cards.length; i++) {
          const card = document.createElement('img');
          card.setAttribute('src','assets/blank.png');
          card.addEventListener('click', flipCard)   //I can use mouseover 
          card.setAttribute('data-id',i);

          gridDisplay.appendChild(card)
     }
}

createBoard();

function flipCard() {
    const cardId = this.getAttribute('data-id')
     console.log("clicked",cardId);

}