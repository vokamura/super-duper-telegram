import React from 'react';
import '../assets/slider.css';

class Slider extends React.Component {
    // constructor(props){
        // super(props);
        // this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(){
    //     console.log("props changed");
    //     return this.props.randomScaleNumber
    // }

    render(){
        return (
            <div>
                {/* <p>This is passed from Random.js: {this.props.randomScaleNumber}</p> */}
                {/* <p>This should be the current value of the slider: {this.handleChange()}</p>  */}
                    <input 
                        type="range" 
                        min="1" 
                        max="100"  
                        // onChange={ this.handleChange } 
                        value={ this.props.randomScaleNumber }
                        readOnly
                        className="slider" 
                        id="myRange" 
                    />
            </div> 
        )
    }
}

export default Slider;