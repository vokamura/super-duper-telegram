import React from 'react';
import Slider from './Slider';
import NewChoice from './NewChoice';


class Random extends React.Component {
    constructor(props){
        super(props);
        this.state = { randomScaleNumber: 0 };
        this.calculateScale = this.calculateScale.bind(this);
    }

    componentDidMount(){
        this.calculateScale();
    }

    calculateScale(){
        // let randomNumber = Math.floor(Math.random() * 100) + 1;
        let randomNumber = Math.round((Math.random()*(100-0)+0)/5)*5
        this.setState({ randomScaleNumber: randomNumber });
    }

    render(){
        return(
            <div>
                <p>{this.state.randomScaleNumber}</p>
                <Slider randomScaleNumber={this.state.randomScaleNumber}/>
                <NewChoice calculateScale={this.calculateScale} />
            </div>
        )
    }
}

export default Random;