import React from 'react';

class Guess extends React.Component{
    constructor(props){
        super(props);
        this.state = { userGuess: "" };
        this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
        this.choiceClick = this.choiceClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleGuessSubmit(){
        let userInput = document.getElementById('userGuess').value;
        console.log(userInput);
        this.setState({ userGuess: userInput });
    }

    choiceClick(){
        this.props.calculateScale();
    }

    handleReset(){
        console.log("reset clicked");
        this.choiceClick();
        document.getElementById("userGuess").value = "";
        this.setState({ userGuess : "" });
    }

    render(){
        return(
            <div>
                <div>
                    <p className="userGuess">{this.state.userGuess}</p>
                </div>
                <div className={this.state.userGuess === "" && this.props.leftChoice !== "" ? "showElement" : "hideElement"}>
                    <input type="text"  id="userGuess" placeholder="Enter your guess here" />
                    <button onClick={this.handleGuessSubmit} >Submit Guess</button>
                </div>
                <div className={this.state.userGuess === "" ? "showElement" : "hideElement"}>
                    <button onClick={this.choiceClick} >Click for New Card</button>
                </div>
                <div className={this.state.userGuess === "" ? "hideElement" : "showElement"}>
                    <button onClick={this.handleReset}>Click for New Turn</button>
                </div>
            </div>
        )
    }
}

export default Guess;