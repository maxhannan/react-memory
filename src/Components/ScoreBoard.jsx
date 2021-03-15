
const Scoreboard = ({topScore, clickedItems}) => {
  return ( 
    <div className="scoreBoard" style = {ScoreboardStyle}>
  
       <h1 style = {{margin: '10px', fontSize: '35pt', fontWeight: 300}}>Memory Icons</h1>
      <div className="scores">
        <h2 style = {{fontWeight: 300}}>Top Score: {topScore}</h2>
        <h2 style = {{fontWeight: 300}}>Current Score: {clickedItems.length}</h2>
      </div>
    </div>
  );
}
 
export default Scoreboard;

const ScoreboardStyle = { 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

