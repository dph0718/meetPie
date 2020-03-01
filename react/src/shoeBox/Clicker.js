import React from 'react';

import axios from "axios"

import "./clicker.css"

import ColorBtn from "./ColorBtn"





class Clicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            word: "Bananas!",
            time: 4,
            clickDisabled: false,
            blink: true,
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            document.getElementById("blinky").className = this.state.blink ? "green" : "red";
            document.getElementById("twinkle").className = this.state.blink ? "green" : "red";
            this.setState({ blink: !this.state.blink })
        }, 1000)
    }


    click = async () => {
        this.setState({
            time: 3,
            clickDisabled: true
        })
        let timer = setInterval(() => {
            if (this.state.time > 1) {
                this.setState({ time: this.state.time - 1 })
                console.log(`Timessss`);
            } else {
                this.setState({ time: 0, clickDisabled: false })
                clearInterval(timer)
            }
        }, 1000)

        setTimeout(() => {
            console.log("Grand Daddy.")
            this.setState({ word: "Compression" })
        }, 3000)

        await axios.get("/bump")
            .then(data => {
                console.log(`I got data!`);
                console.log(data);
                let word = data.data
                this.setState({ word: word })
            })

        setTimeout(() => console.log("Grand A Mama."), 4000)

        await axios.get("/users").then(data => {
            console.log(`I got more data.`);
            console.log(data);
        })


    }




    render() {


        return (
            <>
                <button disabled={this.state.clickDisabled} onClick={this.click}>{this.state.word}</button>
                <p>{this.state.time}</p>
                <div id="blinky">
                    <div id="twinkle"></div>
                </div>
            </>
        )
    }
}

export default Clicker