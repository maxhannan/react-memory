import {cardArray} from '../cardsArray'
import { useEffect, useState } from 'react'
import MemoryCard from './MemoryCard'

const Cards = ({clickedItems, setClickedItems, endGame}) => {
  const [cards, setCards] = useState(cardArray);

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

  const makeNewCards = (cards) => {
    const NewCards = [...cards]
    shuffle(NewCards)
    setCards(NewCards)
  }

  const handleClick = (e) => {
    const targetId = e.target.closest('div').id
    clickedItems.includes(targetId) ? 
    endGame(targetId) : setClickedItems([...clickedItems, targetId])
  }

  useEffect(()=>{
    makeNewCards(cards)
  },[clickedItems])

  const CardGrid = () => cards.slice(0,9).map(card => (
    <MemoryCard card = {card} key = {card.id} handleClick = {handleClick}/>
  ));
    
  return ( 
    <div className="gridWrapper" >
      <CardGrid/>
    </div>
  );
}
 
export default Cards;