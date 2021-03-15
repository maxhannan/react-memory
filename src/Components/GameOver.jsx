const GameOver = ({setGameOver, finalScore, finalCard, maxScore, topScore}) => {
  return ( 
    <div className="container" style = {containerStyle}>
      <div className="gameOver" style = {gameOverStyle}>
        <h1 style = {{margin: '10px', fontSize: '35pt', fontWeight: 400}}>Game Over</h1> 
        <h2 style = {ScoreStyle}>Max Score: {maxScore} </h2> 
        <h2 style = {ScoreStyle}>Top Score: {topScore} </h2> 
        <h2 style = {ScoreStyle}>Final Score: {finalScore} </h2>
        <h2 style = {ScoreStyle}>Final Card: {finalCard.icon} </h2>
        <button className = 'resetBtn' onClick = {() => setGameOver(false)} style = {btnStyle}>Reset</button>
      </div>
    </div>
    
  );
}
 
export default GameOver;

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}

const gameOverStyle = {
  padding: '30px',
  borderRadius: '20px',
  border: '1px solid #ccc',
  fontSize: '25pt',
  textAlign: 'center',
  fontWeight: '400',
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around'

}
const btnStyle = {
  background: 'transparent', 
  color: 'white',
  fontSize: '15pt',
  border: '1px solid white',
  padding: '10px 15px',
  borderRadius: '20px',
  cursor: 'pointer'
}

const ScoreStyle = {
  margin: '10px', 
  fontSize: '25pt', 
  fontWeight: 400
}