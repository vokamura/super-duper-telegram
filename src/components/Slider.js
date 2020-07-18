import React from 'react';
import '../assets/slider.css';

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        document.getElementById("myRange").step = "6";
        console.log(e.target.value);

    }

    render(){
        return (
            <div>
                    <input 
                        type="range" 
                        min="1" 
                        max="100"  
                        onChange={ this.handleChange } 
                        value={ this.props.randomScaleNumber }
                        // readOnly
                        className="slider" 
                        id="myRange" 
                    />
            </div> 
        )
    }
}

export default Slider;