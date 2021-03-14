import {GiAllSeeingEye, GiAlgae, GiArmadillo, GiBatMask} from 'react-icons/gi'
import { useState } from 'react'
import uniqid from 'uniqid'
import MemoryCard from './Components/MemoryCard'

const cardArray = [
  {
    id: uniqid(),
    icon: <GiAlgae/>,
    text: 'Algae'
  },
  {
    id: uniqid(),
    icon: <GiAllSeeingEye/>,
    text: 'All Seeing Eye'
  },
  {
    id: uniqid(),
    icon: <GiArmadillo/>,
    text: 'Armadillo'
  },
  {
    id: uniqid(),
    icon: <GiBatMask/>,
    text: 'Batman'
  }
]
function App() {
  const [cards, setCards] = useState(cardArray)
  const [clickedItems, setClickedItems] = useState([])
  const [gameOver, setGameOver] = useState(false)

  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const handleClick = (e) => {
    const targetId = e.target.closest('div').id
    if(clickedItems.includes(targetId)){
      console.log('gameOver')
      setClickedItems([])
      setGameOver(true)
    }else{
      setClickedItems([...clickedItems, targetId])
    }
   
    console.log(clickedItems)
    makeNewCards(cards)
  }

  const makeNewCards = (cards) => {
    const NewCards = [...cards]
    shuffle(NewCards)
    setCards(NewCards)
  }
  
  return (
    <div className="App" style = {appStyle}>
      <div className="gridWrapper" >
      {gameOver && <h1>Game Over</h1>}
       {!gameOver && cards.map(card => (
         <MemoryCard card = {card} key = {card.id} handleClick = {handleClick}/>
       ))}
      </div>
    </div>
  );
}

export default App;

const appStyle ={
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1em'
}
