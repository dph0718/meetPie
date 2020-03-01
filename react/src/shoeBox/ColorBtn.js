import React from 'react';


class ColorBtn extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let colorName = this.props.color
        let buttonStyle = {
            backgroundColor: colorName,
        }
        return (
            <button className="color" style={buttonStyle} onClick={() => this.props.setColor(colorName)}>{colorName}</button>
        )
    }
}

export default ColorBtn