import {cardArray} from './cardsArray'
import { useEffect, useState } from 'react'
import MemoryCard from './Components/MemoryCard'

function App() {
  const [cards, setCards] = useState(cardArray)
  const [clickedItems, setClickedItems] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [topScore, setTopScore] = useState(0)
  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
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
      if(clickedItems.length > topScore){
        setTopScore(clickedItems.length)
      }
      setClickedItems([])
      setGameOver(true)
    }else{
      setClickedItems([...clickedItems, targetId])
    }
  }

  const makeNewCards = (cards) => {
    const NewCards = [...cards]
    shuffle(NewCards)
    setCards(NewCards)
  }

  useEffect(()=>{
    makeNewCards(cards)
  },[clickedItems])
  
  return (
    <div className="App" style = {appStyle}>
      <div className="gridWrapper" >
        <h1>{clickedItems.length}</h1>
        {gameOver && 
        <>
        <h1>Game Over</h1> 
        <button onClick = {() => setGameOver(false)}>Reset</button>
        <h1>Top Score: {topScore} </h1>
        </>}
        {!gameOver && cards.slice(0,7).map(card => (
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
