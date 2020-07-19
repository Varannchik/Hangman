import React, { Component }from 'react';
import './Game.css';
import { randomWord } from './Words.js';

import step0 from './img/0.png';
import step1 from './img/1.png';
import step2 from './img/2.png';
import step3 from './img/3.png';
import step4 from './img/4.png';
import step5 from './img/5.png';
import step6 from './img/6.png';

class Game extends Component {
    static defaultProps = {
        maxWrong: 6,
        img: [step0, step1, step2, step3, step4, step5, step6]
    }
    constructor(props){
        super(props);
        this.state = {
            mistake: 0,
            correct: new Set([]),
            answer: randomWord()
        
        }
    }

    handleGuess = e =>{
        let letter = e.target.value;
        this.setState(st=>({
            correct: st.correct.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }))
    }

    correct(){
        return this.state.answer.split("").map(letter => (this.state.correct.has(letter) ? letter : " _ "));
    }

    generateButton(){
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button 
            class="button" 
            key={letter} 
            value={letter} 
            onClick={this.handleGuess}
            disabled={this.state.correct.has(letter)}
        >
            {letter}
        </button>
        ));
    }
    
    resetButton = () =>{
        this.setState({
            mistake:0,
            correct: new Set([]),
            answer: randomWord()
        });
    }

    render(){
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const gameWinner = this.correct().join("") ===this.state.answer;
        let gameStatus = this.generateButton();

        if(gameWinner){
            gameStatus = "You Wonn!!!"
        }
        if(gameOver){
            gameStatus = "You Lost!!!"
        }
        return(
            <div className="game container">
                <h1 className='center'>Hangman</h1>
                <h3 className="center">Mistake: {this.state.mistake} of {this.props.maxWrong}</h3>
                <div className='center'>
                    <img src={this.props.img[this.state.mistake]} alt=""/>
                </div>
                <div className='center'>
                    <h4>Types of beer:</h4>
                    <p>
                        {!gameOver ? this.correct() : this.state.answer}
                    </p>
                    <p className=" w-400">{gameStatus}</p>
                    <button className="button res" onClick={this.resetButton}>Reset</button>
                </div>               
            </div>
        )
    }
}

export default Game;