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
const cardsChosen = [];
const cardsChosenId = [];
const carsWon = [];

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

function checkMatch() {
    const  cardx = document.querySelectorAll('img');

     if (cardsChosen[0] == cardsChosen[1]) {
          alert('MATCH');
          cardx[cardsChosenId[0]].setAttribute('src','assets/white.png');
          cardx[cardsChosenId[1]].setAttribute('src','assets/white.png');
          cardx[cardsChosenId[0]].removeEventListener('click', flipCard);
          cardx[cardsChosenId[1]].removeEventListener('click', flipCard);
          cardsWon.push(cardsChosen);
     }
}
function flipCard() {
     const cardId = this.getAttribute('data-id')
     cardsChosen.push(cards[cardId].name)
     cardsChosenId.push(cardId)
     this.setAttribute('src',cards[cardId].img)
     if (cardsChosen.length === 2) {
          setTimeout( checkMatch,500)
     }
}