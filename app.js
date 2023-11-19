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
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

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
     const optionOneId = cardsChosenId[0];
     const optionTwoId = cardsChosenId[1];

     if(optionOneId == optionTwoId){
          alert("You've selected the same card!")
     }

     if (cardsChosen[0] == cardsChosen[1]) {
          alert('MATCH');
          cardx[optionOneId].setAttribute('src','assets/white.png');
          cardx[optionTwoId].setAttribute('src','assets/white.png');
          cardx[optionOneId].removeEventListener('click', flipCard);
          cardx[optionTwoId].removeEventListener('click', flipCard);
          cardsWon.push(cardsChosen);
     }else{
          cardx[optionOneId].setAttribute('src','assets/blank.png');
          cardx[optionTwoId].setAttribute('src','assets/blank.png');
          alert("Try Again")
     }
     cardsChosen = [];
     cardsChosenId = [];
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