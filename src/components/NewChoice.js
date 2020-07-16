import React from 'react';
import Random from './Random';
import choicelist from '../data/choicelist.json';

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
            <button onClick={this.choiceClick}>New Choice</button>
        )
    }
}

export default NewChoice;