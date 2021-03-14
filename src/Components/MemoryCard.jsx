
const MemoryCard = ({card, handleClick}) => {
  return ( 
    <div style = {memoryCardStyle} id = {card.id} onClick = {(e) => handleClick(e)}>
      <div id = {card.id}  className="iconHolder" style ={iconHolder}>
        {card.icon}
      </div>
      <div id = {card.id}  className="textHolder" style ={textHolderStyle}>
        {card.text}
      </div>
    </div>
  );
}
 
export default MemoryCard;

const memoryCardStyle = {
  border: '1px solid #ccc',
  height: '300px',
  minWidth: '280px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px'
}
const iconHolder = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  height: '75%',
  fontSize: '100pt'
}
const textHolderStyle = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',
  fontSize: '20pt'
}