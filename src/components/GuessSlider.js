import React from 'react';
import '../assets/slider.css';

class GuessSlider extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(){
        console.log("Random scale number is:", this.props.randomScaleNumber);
        if(this.props.randomScaleNumber == document.getElementById("guessRange").value) {
            console.log("they match");
        } else {
            console.log("they don't match");
        }
    }

    render(){
        return (
            <div>
                    <p>Guess Slider</p>
                    <input 
                        type="range" 
                        min="1" 
                        max="100"  
                        onChange={this.handleSubmit}
                        defaultValue="50"
                        className="slider" 
                        step="5"
                        id="guessRange" 
                    />
            </div> 
        )
    }
}

export default GuessSlider;