
import './App.css';
import ChessBoard from 'chessboardjsx';
import React, {useState,useEffect,useRef} from 'react';
import Chess from "chess.js"
const container ={
  marginTop: '2rem',
  display: "flex",
  justifyContent: "space-around",
  allignItem: "center"
  
}
function App() {
  const [Fen , setFen]= useState ("start")
  const onDrop = ({sourceSquare,targetSquare}) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare
    })
  if(move === null) return;
  setFen(game.current.fen())
  }
  let game = useRef(null)
  useEffect(() => {
    game.current = new Chess()
  },[])
  console.log(game)
  const resetgame = () => {
    game.current.clear();
    game.current.reset();
    setFen("start")
  }
  return (
    <>
    {
      game.current && game.current.game_over() ? <section class='letsgo'><div style = {{ textAlign:"center"}} ><h1> GameOver!!</h1><button onClick={resetgame}>Play Again</button></div></section>: <span></span>
    }
      
    <div className="App" style={container}>
      <section class='letsgo1'>
      <ChessBoard position = {Fen} onDrop={onDrop}/>
      </section>
    </div>
    </>
  );
  
}

export default App;
