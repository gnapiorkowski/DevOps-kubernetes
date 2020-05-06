import React, {Component } from 'react'

class RandomNumber extends Component {
    constructor(props){
        super(props)
        this.state = {random: 0};
        // const min = 0;
        // const max = 10;
        // const rand = min + Math.random() * (max - min);
        // this.setState({random: rand });
    }
    render() {
        const min = 0;
        const max = 10;
        const rand = min + Math.random() * (max - min);
        // this.setState({random: rand });
        return (
            <div> Your random number is: {rand} </div>
        );
    }
}

export default RandomNumber
