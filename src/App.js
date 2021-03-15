
import { useEffect, useState } from 'react'
import Cards from './Components/Cards'
import GameOver from './Components/GameOver'
import Scoreboard from './Components/ScoreBoard'
import {cardArray} from './cardsArray'

function App() {
  const [clickedItems, setClickedItems] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [topScore, setTopScore] = useState(0)
  const [finalCard, setFinalCard] = useState({})
  const [finalScore, setFinalScore] = useState(0)
 
  const endGame = (targetId)=> {
    const final = cardArray.find(card => card.id === targetId);
    setFinalCard(final)
    setGameOver(true)
    setFinalScore(clickedItems.length)
    setClickedItems([])
  }
  useEffect(()=>{
    if(topScore < clickedItems.length){
      setTopScore(clickedItems.length)
    }
  },[ clickedItems ])
  
  return (
    <div className="App" style = {appStyle}>
      
        {gameOver && 
        <GameOver 
          maxScore = {cardArray.length}
          setGameOver = {setGameOver}
          finalCard = {finalCard} 
          finalScore = {finalScore}
          topScore = {topScore}
        />
        }
        {!gameOver && 
        <>
        <Scoreboard clickedItems = {clickedItems} topScore = {topScore} />
        <Cards 
          endGame = {endGame} 
          clickedItems = { clickedItems } 
          setClickedItems = {setClickedItems}
        /> 
        </>
        }
    </div>
  );
}

export default App;

const appStyle ={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '1em',
  alignItems: 'center',
  color: 'white'
}
