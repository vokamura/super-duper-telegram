import React from 'react';

class Guess extends React.Component{
    constructor(props){
        super(props);
        this.state = { userGuess: "" };
        this.handleHintSubmit = this.handleHintSubmit.bind(this);
        this.choiceClick = this.choiceClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHintSubmit(){
        let userInput = document.getElementById('userGuess').value;
        console.log(userInput);
        this.setState({ userGuess: userInput });
    }

    choiceClick(){
        this.props.calculateScale();
    }

    handleSubmit(){
        console.log("Input value is: ", document.getElementById("teamGuess").value);
        console.log("Random scale number is:", this.props.randomScaleNumber);
        // debugger;
        if(this.props.randomScaleNumber == document.getElementById("teamGuess").value) {
            console.log("they match");
        } else {
            console.log("they don't match");
        }
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
                    <input type="text"  id="userGuess" placeholder="Enter your hint here" />
                    <button onClick={this.handleHintSubmit} >Submit Hint</button>
                </div>
                <div className={this.state.userGuess === "" ? "showElement" : "hideElement"}>
                    <button onClick={this.choiceClick} >Click for New Card</button>
                </div>

                <div >
                    <input type="text"  id="teamGuess" placeholder="Submit scoring number" />
                    {/* <button onClick={this.handleHintSubmit} >Submit Scoring Number</button> */}
                </div>

                <div className={this.state.userGuess === "" ? "hideElement" : "showElement"}>
                    <button onClick={this.handleSubmit}>Submit Guess</button>
                </div>
                {/* <div className={this.state.userGuess === "" ? "hideElement" : "showElement"}>
                    <button onClick={this.handleReset}>Reset Round</button>
                </div> */}
            </div>
        )
    }
}

export default Guess;