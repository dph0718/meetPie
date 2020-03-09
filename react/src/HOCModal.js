import React from "react"

function modal(WrappedComponent, otherArgument) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                open: true,
                data: otherArgument
            }
        }

        toggleDisplay = (event) => {
            event.preventDefault()
            this.setState({ open: !this.state.open })
        }

        render() {
            let displayStyle = {
                display: this.state.open ? "" : "none",
                position: "fixed",
                top: 0,
                backgroundColor: "black",
                color: "white"
            }

            console.log(this.state.open)
            return (
                <div className="modal" style={displayStyle}>
                    <div className="modal-header" style={{ display: 'flex', flexDirection: "column", width: "100%", justifyContent: 'flex-end', alignItems: "flex-end" }}>
                        <button onClick={this.toggleDisplay} style={{ width: "2em" }}>✖</button>
                    </div>
                    <p>This would be, like, the header.</p>
                    <WrappedComponent data={this.state.data} {...this.props} />
                </div>
            )
        }
    }
}

export default modal; 