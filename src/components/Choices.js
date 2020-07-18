import React from 'react';
import '../assets/choices.css';

class Choices extends React.Component{
    render(){
        return(
            <div className="choiceCards">
                <div id="leftSide">
                    <p>{this.props.leftChoice}</p>
                </div>
                <div id="rightSide">
                    <p>{this.props.rightChoice}</p>
                </div>
            </div>
        )
    }
}

export default Choices;