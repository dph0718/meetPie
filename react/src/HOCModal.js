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

        toggleDisplay = () => {
            this.setState({ open: !this.state.open })
        }

        render() {
            let displayStyle = {
                display: this.state.open ? "" : "none",
                position: "fixed",
                top: 0
            }

            return (
                <div className="modal" style={displayStyle}>
                    <div className="modal-header"
                        onClick={this.toggleDisplay}>✖</div>
                    <p>This would be, like, the header.</p>
                    <WrappedComponent data={this.state.data} {...this.props} />
                </div>
            )
        }
    }
}

export default modal; 