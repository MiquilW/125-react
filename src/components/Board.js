import React, { useState } from 'react'
import { Square } from './Square'
import '../App.css'

let numTurns = 0;

export const Board = () => {

  console.log(numTurns)
  const [squares, setSquares] = useState(Array(9).fill('\u2060'))
  const [X, setX] = useState(true)

  const handleClick = (i) => {
    if (getWinner(squares)) {
      return
    }

    if (squares[i] === 'X' || squares[i] === 'O') {
      return
    }

    squares[i] = X ? 'X' : 'O'
    setSquares(squares)
    setX(!X)
    numTurns++;
    console.log(numTurns)
  }

  const winner = getWinner(squares)
  
  let player
  if (winner) {
    player = `Winner: ${winner}`
  }
  else if (numTurns === 9) {
    player = 'Draw!'
  }
  else {
    player = `Next player: ${X ? 'X' : 'O'}`
  }

  const resetBoard = () => {
    setX(true)
    setSquares(Array(9).fill('\u2060'))
    numTurns = 0;
  }

  const initSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  return (
    <div className='board'>
      <div className='row'>
        {initSquare(0)}
        {initSquare(1)}
        {initSquare(2)}
      </div>
      <div className='row'>
        {initSquare(3)}
        {initSquare(4)}
        {initSquare(5)}
      </div>
      <div className='row'>
        {initSquare(6)}
        {initSquare(7)}
        {initSquare(8)}
      </div>
      <h1 className='player'>{player}</h1>
      <button className='reset' onClick={resetBoard}>Reset Game</button>
    </div>
  )
}

function getWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < winningLines.length; i++) {
    const [first, second, third] = winningLines[i]

    for (let i = 0; i < winningLines.length; i++) {
      const [first, second, third] = winningLines[i];
      if (squares[first] === squares[second] && squares[first] === squares[third] && squares[first] !== '\u2060') {
        return squares[first];
      }
    }
    return null;
  }
}
