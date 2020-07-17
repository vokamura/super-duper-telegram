import React from 'react';

class Guess extends React.Component{
    constructor(props){
        super(props);
        this.state = { userGuess: "" };
        this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
    }

    handleGuessSubmit(){
        console.log("guess submitted")
        let userInput = document.getElementById('userGuess').value;
        console.log(userInput);
        this.setState({ userGuess: userInput });
    }

    render(){
        return(
            <div>
                <p>{this.state.userGuess}</p>
                <input type="text"  id="userGuess" placeholder="Enter your guess here"/>
                <button onClick={this.handleGuessSubmit}>Submit Guess</button>
            </div>
        )
    }
}

export default Guess;