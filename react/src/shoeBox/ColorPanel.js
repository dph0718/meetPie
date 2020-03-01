import React from 'react';
import ColorBtn from "./ColorBtn"
import "./colorPanel.css"
class ColorPanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            color1: "green",
            color2: "red",
            blink: true,
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ blink: !this.state.blink })
            document.getElementById("blinky").className = this.state.blink ? this.state.color1 : this.state.color2;
            document.getElementById("twinkle").className = this.state.blink ? this.state.color1 : this.state.color2;
            // document.getElementById("blinky").className = this.state.blink ? "green" : "red";
            document.getElementById("twinkle").className = this.state.blink ? "green" : "red";
        }, 1000)
    }

    setColor1 = (color) => {
        this.setState({ color1: color })
    }

    setColor2 = (color) => {
        this.setState({ color2: color })
    }

    render() {

        let colors = ["red", "green", "blue", "yellow", "white", "gold"]
        let colorBtns = colors.map(color => {
            return <tr> <ColorBtn color={color} setColor={this.setColor1} /> <ColorBtn color={color} setColor={this.setColor2} /> </tr>
        })

        let color = this.state.blink ? this.state.color1 : this.state.color2
        let lightStyle = {
            backgroundColor: color,
            boxShadow: `0px 0px 10px 2px ${color}`
        }

        let style1 = { color: this.state.color1 }
        let style2 = { color: this.state.color2 }

        return (
            <div id="colorPanel">
                <div id="blinky" className="green" >
                    <div id="twinkle"></div>
                </div>
                {/* <div id="lightBulb" style={lightStyle}>
                    {this.state.blink ? "1" : "2"}
                    <div id="twinkle"></div>
                </div> */}
                <table>
                    <th>
                        <td style={style1}>
                            Color 1
                    </td>
                        <td style={style2}>
                            Color 2
                    </td>
                    </th>
                    {colorBtns}
                </table>
            </div >

        )
    }
}

export default ColorPanel