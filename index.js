document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'bagus',
      img: 'images/bagus.jpg'
    },
    {
      name: 'bagus',
      img: 'images/bagus.jpg'
    },
    {
      name: 'andhika',
      img: 'images/andhika.jpg'
    },
    {
      name: 'andhika',
      img: 'images/andhika.jpg'
    },
    {
      name: 'panji',
      img: 'images/panji.jpg'
    },
    {
      name: 'panji',
      img: 'images/panji.jpg'
    },
    {
      name: 'jasper',
      img: 'images/jasper.jpg'
    },
    {
      name: 'jasper',
      img: 'images/jasper.jpg'
    }
  ]
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.card')
  const grid2 = document.querySelector('.card2')
  const grid3 = document.querySelector('.start')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    const card2 = document.createElement('img')
  
    if (cardsChosen[0] === cardsChosen[1]) {
      alert(`You found ${cardsChosen[0]}`)
      cards[optionOneId].setAttribute('src', 'images/nice.gif')
      cards[optionTwoId].setAttribute('src', 'images/nice.gif')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      card2.setAttribute('src', `images/${cardsChosen[0]}.jpg`)
      let t = document.createTextNode(`${cardsChosen[0]}, `)
      grid3.appendChild(t)
      grid2.appendChild(card2)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    if(cardsWon.length > 0){
      resultDisplay.textContent = `You have found ${cardsWon.length} of us`
    } else{
      resultDisplay.textContent = "Lets Find Us"
    }
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'We Are Burgundy Fox!!!'
      }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})