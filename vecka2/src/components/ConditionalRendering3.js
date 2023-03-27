import React, { Component } from 'react'

class ConditionalRendering3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    //Ternary operator är den vanligaste jämförelseoperatorn
    // this.state.isLoggedIn ? <h2>Ja</h2> : <h2>Nej</h2>

    render() {
        return this.state.isLoggedIn ? (
            <div>
                <h2>Välkommen Richard</h2>
            </div>
        ) : (
            <div>
                <h2>Välkommen Gäst</h2>
            </div>
        )
    }
}

export default ConditionalRendering3
