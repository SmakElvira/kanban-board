import React from "react";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.TimerID = setInterval(
            () => this.tick(),
            1000
        )

        //throw new Error('Timer faild');
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.TimerID)
    }

    render() {
        const { date } = this.state;

        return (
            <div>{ date.toLocaleTimeString() }</div>
        )
    }
}

export default Time;