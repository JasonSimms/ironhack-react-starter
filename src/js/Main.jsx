import React, { Component } from 'react'
import moment from 'moment'

class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentDate: moment(),
        }

        this._updateTime = this._updateTime.bind(this)
    }

    render() {
        console.log('RENDERED MAIN CLASS')

        return (
            <div className="main">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn something... hopefully.</p>
                {this._renderTime()}
                <button onClick={this._updateTime}>CLick me to update the time!</button>
            </div>
        )
    }

    _updateTime() {
        this.setState({
            currentDate: moment(),
        })
    }

    _renderTime() {
        return <h3>{this.state.currentDate.format('DD.MM.YYYY HH:mm:ss')}</h3>
    }
}

export default Main
