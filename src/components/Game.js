import React from 'react';
import Choices from './Choices';
import Slider from './Slider';
import NewChoice from './NewChoice';
import Guess from './Guess';
import choicelist from '../data/choicelist.json';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { randomScaleNumber: 0, leftChoice: "", rightChoice:"" };
        this.calculateScale = this.calculateScale.bind(this);
        this.chooseCard = this.chooseCard.bind(this);
    }

    // componentDidMount(){
    //     this.calculateScale();
    // }

    calculateScale(){
        let randomNumber = Math.round((Math.random()*(100-0)+0)/5)*5
        this.setState({ randomScaleNumber: randomNumber });
        this.chooseCard();
    }

    chooseCard(){
        let choiceListLength = choicelist.length;
        // console.log(choiceListLength);
        let randomChoice = Math.floor(Math.random()*choiceListLength);
        // console.log(randomChoice);
        let leftSide = choicelist[randomChoice].left;
        let rightSide = choicelist[randomChoice].right;
        // console.log(randomChoice);
        // console.log(choicelist[randomChoice]);
        // console.log("Left side is: ", leftSide);
        // console.log("Right side is: ", rightSide);
        this.setState({ leftChoice: leftSide, rightChoice: rightSide });
    }

    render(){
        return(
            <div>
                {/* <p>{this.state.randomScaleNumber}</p> */}
                <Choices leftChoice={this.state.leftChoice} rightChoice={this.state.rightChoice}/>
                <Slider randomScaleNumber={this.state.randomScaleNumber}/>
                <Guess />
                <NewChoice calculateScale={this.calculateScale} />
            </div>
        )
    }
}

export default Game;