import React, { Component } from 'react'
import CatTile from './CategoryTile'
import QTile from './QuestionTile'

class Board extends Component {
    render() {
        return (
            <div>
                <CatTile />
                <QTile />
            </div>
        )
    }
}

export default Board