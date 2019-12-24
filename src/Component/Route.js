import React, { Component } from 'react'
import { throwStatement } from '@babel/types'

export default class Route extends Component {
    render() {
        return (
            <div>
                `/${this.props.name}${this.props.id}`
            </div>
        )
    }
}
