import React, { Component } from 'react'
import moment from 'moment'

class Main extends Component {
    render() {
        const currentDate = moment().subtract(5, 'hours')

        let greeting
        if (currentDate.hours() < 12) {
            greeting = <p>Good morning!</p>
        } else if (currentDate.hours() < 18) {
            greeting = <p>Good afternoon!</p>
        } else {
            greeting = <p>Good evening!</p>
        }

        return (
            <div className="main">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn something... hopefully.</p>
                {greeting}
            </div>
        )
    }
}

export default Main
