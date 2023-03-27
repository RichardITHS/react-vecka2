import React, { Component } from 'react'

class ConditionalRendering2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let message
        if (this.state.isLoggedIn) {
            message = (
                <div>
                    <h2>Välkommen Richard</h2>
                </div>
            )
        } else {
            message = (
                <div>
                    <h2>Välkommen Gäst</h2>
                </div>
            )
        }
        return <div>{message}</div>
    }
}

export default ConditionalRendering2
