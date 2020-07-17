import React from 'react';
// import Game from './Game';


class NewChoice extends React.Component{
    constructor(props){
        super(props);
        this.choiceClick = this.choiceClick.bind(this);
    }

    choiceClick(event){
        // event.stopPropogation();
        console.log("yay new choice");
        this.props.calculateScale();
    }
    
    render(){
        return(
            <button onClick={this.choiceClick}>Click for New Card</button>
        )
    }
}

export default NewChoice;