import React from 'react';
import '../assets/slider.css';

class HintSlider extends React.Component {

    render(){
        return (
            <div>
                    <p>Hint Slider</p>
                    <input 
                        type="range" 
                        min="1" 
                        max="100"  
                        readOnly
                        value={this.props.randomScaleNumber}
                        className="slider" 
                        id="hintRange" 
                    />
            </div> 
        )
    }
}

export default HintSlider;