import React from 'react';
import Choices from './Choices';
import HintSlider from './HintSlider';
import GuessSlider from './GuessSlider';
import Guess from './Guess';
import choicelist from './choicelist.json';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            randomScaleNumber: 0, 
            leftChoice: "", 
            rightChoice:"",
            leftScore: 0,
            rightScore: 0,
            number: 0
        };
        this.calculateScale = this.calculateScale.bind(this);
        this.chooseCard = this.chooseCard.bind(this);

    }

    // componentDidMount(){
    //     this.calculateScale();
    // }

    calculateScale(){
        let randomNumber = Math.round((Math.random()*(100-0)+0)/5)*5+1;
        this.setState({ randomScaleNumber: randomNumber });
        this.chooseCard();
    }

    chooseCard(){
        let randomChoice = Math.floor(Math.random()*10);
        let leftSide = choicelist[randomChoice].left;
        let rightSide = choicelist[randomChoice].right;
        this.setState({ leftChoice: leftSide, rightChoice: rightSide });
    }

    render(){
        return(
            <div>
                <p>{this.state.randomScaleNumber}</p>
                <Choices leftChoice={this.state.leftChoice} rightChoice={this.state.rightChoice}/>
                <HintSlider randomScaleNumber={this.state.randomScaleNumber}/>
                <GuessSlider randomScaleNumber={this.state.randomScaleNumber}/>
                <Guess leftChoice={this.state.leftChoice} calculateScale={this.calculateScale} randomScaleNumber={this.state.randomScaleNumber}/>
            </div>
        )
    }
}

export default Game;