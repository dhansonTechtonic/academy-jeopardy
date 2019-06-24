import React, { Component } from 'react'
import Lecture from '../Data/js-lecture-101'

class QuestionTile extends Component {
    createTiles(index){
        let arr = [];
        for (let j = 0; j < Lecture.questions[index].length; j++) {
            let div = (<div className="q-tile" key={index+Lecture.title+j}><h1>{Lecture.questions[index][j][2]}</h1></div>);
            arr.push(div);
        }
        return arr
    }
    render() {
        return (
            <div className="q-holder">
                <div className="q-section">{this.createTiles(0)}</div>
                <div className="q-section">{this.createTiles(1)}</div>
                <div className="q-section">{this.createTiles(2)}</div>
                <div className="q-section">{this.createTiles(3)}</div>
            </div>
        )
    }
}

export default QuestionTile
