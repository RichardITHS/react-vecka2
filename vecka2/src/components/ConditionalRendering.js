import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h2>Välkommen Richard</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Välkommen Gäst</h2>
                </div>
            )
        }
    }
}

export default ConditionalRendering
