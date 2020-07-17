import React from 'react';
import '../assets/choices.css';

class Choices extends React.Component{
    render(){
        return(
            <div className="choiceCards">
                <div className="leftAndRightStyles">
                    <p>{this.props.leftChoice}</p>
                </div>
                <div className="leftAndRightStyles">
                    <p>{this.props.rightChoice}</p>
                </div>
            </div>
        )
    }
}

export default Choices;