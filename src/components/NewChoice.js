import React from 'react';


class NewChoice extends React.Component{
    constructor(props){
        super(props);
        this.choiceClick = this.choiceClick.bind(this);
    }

    choiceClick(){
        this.props.calculateScale();
    }
    
    render(){
        return(
            <button onClick={this.choiceClick}>Click for New Card</button>
        )
    }
}

export default NewChoice;