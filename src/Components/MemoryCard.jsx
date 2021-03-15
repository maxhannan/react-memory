
const MemoryCard = ({card, handleClick}) => {
  return ( 
    <div 
    className = 'memoryCard' 
    style = {memoryCardStyle} 
    id = {card.id} 
    onClick = {(e) => handleClick(e)}
    >
      {card.icon}
    </div>
  );
}
 
export default MemoryCard;

const memoryCardStyle = {
  cursor: 'pointer',

  
  flexDirection: 'column',

  transition: 'transform 250ms ease',
  animation: 'expand 200ms linear',
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  height: '100%',
  color: 'white',
}

